import type { Role } from "../types";

/** Weights are in the same order as `competencies` (see ../site.ts). */
export const intern: Role = {
  id: "intern",
  slug: "intern",
  name: "Intern",
  navTitle: "Intern",
  track: 1,
  summary: "Final-year students and recent graduates. Hired for potential.",
  lead: "Final-year students and recent graduates. We hire for potential: fundamentals, reasoning and how fast they learn.",
  candidateTime: "≈ 3 h",
  decisionTime: "14 days",
  tags: ["Cohort intake"],
  weights: { w: [10, 25, 0, 15, 10, 15, 25, 0], must: [1, 6] },
  lookFor: [
    "Solid fundamentals: data structures, OOP, SQL basics, HTTP",
    "Breaks an unfamiliar problem down and thinks aloud",
    "Has built something on their own and can explain it",
    "Takes hints well and learns visibly during the interview",
  ],
  panel: "One SE or SSE from the project, plus the project tech lead. HR for culture. No independent interviewer needed; TL Forum calibrates intern scorecards each cohort.",
  stages: [
    { stage: "CV and academic screen", format: "AI rubric tuned for projects, internships and grades; human review", time: "–", who: "TA" },
    { stage: "Online coding test", format: "2 auto-graded problems plus 10 fundamentals questions", time: "60 min", who: "TA runs; TL sets pass mark" },
    { stage: "Technical interview", format: "Walk through a university or personal project (15), fundamentals (10), live coding of a simple problem (20)", time: "45 min", who: "SE/SSE + TL" },
    { stage: "Team meet", format: "Informal session with the future buddy: how they learn, work together, ask for help", time: "30 min", who: "Project buddy" },
    { stage: "HR culture interview", format: "Values, motivation, expectations", time: "30 min", who: "HR" },
  ],
  sampleQuestions: [
    "\"Pick a project you are proud of. What was the hardest bug, and how did you find it?\"",
    "\"How would you store a student's course enrolments? What happens if a course is deleted?\"",
    "\"Count how many times the largest number appears in an array. What inputs would you test?\"",
    "\"What did you learn in the last month that nobody asked you to learn?\"",
  ],
  redFlags: [
    "Cannot explain code in their own project",
    "Freezes rather than reasoning aloud, even with hints",
    "Copies an answer they cannot explain",
  ],
  redFlagsNote: "Campus drives: run stages 3 to 5 as an assessment day for up to 30 candidates, with a group design exercise added.",
};
