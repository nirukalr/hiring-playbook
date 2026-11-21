import type { Role } from "../types";

/** Weights are in the same order as `competencies` (see ../site.ts). */
export const architect: Role = {
  id: "arch",
  slug: "architect",
  name: "Architect",
  navTitle: "Architect",
  track: 5,
  summary: "Shapes solutions across projects and owns technical risk.",
  lead: "Shapes solutions across projects, owns technical risk, and influences without direct authority.",
  candidateTime: "≈ 6 h",
  decisionTime: "35 days",
  tags: [],
  weights: { w: [15, 10, 30, 5, 10, 10, 5, 15], must: [0, 2, 7] },
  lookFor: [
    "Architecture choices explained with trade-offs, cost and risk",
    "Security, data, integration and migration thinking, not only diagrams",
    "Has seen designs through to production and lived with the result",
    "Brings tech leads and clients along through influence",
  ],
  panel: "Two members of the Architects' Forum (one independent of the project), the hiring lead, two tech leads, and the CTO for the final conversation.",
  stages: [
    { stage: "Architecture portfolio presentation", format: "Candidate presents one or two real architectures (sanitised): context, options, decision, outcome, regrets", time: "60 min", who: "Architects' Forum × 2" },
    { stage: "Architecture kata", format: "A realistic brief with constraints (tenancy, compliance, cost, legacy). Candidate designs, then the panel changes a constraint", time: "90 min", who: "Architects' Forum + hiring lead" },
    { stage: "POC or design review (optional)", format: "Time-boxed POC (2 to 3 days) on the project's riskiest technology, or a written review of an existing design", time: "Varies", who: "Architects' Forum" },
    { stage: "Stakeholder session", format: "With tech leads and a delivery head: how they would work with teams and clients", time: "60 min", who: "Tech leads + delivery head" },
    { stage: "HR culture interview", format: "Structured values interview", time: "45 min", who: "HR" },
    { stage: "CTO conversation", format: "Vision, technical strategy, expectations", time: "45 min", who: "CTO" },
  ],
  sampleQuestions: [
    "\"Which architecture decision do you most regret? What signal did you miss?\"",
    "\"Now the client needs data residency in two regions. What changes?\"",
    "\"How do you stop a team from adopting a technology you think is wrong?\"",
    "\"How do you estimate the run cost of this design?\"",
  ],
  redFlags: [
    "Diagrams without failure modes, cost or migration",
    "Never stayed long enough to live with their designs",
    "Wins arguments by authority rather than evidence",
  ],
};
