import { A } from "../components/A";

export default function Process() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">The common process</div>
      <h1>Ten stages, the same backbone for every role</h1>
      <p className="lead">Each role uses the same stages in the same order. What changes by level is the format and length of the technical stages, the evaluation method and who sits on the panel. Those details are in the <A href="/roles">role tracks</A>.</p>
      </header>
      
      <section className="block">
      <div className="legend"><span><i className="dot hot"></i>New for most teams</span><span><i className="dot accent"></i>Existing, now standardised</span></div>
      <div className="flow">
      <div className="stage new"><span className="n">1</span><h4>Role kickoff</h4><p>Project writes the Hiring Brief, sets must-haves and picks the role track.</p><span className="who">Project hiring lead · TA</span></div>
      <div className="stage new"><span className="n">2</span><h4>Panel and briefing</h4><p>Panel named; 30-min context briefing for interviewers from outside the project.</p><span className="who">Hiring lead</span></div>
      <div className="stage"><span className="n">3</span><h4>CV screen</h4><p>AI rubric plus human review; needs-validation items attached.</p><span className="who">TA · hiring lead</span></div>
      <div className="stage"><span className="n">4</span><h4>HR screen</h4><p>Motivation, logistics, salary range, communication; explain the process.</p><span className="who">TA / HR, 30 min</span></div>
      <div className="stage"><span className="n">5</span><h4>Technical interview</h4><p>Deep-dive on real work, what-if challenge, role scenario, coding.</p><span className="who">Hiring lead · independent</span></div>
      <div className="stage"><span className="n">6</span><h4>Evaluation exercise</h4><p>Role-specific: coding test, pairing, design, assignment, POC or presentation.</p><span className="who">Project engineers review</span></div>
      <div className="stage new"><span className="n">7</span><h4>Team interview</h4><p>The people who will work with the hire meet them on a realistic problem.</p><span className="who">Project team</span></div>
      <div className="stage new"><span className="n">8</span><h4>HR culture interview</h4><p>Structured values interview with a scored form.</p><span className="who">HR partner</span></div>
      <div className="stage"><span className="n">9</span><h4>Debrief and decision</h4><p>Scores read first, three lenses checked, decision note signed.</p><span className="who">Hiring lead chairs</span></div>
      <div className="stage"><span className="n">10</span><h4>Offer and 90 days</h4><p>Offer, handover of risks to the mentor, 90-day review on the same scorecard.</p><span className="who">TA · hiring lead</span></div>
      </div>
      </section>
      
      <section className="block">
      <h2>How each role uses the stages</h2>
      <div className="tbl">
      <table>
      <thead><tr><th>Stage</th><th>Intern</th><th>SE</th><th>SSE</th><th>Tech Lead</th><th>Architect</th></tr></thead>
      <tbody>
      <tr><td>5 · Technical interview</td><td>45 min, fundamentals + project walk-through</td><td>75 min standard</td><td>75 min standard</td><td>75 min standard</td><td>60 min architecture portfolio presentation</td></tr>
      <tr><td>6 · Evaluation exercise</td><td>Online coding test, 60 min</td><td>Pair programming 60 min, or take-home of 4 h or less</td><td>System design 60 min; case study or POC only for a named doubt</td><td>System design and code review 75 min; leadership scenario 60 min</td><td>Architecture kata 90 min; optional POC or design review</td></tr>
      <tr><td>7 · Team interview</td><td>Team meet, 30 min</td><td>45 min with project engineers</td><td>60 min code review session with the team</td><td>60 min with future reports and delivery manager</td><td>60 min with tech leads and delivery head</td></tr>
      <tr><td>8 · HR culture interview</td><td>30 min</td><td>45 min</td><td>45 min</td><td>45 min</td><td>45 min</td></tr>
      <tr><td>Senior conversation</td><td className="c">–</td><td className="c">–</td><td className="c">–</td><td>Head of engineering, 30 min (optional)</td><td>CTO, 45 min</td></tr>
      <tr><td>Candidate time, excluding take-homes</td><td className="num">≈ 3 h</td><td className="num">≈ 4 h</td><td className="num">≈ 5 h</td><td className="num">≈ 6 h</td><td className="num">≈ 6 h</td></tr>
      <tr><td>Target days to decision</td><td className="num">14</td><td className="num">21</td><td className="num">21 (28 with case study)</td><td className="num">28</td><td className="num">35</td></tr>
      </tbody>
      </table>
      </div>
      </section>
    </>
  );
}
