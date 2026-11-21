import { A } from "../components/A";

export default function Culture() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">HR culture interview</div>
      <h1>Culture is assessed on behaviour, with the same rigour as code</h1>
      <p className="lead">HR runs a structured interview for every role, using the same questions and a scored form. We look for people who add to our culture, not people who resemble the panel. Use the <A href="/templates/culture-interview-form">culture interview form</A>.</p>
      </header>
      
      <section className="block">
      <div className="tbl"><table>
      <thead><tr><th>Behaviour</th><th>Core question</th><th>Strong evidence</th><th>Concern</th></tr></thead>
      <tbody>
      <tr><td><b>Ownership</b></td><td>"Tell me about a commitment you missed. When did you realise, who did you tell, what happened next?"</td><td>Saw it early, told people, proposed recovery</td><td>Blames others; claims it never happens</td></tr>
      <tr><td><b>Candour</b></td><td>"Tell me about a time you disagreed with a manager or client."</td><td>Disagreed with evidence, kept the relationship</td><td>Stayed silent, or fought to win</td></tr>
      <tr><td><b>Rigour</b></td><td>"What standard do you hold yourself to that others sometimes don't?"</td><td>Concrete practice tied to real consequences</td><td>Slogans without examples</td></tr>
      <tr><td><b>Respect</b></td><td>"Describe working with someone very different from you."</td><td>Adapted, learned, credits others</td><td>Dismissive language about colleagues</td></tr>
      <tr><td><b>Learning</b></td><td>"What have you learned recently on your own, and where did you use it?"</td><td>Specific, recent, applied</td><td>Learns only when required</td></tr>
      </tbody></table></div>
      </section>
      
      <section className="block">
      <div className="grid g2">
      <div className="card"><h4>HR also checks</h4><ul className="clean small">
      <li>Motivation: why us, why now, what they want in 2 years</li>
      <li>Expectations of their lead and team, matched against the brief</li>
      <li>Fit with real working conditions: time zones, client exposure, intense periods</li>
      <li>Career moves, discussed as context and learning, never as a judgement</li>
      <li>For TL and Architect: how they give hard feedback and develop people</li>
      </ul></div>
      <div className="card"><h4>Guard rails</h4><ul className="clean small">
      <li>Every culture concern cites a specific behaviour, just like a technical concern</li>
      <li>"Not a culture fit" alone is never a reason</li>
      <li>No questions on age, family plans, religion, ethnicity, health or politics</li>
      <li>Map these five behaviours to the company's published values once confirmed</li>
      </ul></div>
      </div>
      </section>
    </>
  );
}
