import { A } from "../components/A";

export default function Prepare() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Interviewer preparation</div>
      <h1>No one interviews without the project's context</h1>
      <p className="lead">Interviewers from outside the project test what they know, not what the project needs, unless we give them the context. Three things fix that: a certified pool, a Project Hiring Brief, and a short briefing.</p>
      </header>
      
      <section className="block">
      <div className="grid g3">
      <div className="card"><div className="eyebrow">1 · Certified pool</div><h4>Trained before they interview</h4><p className="small">Read this playbook, shadow 2 interviews scoring silently, lead 2 with an observer, then sign-off by the HEG. Grouped by discipline and level. At most 2 interviews a week each.</p></div>
      <div className="card"><div className="eyebrow">2 · Hiring Brief</div><h4>The project on 2 to 3 pages</h4><p className="small">Written by the hiring lead: the project, why the role exists, the first 90 days, stack, the 3 hardest problems, team reality, must-haves, scenario and glossary. Sanitised, so any interviewer can read it. <A href="/templates/hiring-brief">Template</A>.</p></div>
      <div className="card"><div className="eyebrow">3 · Briefing</div><h4>30 minutes, once per role</h4><p className="small">Hiring lead walks every new interviewer through the hard parts, what a strong answer sounds like, and what we must not compromise on. Recorded for later interviewers.</p></div>
      </div>
      <div className="callout key"><p><b>Readiness test:</b> before the first candidate, an interviewer from outside the project explains the role back in two minutes. If they cannot, the brief or the briefing is not ready.</p></div>
      </section>
      
      <section className="block">
      <h2>Preparation timeline for each interviewer</h2>
      <div className="tbl"><table>
      <thead><tr><th>When</th><th>What</th><th>Time</th></tr></thead>
      <tbody>
      <tr><td>On assignment to the role</td><td>Read the Hiring Brief and the role track</td><td className="num">45 min</td></tr>
      <tr><td>Before the first candidate</td><td>Attend or watch the briefing; ask questions; add gaps to the brief</td><td className="num">30 min</td></tr>
      <tr><td>Optional, long-running roles</td><td>Sit in on a standup or demo, or walk a sanitised architecture with the team</td><td className="num">60 min</td></tr>
      <tr><td>2 days before</td><td>Read the CV and the AI screening notes; choose the deep-dive project and 3 probes from the needs-validation items</td><td className="num">20 min</td></tr>
      <tr><td>1 day before</td><td>Sync with the co-interviewer: who leads which block, who scores which competency</td><td className="num">10 min</td></tr>
      <tr><td>Within 24 hours after</td><td>Submit the feedback form alone, with evidence</td><td className="num">20 min</td></tr>
      <tr><td>After the debrief</td><td>Report what the brief was missing and what the candidate asked that we could not answer</td><td className="num">5 min</td></tr>
      </tbody></table></div>
      <p className="small muted">Total: about 3 hours for the first candidate on a role, then about 2 hours per candidate. TA sends each interviewer a candidate pack: CV, AI screening notes, Hiring Brief, the stage guide and the feedback form link.</p>
      </section>
    </>
  );
}
