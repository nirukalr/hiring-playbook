import { competencies } from "../content/site";
import type { Role } from "../content/types";

export interface FeedbackForm {
  candidate: string;
  roleId: string;
  stage: string;
  interviewer: string;
  /** Per competency: "" (N/A) or "1".."4". */
  scores: string[];
  evidence: string[];
  recommendation: string;
  culture: string;
  openDoubts: string;
}

export const stages = [
  "Technical interview", "Evaluation exercise", "System design", "Team interview",
  "HR culture interview", "Leadership scenario", "Architecture presentation", "Case study / POC walkthrough",
];
export const recommendations = ["Strong hire", "Hire", "No hire", "Strong no hire"];
export const cultureSignals = ["Positive", "No concerns", "Concern (explain below)"];

/** A worked example so the builder shows its output at rest. */
export function exampleForm(): FeedbackForm {
  const scores = competencies.map(() => "");
  const evidence = competencies.map(() => "");
  scores[0] = "3"; evidence[0] = "Explained queue retry design and DLQ replay in own claims service";
  scores[2] = "3"; evidence[2] = "Added idempotency key unprompted; outbox when challenged";
  scores[4] = "4"; evidence[4] = "Raised a missed deadline to the client a week early with a recovery plan";
  return {
    candidate: "Example candidate", roleId: "sse", stage: stages[0], interviewer: "",
    scores, evidence, recommendation: "Hire", culture: "No concerns", openDoubts: "",
  };
}

export type Verdict = "none" | "ok" | "warn";

export interface Summary {
  average: number | null;
  mustMet: number;
  mustSeen: number;
  verdict: string;
  verdictTone: Verdict;
  mustWarn: boolean;
  text: string;
}

/** Applies the decision rule from the Feedback page to one interviewer's scores. */
export function summarize(form: FeedbackForm, role: Role): Summary {
  const { w, must } = role.weights;
  let sum = 0, wsum = 0, mustMet = 0, mustSeen = 0, hasOne = false;
  const lines: string[] = [];

  competencies.forEach((name, i) => {
    if (!w[i]) return;
    const isMust = must.includes(i);
    const score = form.scores[i] ? Number(form.scores[i]) : 0;
    const ev = form.evidence[i].trim();
    if (score) {
      sum += score * w[i]; wsum += w[i];
      if (score === 1) hasOne = true;
      if (isMust) { mustSeen++; if (score >= 3) mustMet++; }
    }
    lines.push(`  ${name}${isMust ? " (must)" : ""}: ${score || "N/A"}${ev ? `  — ${ev}` : ""}`);
  });

  const average = wsum ? sum / wsum : null;
  let verdict = "Add scores";
  if (wsum) {
    if (hasOne) verdict = "No hire: a score of 1";
    else if (mustSeen < must.length) verdict = "Must-haves not all assessed";
    else if (mustMet < must.length) verdict = "Must-have below 3: resolve with evidence";
    else if (average! < 3) verdict = "Average below 3";
    else verdict = "Meets the hire bar";
  }

  const text = [
    "INTERVIEW FEEDBACK",
    `Candidate: ${form.candidate || "—"} | Role: ${role.name} | Stage: ${form.stage}`,
    `Interviewer: ${form.interviewer || "—"} | Submitted before discussing: yes`,
    "",
    `Scores (1–4, weighted for ${role.name}):`,
    ...lines,
    "",
    `Weighted average: ${average ? average.toFixed(2) : "—"} | Must-haves at 3+: ${mustMet} of ${must.length}`,
    `Culture signals: ${form.culture}`,
    `Needs validation: ${form.openDoubts || "—"}`,
    `Recommendation: ${form.recommendation}`,
  ].join("\n");

  return {
    average, mustMet, mustSeen, verdict,
    verdictTone: verdict === "Meets the hire bar" ? "ok" : wsum ? "warn" : "none",
    mustWarn: mustSeen > 0 && mustMet < must.length,
    text,
  };
}
