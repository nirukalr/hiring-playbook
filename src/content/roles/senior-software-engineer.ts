import type { Role } from "../types";

/** Weights are in the same order as `competencies` (see ../site.ts). */
export const seniorSoftwareEngineer: Role = {
  id: "sse",
  slug: "senior-software-engineer",
  name: "Senior Software Engineer",
  navTitle: "Senior SE",
  track: 3,
  summary: "About 5 or more years. Owns complex features and mentors others.",
  lead: "About 5 or more years. Owns complex features and technical decisions in their area, and mentors others.",
  candidateTime: "≈ 5 h",
  decisionTime: "21 to 28 days",
  tags: [],
  weights: { w: [20, 15, 15, 15, 15, 10, 5, 5], must: [0, 2, 4] },
  lookFor: [
    "Explains production systems they owned, including failures and trade-offs",
    "Designs for idempotency, consistency, observability and safe release",
    "Clarifies requirements with product owners and clients",
    "Raises the quality of the people around them",
  ],
  panel: "Project tech lead plus an independent SSE, Tech Lead or Architect matched on discipline. Two project engineers for the team session.",
  stages: [
    { stage: "Technical interview", format: "Standard 75-min structure; deep-dive goes into production behaviour", time: "75 min", who: "Hiring lead + independent" },
    { stage: "System design", format: "A project-shaped problem (for example, a claims workflow API with queues). Probe data model, failure, scale, cost, rollout", time: "60 min", who: "Independent + project engineer" },
    { stage: "Case study or POC (only for a named doubt)", format: "Core case study (1 to 2 days), Full (3 to 5 days) or POC (1 to 2 days), then a 60-min walkthrough with a live change", time: "Varies", who: "Hiring lead + second reviewer" },
    { stage: "Team session", format: "Review a real-looking pull request with planted problems, then open Q&A with the team", time: "60 min", who: "Project engineers" },
    { stage: "HR culture interview", format: "Structured values interview", time: "45 min", who: "HR" },
  ],
  sampleQuestions: [
    "\"What was the worst production incident in something you owned? What changed afterwards?\"",
    "\"The database write succeeds but publishing the event fails. What now?\"",
    "\"Which practices are non-negotiable for you, and why?\"",
    "\"How have you helped a junior engineer get better?\"",
  ],
  redFlags: [
    "Stays at tool names; stalls on \"how?\"",
    "Defends the first design against new facts",
    "No examples of influencing quality beyond their own code",
  ],
};
