import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "../src/App";
import { routes } from "../src/routes";
import { flatNav } from "../src/content/nav";
import { roles } from "../src/content/roles";
import { competencies } from "../src/content/site";
import { exampleForm, summarize } from "../src/lib/feedback";

const known = new Set(routes.map((r) => r.path));
const render = (path: string) =>
  renderToString(<StaticRouter location={path}><App /></StaticRouter>);

describe("site", () => {
  it("every menu entry has a page", () => {
    for (const n of flatNav) expect(known.has(n.path), `menu entry ${n.path} has no route`).toBe(true);
  });

  it("every page is in the menu", () => {
    const inMenu = new Set(flatNav.map((n) => n.path));
    for (const p of known) expect(inMenu.has(p), `route ${p} is missing from the menu (src/content/nav.ts)`).toBe(true);
  });

  it.each([...known])("%s renders and only links to real pages", (path) => {
    const html = render(path);
    expect(html).not.toContain("That page does not exist");
    for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
      expect(known.has(href), `${path} links to missing page ${href}`).toBe(true);
    }
  });

  it("an unknown path shows the not-found page", () => {
    expect(render("/nope")).toContain("That page does not exist");
  });

  it("role weights line up with the competencies", () => {
    for (const r of roles) {
      expect(r.weights.w).toHaveLength(competencies.length);
      for (const m of r.weights.must) expect(r.weights.w[m], `${r.id} must-have ${m} has weight 0`).toBeGreaterThan(0);
    }
  });
});

describe("feedback decision rule", () => {
  const sse = roles.find((r) => r.id === "sse")!;
  const scored = (scores: Record<number, string>) => {
    const f = exampleForm();
    f.scores = f.scores.map((_, i) => scores[i] ?? "");
    return summarize(f, sse);
  };

  it("the worked example meets the bar", () => {
    const s = summarize(exampleForm(), sse);
    expect(s.verdict).toBe("Meets the hire bar");
    expect(s.average).toBeCloseTo(3.3, 2);
  });
  it("any 1 is a no hire", () => expect(scored({ 0: "4", 2: "4", 4: "4", 1: "1" }).verdict).toBe("No hire: a score of 1"));
  it("unassessed must-have is flagged", () => expect(scored({ 0: "4", 2: "4" }).verdict).toBe("Must-haves not all assessed"));
  it("must-have below 3 is flagged", () => expect(scored({ 0: "4", 2: "2", 4: "4" }).verdict).toBe("Must-have below 3: resolve with evidence"));
  it("no scores asks for scores", () => expect(scored({}).verdict).toBe("Add scores"));
});
