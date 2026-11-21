import type { Role } from "../types";

/** Weights are in the same order as `competencies` (see ../site.ts). */
export const techLead: Role = {
  id: "tl",
  slug: "tech-lead",
  name: "Tech Lead",
  navTitle: "Tech Lead",
  track: 4,
  summary: "Owns the technical outcome of a team and builds the team.",
  lead: "Owns the technical outcome of a team, builds the team, and is the client's technical counterpart. For a new project, hire the lead first.",
  candidateTime: "≈ 6 h",
  decisionTime: "28 days",
  tags: [],
  weights: { w: [15, 10, 15, 5, 20, 10, 5, 20], must: [2, 4, 7] },
  lookFor: [
    "Still technically strong: can design, review and unblock",
    "Has recovered a slipping delivery and can say how",
    "Builds teams: hiring, mentoring, giving hard feedback",
    "Handles client disagreement with evidence and calm",
  ],
  panel: "Delivery head or engineering manager (hiring lead), one independent from the TL Forum, one from the Architects' Forum for design, and future team members.",
  stages: [
    { stage: "Technical interview", format: "Standard 75-min structure on a system they led", time: "75 min", who: "Hiring lead + TL Forum independent" },
    { stage: "System design and code review", format: "Design exercise (45) plus reviewing a pull request as a lead would (30)", time: "75 min", who: "Architects' Forum member" },
    { stage: "Leadership scenario", format: "A delivery-recovery case sent 48 h ahead; candidate presents a plan (20) and is challenged (40)", time: "60 min", who: "Hiring lead + delivery manager" },
    { stage: "Team and stakeholder interview", format: "Engineers who would report to them, plus a product owner or delivery manager", time: "60 min", who: "Project team" },
    { stage: "HR culture interview", format: "Structured values interview, with a leadership-behaviour focus", time: "45 min", who: "HR" },
    { stage: "Head of engineering conversation", format: "Expectations, career, sell the role", time: "30 min", who: "Optional" },
  ],
  sampleQuestions: [
    "\"Tell me about a delivery that was slipping. When did you know, who did you tell, and what did you change?\"",
    "\"An engineer on your team keeps missing estimates. Walk me through your first conversation.\"",
    "\"The client wants a feature you believe will hurt the system. What do you do?\"",
    "\"How did you hire for your last team? Who was your best hire, and why?\"",
  ],
  redFlags: [
    "\"We\" for everything; no personal decisions",
    "Blames the team or the client for every miss",
    "Has stopped being able to go deep technically",
  ],
};
