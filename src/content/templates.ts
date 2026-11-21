import type { Template } from "./types";

/**
 * The hiring kit. Each template's text lives in its own file in ./templates/<slug>.txt,
 * so you edit the template without touching code. To add one: drop a .txt file there and add a line here.
 */
const files = import.meta.glob("./templates/*.txt", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const entries: Omit<Template, "body">[] = [
  { slug: "hiring-brief", title: "Project Hiring Brief", navTitle: "Project Hiring Brief", meta: "Hiring lead · written at role kickoff" },
  { slug: "preparation-checklist", title: "Interviewer preparation checklist", navTitle: "Preparation checklist", meta: "Every interviewer · before each interview" },
  { slug: "feedback-form", title: "Interview feedback form", navTitle: "Interview feedback form", meta: "Every stage · submit within 24 hours" },
  { slug: "culture-interview-form", title: "HR culture interview guide and form", navTitle: "HR culture interview form", meta: "HR partner · every role" },
  { slug: "assignment-brief", title: "Take-home assignment / case study brief", navTitle: "Assignment / case study brief", meta: "Hiring lead · SE and SSE" },
  { slug: "poc-brief", title: "Proof of concept (POC) brief", navTitle: "POC brief", meta: "SSE and Architect · time-boxed" },
  { slug: "system-design-exercise", title: "System design exercise card", navTitle: "System design exercise", meta: "SE (optional), SSE, TL" },
  { slug: "code-review-exercise", title: "Code review exercise guide", navTitle: "Code review exercise", meta: "SSE and TL · team session" },
  { slug: "leadership-scenario", title: "Leadership scenario", navTitle: "Leadership scenario", meta: "Tech Lead · sent 48 hours ahead" },
  { slug: "architecture-presentation", title: "Architecture presentation brief", navTitle: "Architecture presentation", meta: "Architect · sent 1 week ahead" },
  { slug: "debrief-decision-note", title: "Debrief agenda and decision note", navTitle: "Debrief and decision note", meta: "Hiring lead · within 2 working days of the last stage" },
  { slug: "candidate-emails", title: "Candidate emails", navTitle: "Candidate emails", meta: "TA and hiring lead" },
];

export const templates: Template[] = entries.map((t) => {
  const body = files[`./templates/${t.slug}.txt`];
  if (body === undefined) throw new Error(`Missing template text: src/content/templates/${t.slug}.txt`);
  return { ...t, body };
});
