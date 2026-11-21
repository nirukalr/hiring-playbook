import type { Role } from "../types";

/** Weights are in the same order as `competencies` (see ../site.ts). */
export const softwareEngineer: Role = {
  id: "se",
  slug: "software-engineer",
  name: "Software Engineer",
  navTitle: "Software Engineer",
  track: 2,
  summary: "About 2 to 4 years. Owns well-defined features end to end.",
  lead: "About 2 to 4 years. Owns well-defined features end to end within an agreed design.",
  candidateTime: "≈ 4 h",
  decisionTime: "21 days",
  tags: [],
  weights: { w: [20, 20, 10, 20, 15, 10, 5, 0], must: [0, 3, 4] },
  lookFor: [
    "Builds, tests and ships features without hand-holding",
    "Writes readable code and tests the business rules",
    "Handles the common failure cases: bad input, retries, timeouts",
    "Asks clarifying questions before writing code",
  ],
  panel: "Project tech lead (hiring lead) plus one independent SSE or above from the interviewer pool. One project engineer for the team interview.",
  stages: [
    { stage: "Technical interview", format: "Intro (5), deep-dive (25), what-if challenge (15), role scenario (15), coding check (10), questions (5)", time: "75 min", who: "Hiring lead + independent" },
    { stage: "Evaluation exercise", format: "Pair programming on a small realistic feature, or a take-home of 4 hours or less followed by a 30-min review", time: "60 min", who: "Project engineer + hiring lead" },
    { stage: "Team interview", format: "Engineers describe a real ticket; candidate asks questions and plans the approach", time: "45 min", who: "Project engineers" },
    { stage: "HR culture interview", format: "Structured values interview", time: "45 min", who: "HR" },
  ],
  sampleQuestions: [
    "\"Walk me through a feature you built. Where does the data live, and what happens when the API call fails?\"",
    "\"What if this request is sent twice?\"",
    "\"How did you test it, and what did you not test?\"",
    "\"Tell me about a requirement that was unclear. What did you do before coding?\"",
  ],
  redFlags: [
    "Only describes the happy path",
    "Testing is \"QA's job\"",
    "Cannot separate their work from the team's",
  ],
};
