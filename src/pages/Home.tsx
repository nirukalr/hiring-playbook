import { A } from "../components/A";

export default function Home() {
  return (
    <>
      <div className="hero">
      <div className="eyebrow">Mitra AI · Engineering</div>
      <h1>Engineering Hiring Playbook</h1>
      <p className="lead">One standard way to find, assess and hire engineers, from interns to architects. The project that needs the person owns the decision, independent interviewers hold the company bar, and HR guards our culture.</p>
      <div className="meta"><span>Version <b>1.0</b></span><span>Issued <b>10 November 2026</b></span><span>Responsible <b>CTO Office</b></span><span>Maintained by <b>Hiring Excellence Group</b></span></div>
      </div>
      
      <section className="block">
      <header className="page-head">
      <div className="eyebrow">Why and what we hire for</div>
      <h2>Every hire passes three lenses</h2>
      <p className="lead">Today each interviewer runs interviews their own way, so the same candidate could pass with one panel and fail with another. This playbook gives every role the same backbone, adds what is special to each level, and makes each group's responsibility explicit.</p>
      </header>
      <div className="grid g3">
      <div className="card lens">
      <div className="eyebrow">Engineering bar</div>
      <h3>Would they raise our average?</h3>
      <p>Depth, reasoning, design and quality at the level we are hiring for, on any project.</p>
      <p className="who">Guarded by the independent interviewer</p>
      </div>
      <div className="card lens l2">
      <div className="eyebrow hot">Project fit</div>
      <h3>Can they deliver what this project needs?</h3>
      <p>The real work of the next 6 to 12 months: the domain, the tech, the pace and the client.</p>
      <p className="who">Owned by the project team that needs the person</p>
      </div>
      <div className="card lens l3">
      <div className="eyebrow teal">Culture</div>
      <h3>Will they strengthen how we work?</h3>
      <p>Ownership, candour, rigour, respect and learning, shown in what they have actually done.</p>
      <p className="who">Assessed by HR, with evidence from every interviewer</p>
      </div>
      </div>
      <div className="callout key"><p><b>The rule:</b> a hire needs a yes on all three. A brilliant engineer who would damage the team, or a good culture fit who cannot do the work, is a no.</p></div>
      </section>
      
      <section className="block">
      <h2>Principles every interviewer follows</h2>
      <div className="grid g2">
      <ul className="clean">
      <li><b>Evidence over impressions.</b> Score what was said and done, not confidence.</li>
      <li><b>Depth over keywords.</b> Start from real work and follow it to data, code, tests and operations.</li>
      <li><b>Reasoning over first answers.</b> How someone revises under new facts matters more than being right first time.</li>
      <li><b>Same structure, same bar.</b> Questions may vary; stages, competencies and scale do not.</li>
      </ul>
      <ul className="clean">
      <li><b>Score alone, then discuss.</b> Feedback is submitted before anyone talks to the panel.</li>
      <li><b>Each stage resolves a doubt.</b> Add an assignment or POC only to answer a named question.</li>
      <li><b>Rigorous and respectful.</b> Probe hard, be candid about the job, and treat every candidate as a future colleague or customer.</li>
      <li><b>Fair by design.</b> Protected attributes are never asked about or considered.</li>
      </ul>
      </div>
      </section>
      
      <section className="block">
      <h2>Where to go next</h2>
      <div className="grid g3">
      <A className="card link" href="/process"><h4>The common process</h4><p className="small muted">The ten stages and how each role uses them.</p></A>
      <A className="card link" href="/roles"><h4>Role tracks</h4><p className="small muted">Intern to Architect: weights, panels, formats.</p></A>
      <A className="card link" href="/conduct"><h4>Conducting the interview</h4><p className="small muted">The 75-minute structure and the deep-dive ladder.</p></A>
      <A className="card link" href="/feedback"><h4>Feedback and decisions</h4><p className="small muted">The scale, the decision rule and the feedback builder.</p></A>
      <A className="card link" href="/templates"><h4>Templates</h4><p className="small muted">Twelve copy-ready documents.</p></A>
      <A className="card link" href="/rollout"><h4>Rollout</h4><p className="small muted">Set up in December, pilot from January.</p></A>
      </div>
      </section>
    </>
  );
}
