export default function People() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Who does what</div>
      <h1>The project that needs the person owns the hire</h1>
      <p className="lead">The project lives with the result, so the project carries the main responsibility. Independent interviewers protect the company bar, HR protects culture and fairness, and the Hiring Excellence Group keeps the system honest.</p>
      </header>
      
      <section className="block">
      <div className="grid g2">
      <div className="card dark">
      <div className="eyebrow">The project team</div>
      <h3>Owns project fit and the decision</h3>
      <ul className="clean small">
      <li><b>Hiring lead</b> (tech lead or delivery lead): writes the Hiring Brief, runs the briefing, chairs the debrief, signs the decision note.</li>
      <li><b>Project engineers</b> (1 or 2): build the realistic scenario and exercise, run the team interview, review assignments.</li>
      <li><b>Delivery manager</b> (TL and Architect roles): joins the stakeholder interview.</li>
      <li><b>Onboarding buddy</b>: receives the risk areas and runs the first 90 days.</li>
      <li><b>Accountable for</b> 90-day success of the hire and time to fill.</li>
      </ul>
      </div>
      <div className="card">
      <div className="eyebrow teal">HR</div>
      <h3>Owns culture, fairness and experience</h3>
      <ul className="clean small">
      <li>Runs the structured culture interview for every role.</li>
      <li>Checks motivation, expectations, stability in context, and references.</li>
      <li>Checks fairness: same structure, no protected attributes, reasons recorded.</li>
      <li>Owns candidate communication standards and the offer.</li>
      <li>Can block a hire on a culture concern backed by evidence; resolved at the debrief.</li>
      </ul>
      </div>
      <div className="card">
      <div className="eyebrow">Independent interviewer</div>
      <h3>Holds the company bar</h3>
      <ul className="clean small">
      <li>Comes from the certified pool, outside the project.</li>
      <li>Matched on discipline, at or above the role's level.</li>
      <li>Prepares from the Hiring Brief and the briefing.</li>
      <li>Leads the what-if challenge; scores engineering-bar competencies first.</li>
      <li>Their concerns must be answered in writing in the decision note.</li>
      </ul>
      </div>
      <div className="card">
      <div className="eyebrow hot">Talent acquisition</div>
      <h3>Runs the logistics</h3>
      <ul className="clean small">
      <li>Sourcing, AI CV screening, scheduling and candidate packs.</li>
      <li>Chases feedback until every form is in within 24 hours.</li>
      <li>Keeps candidates informed within 2 working days at every stage.</li>
      <li>Reports the hiring metrics to the Hiring Excellence Group monthly.</li>
      </ul>
      </div>
      </div>
      </section>
      
      <section className="block">
      <h2>Responsibility matrix</h2>
      <p className="small muted">R = does the work · A = accountable · C = consulted · I = informed</p>
      <div className="tbl"><table>
      <thead><tr><th>Activity</th><th className="c">Hiring lead</th><th className="c">Project engineers</th><th className="c">Independent</th><th className="c">HR</th><th className="c">TA</th><th className="c">HEG</th></tr></thead>
      <tbody>
      <tr><td>Hiring Brief and must-haves</td><td className="c">A, R</td><td className="c">C</td><td className="c">C</td><td className="c">C</td><td className="c">C</td><td className="c">–</td></tr>
      <tr><td>Interviewer briefing</td><td className="c">A, R</td><td className="c">C</td><td className="c">R</td><td className="c">I</td><td className="c">R</td><td className="c">–</td></tr>
      <tr><td>CV screen</td><td className="c">A</td><td className="c">–</td><td className="c">–</td><td className="c">C</td><td className="c">R</td><td className="c">–</td></tr>
      <tr><td>Technical interview</td><td className="c">A, R</td><td className="c">–</td><td className="c">R</td><td className="c">–</td><td className="c">I</td><td className="c">–</td></tr>
      <tr><td>Evaluation exercise and team interview</td><td className="c">A</td><td className="c">R</td><td className="c">C</td><td className="c">–</td><td className="c">I</td><td className="c">–</td></tr>
      <tr><td>Culture interview</td><td className="c">I</td><td className="c">–</td><td className="c">–</td><td className="c">A, R</td><td className="c">I</td><td className="c">–</td></tr>
      <tr><td>Debrief and decision</td><td className="c">A, R</td><td className="c">R</td><td className="c">R</td><td className="c">R</td><td className="c">I</td><td className="c">I</td></tr>
      <tr><td>Offer and references</td><td className="c">C</td><td className="c">–</td><td className="c">–</td><td className="c">A, R</td><td className="c">R</td><td className="c">–</td></tr>
      <tr><td>90-day review</td><td className="c">A, R</td><td className="c">C</td><td className="c">I</td><td className="c">C</td><td className="c">I</td><td className="c">I</td></tr>
      <tr><td>Playbook, question banks, training</td><td className="c">C</td><td className="c">C</td><td className="c">C</td><td className="c">C</td><td className="c">C</td><td className="c">A, R</td></tr>
      </tbody></table></div>
      </section>
    </>
  );
}
