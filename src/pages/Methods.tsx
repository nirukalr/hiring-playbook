import { A } from "../components/A";

export default function Methods() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Evaluation methods</div>
      <h1>Choose the lightest method that resolves the doubt</h1>
      <p className="lead">Every method costs the candidate and the reviewer time. Use the primary method for the role, and add a heavier one only when the panel has written down a specific question it must answer.</p>
      </header>
      
      <section className="block">
      <div className="tbl"><table>
      <thead><tr><th>Method</th><th className="c">Intern</th><th className="c">SE</th><th className="c">SSE</th><th className="c">TL</th><th className="c">Architect</th><th>Candidate time</th></tr></thead>
      <tbody>
      <tr><td>Online coding test</td><td className="c mark p">●</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="num">60 min</td></tr>
      <tr><td>Live coding / pair programming</td><td className="c mark p">●</td><td className="c mark p">●</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="num">20–60 min</td></tr>
      <tr><td>Take-home assignment</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="num">≤ 4 h</td></tr>
      <tr><td>Case study</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="num">1–5 days</td></tr>
      <tr><td>Proof of concept (POC)</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="num">1–3 days</td></tr>
      <tr><td>System design interview</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark p">●</td><td className="c mark p">●</td><td className="c mark n">–</td><td className="num">45–60 min</td></tr>
      <tr><td>Code review exercise</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark p">●</td><td className="c mark p">●</td><td className="c mark n">–</td><td className="num">30–45 min</td></tr>
      <tr><td>Debugging exercise</td><td className="c mark o">○</td><td className="c mark o">○</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="num">30 min</td></tr>
      <tr><td>Leadership scenario</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark p">●</td><td className="c mark o">○</td><td className="num">60 min + prep</td></tr>
      <tr><td>Architecture portfolio presentation</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark p">●</td><td className="num">60 min + prep</td></tr>
      <tr><td>Architecture kata</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark o">○</td><td className="c mark p">●</td><td className="num">90 min</td></tr>
      <tr><td>Assessment day (group exercise)</td><td className="c mark o">○</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="c mark n">–</td><td className="num">half day</td></tr>
      </tbody></table></div>
      <p className="small muted">● primary method for the role · ○ optional, to resolve a named doubt · – not used</p>
      </section>
      
      <section className="block">
      <h2>The methods in detail</h2>
      <div className="methods">
      <div className="method"><h4>Live coding / pair programming</h4><p className="small">Candidate and engineer build a small feature together in a shared editor.</p><dl><dt>Reveals</dt><dd>Clarifying, coding fluency, testing habit, collaboration</dd><dt>Watch out</dt><dd>Nerves; keep the task small and the requirement clear</dd><dt>Template</dt><dd><A href="/templates/feedback-form">Feedback form</A></dd></dl></div>
      <div className="method"><h4>Take-home assignment</h4><p className="small">A small, bounded task, 4 hours or less, followed by a 30-minute review.</p><dl><dt>Reveals</dt><dd>Code quality, structure and tests in a calm setting</dd><dt>Watch out</dt><dd>Unpaid time and AI help; always review it live</dd><dt>Template</dt><dd><A href="/templates/assignment-brief">Assignment brief</A></dd></dl></div>
      <div className="method"><h4>Case study</h4><p className="small">A realistic multi-day problem in the project's domain, such as the Support at Home claim processor.</p><dl><dt>Reveals</dt><dd>Ambiguity handling, business-rule reasoning, delivery habits over days</dd><dt>Watch out</dt><dd>Heavy; strong people with jobs drop out. Use Core (1–2 days) by default</dd><dt>Template</dt><dd><A href="/templates/assignment-brief">Assignment brief</A> · <A href="/templates/candidate-emails">case study email</A></dd></dl></div>
      <div className="method"><h4>Proof of concept (POC)</h4><p className="small">A time-boxed spike on the project's riskiest technology, presented as a demo with findings.</p><dl><dt>Reveals</dt><dd>Learning speed, judgement on unknowns, honest reporting of limits</dd><dt>Watch out</dt><dd>Must not be real client work; cap at 3 days</dd><dt>Template</dt><dd><A href="/templates/poc-brief">POC brief</A></dd></dl></div>
      <div className="method"><h4>System design interview</h4><p className="small">A project-shaped problem designed live on a whiteboard tool, then a constraint changes.</p><dl><dt>Reveals</dt><dd>Data modelling, failure handling, scale, cost and trade-offs</dd><dt>Watch out</dt><dd>Generic "design Twitter" problems reward memorised answers</dd><dt>Template</dt><dd><A href="/templates/system-design-exercise">Design exercise card</A></dd></dl></div>
      <div className="method"><h4>Code review exercise</h4><p className="small">Review a realistic pull request with planted issues, as you would for a teammate.</p><dl><dt>Reveals</dt><dd>Quality bar, security and failure awareness, how they give feedback</dd><dt>Watch out</dt><dd>Plant issues of different severity, not only style nits</dd><dt>Template</dt><dd><A href="/templates/code-review-exercise">Code review guide</A></dd></dl></div>
      <div className="method"><h4>Leadership scenario</h4><p className="small">A slipping delivery with team and client problems; the candidate presents a recovery plan.</p><dl><dt>Reveals</dt><dd>Prioritisation, communication, people handling, honesty with clients</dd><dt>Watch out</dt><dd>Probe what they did in real situations, not only the plan</dd><dt>Template</dt><dd><A href="/templates/leadership-scenario">Leadership scenario</A></dd></dl></div>
      <div className="method"><h4>Architecture portfolio and kata</h4><p className="small">Present real past architectures, then design for a new brief while constraints change.</p><dl><dt>Reveals</dt><dd>Breadth, trade-offs, cost, security, migration, influence</dd><dt>Watch out</dt><dd>Polished slides can hide shallow ownership; ask about regrets</dd><dt>Template</dt><dd><A href="/templates/architecture-presentation">Architecture presentation brief</A></dd></dl></div>
      </div>
      </section>
    </>
  );
}
