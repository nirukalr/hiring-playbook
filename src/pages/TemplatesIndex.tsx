import { A } from "../components/A";
import { templates } from "../content/templates";

export default function TemplatesIndex() {
  return (
    <>
      <header className="page-head">
        <div className="eyebrow">Templates</div>
        <h1>The hiring kit</h1>
        <p className="lead">Copy these into your team's space and adapt them per role. The Hiring Excellence Group keeps the master versions here.</p>
      </header>
      <section className="block">
        <div className="grid g2">
          {templates.map((t) => (
            <A key={t.slug} className="card link" href={`/templates/${t.slug}`}>
              <h4>{t.title}</h4>
              <p className="small muted">{t.meta}</p>
            </A>
          ))}
        </div>
      </section>
    </>
  );
}
