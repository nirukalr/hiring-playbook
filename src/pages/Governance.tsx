export default function Governance() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Keeping it current</div>
      <h1>A Hiring Excellence Group from our forums owns the system</h1>
      <p className="lead">A process with no owner drifts within a year. The CTO Office is responsible; a small group drawn from the Architects' Forum and the Tech Leads' Forum maintains it, with HR and TA as standing members.</p>
      </header>
      
      <section className="block">
      <div className="grid g2">
      <div className="card dark">
      <div className="eyebrow">Hiring Excellence Group (HEG)</div>
      <h3>Members and terms</h3>
      <ul className="clean small">
      <li><b>Chair:</b> appointed by the CTO Office</li>
      <li><b>2 architects</b> from the Architects' Forum</li>
      <li><b>2 to 3 tech leads</b> from the Tech Leads' Forum, across disciplines</li>
      <li><b>HR partner</b> and <b>TA lead</b> as standing members</li>
      <li>Engineering members rotate every 9 months, half at a time, so knowledge carries over</li>
      <li>About 2 hours a month each, recognised in performance goals</li>
      </ul>
      </div>
      <div className="card">
      <div className="eyebrow">What each forum owns</div>
      <h3>Clear content ownership</h3>
      <ul className="clean small">
      <li><b>Architects' Forum:</b> Architect track, system design and kata bank, POC guidance</li>
      <li><b>Tech Leads' Forum:</b> Intern, SE, SSE and TL tracks, coding, code review and leadership scenarios</li>
      <li><b>HR:</b> culture interview, candidate communication, fairness checks</li>
      <li><b>TA:</b> CV screening prompts, metrics, the hiring system</li>
      <li><b>HEG:</b> the playbook itself, the scorecard, interviewer certification, calibration</li>
      </ul>
      </div>
      </div>
      </section>
      
      <section className="block">
      <h2>Cadence</h2>
      <div className="tbl"><table>
      <thead><tr><th>When</th><th>What</th><th>Who</th></tr></thead>
      <tbody>
      <tr><td>Monthly, 60 min</td><td>Review change proposals, calibration samples (scores 2+ points apart), interviewer pool health</td><td>HEG</td></tr>
      <tr><td>Quarterly, 90 min</td><td>Metrics review with the CTO; two good hires and any that failed; update tracks, anchors and banks</td><td>HEG + CTO</td></tr>
      <tr><td>Every 6 months</td><td>Rotate scenarios, planted PRs and assignments; retire any that leaked</td><td>Owning forum</td></tr>
      <tr><td>Yearly</td><td>Full review of the playbook against company strategy and the technologies we sell</td><td>HEG + CTO</td></tr>
      <tr><td>Any time</td><td>Anyone may propose a change: what, why, evidence. Decided at the next monthly meeting; published with a version number and change log</td><td>Everyone</td></tr>
      </tbody></table></div>
      </section>
      
      <section className="block">
      <h2>What we measure</h2>
      <div className="tbl"><table>
      <thead><tr><th>Metric</th><th>Target</th></tr></thead>
      <tbody>
      <tr><td>Interview scores vs 90-day and 6-month performance</td><td>Baseline in 2 quarters, then improve</td></tr>
      <tr><td>Days from application to decision</td><td>Within the role track target</td></tr>
      <tr><td>Feedback forms submitted within 24 hours</td><td className="num">95%</td></tr>
      <tr><td>Offer acceptance rate</td><td className="num">Above 80%</td></tr>
      <tr><td>Assignment or case study completion rate</td><td className="num">Above 75%</td></tr>
      <tr><td>Candidate survey score</td><td className="num">4 out of 5</td></tr>
      <tr><td>Hiring Briefs rated "ready" by independent interviewers</td><td className="num">Above 90%</td></tr>
      <tr><td>Leavers or failed probations within 12 months</td><td>Every case reviewed</td></tr>
      </tbody></table></div>
      </section>
    </>
  );
}
