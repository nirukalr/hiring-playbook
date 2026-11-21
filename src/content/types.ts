export interface Weights {
  /** Weight per competency, same order as `competencies`. 0 hides the competency for this role. */
  w: number[];
  /** Indexes (into `competencies`) of the must-haves. */
  must: number[];
}

export interface Stage { stage: string; format: string; time: string; who: string }

export interface Role {
  /** Key used by the feedback builder. */
  id: string;
  /** URL segment: /roles/<slug> */
  slug: string;
  name: string;
  /** Short name for the side menu. */
  navTitle: string;
  track: number;
  summary: string;
  lead: string;
  candidateTime: string;
  decisionTime: string;
  /** Extra grey pills on the role page. */
  tags: string[];
  weights: Weights;
  lookFor: string[];
  panel: string;
  stages: Stage[];
  sampleQuestions: string[];
  redFlags: string[];
  redFlagsNote?: string;
}

export interface Template {
  /** URL segment: /templates/<slug>; also the file name in ./templates/<slug>.txt */
  slug: string;
  title: string;
  navTitle: string;
  /** Owner and timing, shown under the title and on the index card. */
  meta: string;
  /** Optional link to an editable copy (Google Doc etc.). */
  editUrl?: string;
  body: string;
}
