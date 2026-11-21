import { Weights } from "../components/Weights";
import type { Role } from "../content/types";

export default function RolePage({ role: r }: { role: Role }) {
  return (
    <>
      <header className="page-head">
        <div className="role-head">
          <div><div className="eyebrow">Track {r.track}</div><h1>{r.name}</h1></div>
          <div className="facts">
            <span className="pill">{r.candidateTime} candidate time</span>
            <span className="pill teal">{r.decisionTime} to decision</span>
            {r.tags.map((t) => <span key={t} className="pill grey">{t}</span>)}
          </div>
        </div>
        <p className="lead">{r.lead}</p>
      </header>

      <section className="block">
        <div className="grid g2">
          <div className="grid">
            <h3>What we look for</h3>
            <ul className="clean">{r.lookFor.map((x) => <li key={x}>{x}</li>)}</ul>
            <h3>Panel</h3>
            <p>{r.panel}</p>
          </div>
          <div className="grid">
            <h3>Weights (must-haves in orange)</h3>
            <Weights weights={r.weights} />
          </div>
        </div>
      </section>

      <section className="block">
        <h2>Stages</h2>
        <div className="tbl">
          <table>
            <thead><tr><th>Stage</th><th>Format</th><th>Time</th><th>Who</th></tr></thead>
            <tbody>
              {r.stages.map((s) => (
                <tr key={s.stage}><td>{s.stage}</td><td>{s.format}</td><td className="num">{s.time}</td><td>{s.who}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="block">
        <div className="grid g2">
          <div className="card">
            <h4>Sample questions</h4>
            <ul className="clean small">{r.sampleQuestions.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="card">
            <h4>Red flags</h4>
            <ul className="clean small">{r.redFlags.map((x) => <li key={x}>{x}</li>)}</ul>
            {r.redFlagsNote && <p className="small muted">{r.redFlagsNote}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
