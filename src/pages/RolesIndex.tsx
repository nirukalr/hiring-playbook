import { A } from "../components/A";
import { roles } from "../content/roles";

export default function RolesIndex() {
  return (
    <>
      <header className="page-head">
        <div className="eyebrow">Role tracks</div>
        <h1>What is common, and what is special to each level</h1>
        <p className="lead">All tracks share the competencies, the 4-point scale, the feedback form and the decision rule. Each track sets its own weights, must-haves, stage formats, evaluation method and panel.</p>
      </header>
      <section className="block">
        <div className="grid g2">
          {roles.map((r) => (
            <A key={r.id} className="card link" href={`/roles/${r.slug}`}>
              <div className="eyebrow">Track {r.track}</div>
              <h3>{r.name}</h3>
              <p className="small muted">{r.summary}</p>
              <div className="facts"><span className="pill">{r.candidateTime}</span><span className="pill teal">{r.decisionTime}</span></div>
            </A>
          ))}
        </div>
        <p className="small muted">Candidate time excludes take-homes. See <A href="/process">the common process</A> for how the tracks compare stage by stage.</p>
      </section>
    </>
  );
}
