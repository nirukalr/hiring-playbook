import { A } from "../components/A";
import { FeedbackBuilder } from "../components/FeedbackBuilder";

export default function Feedback() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Feedback and decisions</div>
      <h1>Every interview produces a written, scored record within 24 hours</h1>
      <p className="lead">Each interviewer completes the same feedback form for every stage, alone, before seeing anyone else's. The debrief starts from these records, and the <A href="/templates/debrief-decision-note">decision note</A> is kept with them.</p>
      </header>
      
      <section className="block">
      <div className="grid g2">
      <div className="card">
      <h4>The 4-point scale</h4>
      <ul className="clean small">
      <li><b>1 · Clear gap:</b> serious concern at this level</li>
      <li><b>2 · Below the bar:</b> leans no hire</li>
      <li><b>3 · Meets the bar:</b> what we expect at this level</li>
      <li><b>4 · Above the bar:</b> would raise our average</li>
      <li><b>N/A · Not assessed:</b> never guess</li>
      </ul>
      </div>
      <div className="card">
      <h4>Decision rule</h4>
      <ul className="clean small">
      <li>Scores are read aloud before any discussion</li>
      <li><b>Hire:</b> no 1s, at least 3 on every must-have from every interviewer, weighted average 3 or more, and a yes on culture</li>
      <li>A 2 on a must-have is resolved with evidence, never debate; unresolved means no hire</li>
      <li>The independent interviewer's and HR's concerns are answered in writing</li>
      <li>"Not sure" is a no hire; delivery pressure does not lower the bar</li>
      </ul>
      </div>
      </div>
      </section>
      
      <section className="block">
      <h2>Competencies and anchors</h2>
      <div className="tbl"><table>
      <thead><tr><th>Competency</th><th>2 · below the bar</th><th>3 · meets the bar</th><th>4 · above the bar</th></tr></thead>
      <tbody>
      <tr><td><b>Technical depth</b></td><td>Names tools, cannot explain them in own work</td><td>Explains own work down to data, code, config</td><td>Explains why the platform behaves as it does</td></tr>
      <tr><td><b>Problem solving</b></td><td>Needs heavy prompting; ignores new facts</td><td>Breaks problems down; revises on new facts</td><td>Finds edge cases the panel had not raised</td></tr>
      <tr><td><b>System design</b></td><td>Happy path only</td><td>Handles failure, consistency, observability</td><td>Clear options with cost and trade-offs</td></tr>
      <tr><td><b>Code quality and testing</b></td><td>Tests are an afterthought</td><td>Tests business rules; readable code</td><td>Test strategy tied to risk</td></tr>
      <tr><td><b>Ownership and delivery</b></td><td>Cannot separate own work from team's</td><td>Owned features end to end; raised issues early</td><td>Drove outcomes beyond their own task</td></tr>
      <tr><td><b>Communication</b></td><td>Unclear or rambling</td><td>Clear, structured; clarifies requirements</td><td>Adapts to audience; calm in conflict</td></tr>
      <tr><td><b>Learning and curiosity</b></td><td>Learns only when told</td><td>Recent self-driven learning, applied</td><td>Visible depth in self-driven work</td></tr>
      <tr><td><b>Leadership and influence</b></td><td>Directs by authority or avoids conflict</td><td>Has grown people and steered decisions</td><td>Builds teams and shifts direction across groups</td></tr>
      </tbody></table></div>
      </section>
      
      <section className="block">
      <h2>Feedback builder</h2>
      <p className="small">Fill this in after an interview to produce a consistent feedback record, then copy it into the hiring system. Nothing is saved on this page.</p>
      <FeedbackBuilder />
      </section>
    </>
  );
}
