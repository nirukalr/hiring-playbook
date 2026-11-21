export default function Conduct() {
  return (
    <>
      <header className="page-head">
      <div className="eyebrow">Conducting the interview</div>
      <h1>Let them teach you, then drill down</h1>
      <p className="lead">The structure is fixed so every candidate gets the same chance. The questions follow the candidate's own work, so rehearsed answers run out quickly and real depth shows.</p>
      </header>
      
      <section className="block">
      <h2>The standard 75-minute technical interview</h2>
      <div className="tbl"><table>
      <thead><tr><th>Minutes</th><th>Block</th><th>Lead</th><th>Purpose</th></tr></thead>
      <tbody>
      <tr><td className="num">0–5</td><td>Open</td><td>Hiring lead</td><td>Introductions, format, "we will probe in depth; 'I don't know' is fine"</td></tr>
      <tr><td className="num">5–30</td><td>Deep-dive on real work</td><td>Hiring lead</td><td>Depth, ownership, communication</td></tr>
      <tr><td className="num">30–45</td><td>What-if challenge</td><td>Independent</td><td>Reasoning, failure handling, judgement</td></tr>
      <tr><td className="num">45–60</td><td>Role scenario</td><td>Either</td><td>The same project-shaped problem for every candidate</td></tr>
      <tr><td className="num">60–70</td><td>Coding check</td><td>Either</td><td>Clarify, implement and test a simple requirement</td></tr>
      <tr><td className="num">70–75</td><td>Their questions</td><td>Hiring lead</td><td>Curiosity; sell the role</td></tr>
      </tbody></table></div>
      <div className="grid g2">
      <div className="card">
      <h4>The deep-dive ladder</h4>
      <ol className="steps small">
      <li><b>Problem:</b> what was hard, and for whom?</li>
      <li><b>Ownership:</b> what did you own, and what did others own?</li>
      <li><b>Mechanics:</b> how does it work? Where is it stored? What happens next?</li>
      <li><b>Quality:</b> how did you test and monitor it?</li>
      <li><b>Outcome:</b> what changed, and what would you redo?</li>
      </ol>
      </div>
      <div className="card">
      <h4>What-if prompts</h4>
      <ul className="clean small">
      <li>"What if this message arrives twice?"</li>
      <li>"What if that dependency is down for an hour?"</li>
      <li>"What if traffic grows ten times?"</li>
      <li>"What if the rule changes after go-live?"</li>
      <li>"Which option would you choose, and what would change your mind?"</li>
      </ul>
      </div>
      </div>
      <div className="grid g2">
      <div className="card">
      <h4>Opening script</h4>
      <p className="small">"Thanks for joining. I'm [name], [role] on [project]; [co-interviewer] is from another team and brings an independent view. We'll spend most of the time on something you've built, then change a few constraints, then a short problem and a small coding task. We'll ask follow-up questions to understand your thinking; saying 'I don't know' is fine. You'll have time for your questions at the end."</p>
      </div>
      <div className="card">
      <h4>Behavioural questions (STAR)</h4>
      <p className="small">Ask for one real situation, then probe for the Situation, the Task, the candidate's own Actions and the Result. Follow up with "what did <i>you</i> do?" and "what would you do differently?" Hypothetical answers ("I would...") are weaker evidence than what they did.</p>
      </div>
      </div>
      </section>
      
      <section className="block">
      <h2>Do and don't</h2>
      <div className="grid g2">
      <div className="card">
      <h4>Do</h4>
      <ul className="clean small">
      <li>Allow silence and thinking time</li>
      <li>Give one hint, and note that you did</li>
      <li>Take notes close to word for word</li>
      <li>Keep to time; move on politely</li>
      <li>Be candid about deadlines, pace and client exposure</li>
      </ul>
      </div>
      <div className="card">
      <h4>Don't</h4>
      <ul className="clean small">
      <li>Make one obscure framework detail the deciding question</li>
      <li>Show your verdict during the interview</li>
      <li>Discuss the candidate before submitting your form</li>
      <li>Ask about age, family, religion, health or other personal life</li>
      <li>Interview on a project you have not been briefed on</li>
      </ul>
      </div>
      </div>
      </section>
      
      <section className="block">
      <h2>Difficult moments</h2>
      <div className="tbl"><table>
      <thead><tr><th>Situation</th><th>What to do</th></tr></thead>
      <tbody>
      <tr><td>The candidate is stuck</td><td>Narrow the question, give one hint, then move on. Score what they did with the hint.</td></tr>
      <tr><td>The candidate is very nervous</td><td>Start with their own project, slow down, and return to a missed point later.</td></tr>
      <tr><td>Answers sound rehearsed</td><td>Change one constraint on their own example and ask them to adapt it.</td></tr>
      <tr><td>Suspected hidden AI or outside help in a live session</td><td>Ask them to explain the last line of reasoning in their own words, then extend it. Record what you observed; do not accuse.</td></tr>
      <tr><td>Remote connection problems</td><td>Reschedule rather than score a broken session. Ask for camera on and use a shared editor for coding.</td></tr>
      </tbody></table></div>
      </section>
    </>
  );
}
