# Feedback builder

Fill this in after an interview to produce a consistent feedback record, then copy it into the candidate's record in the hiring system. Nothing is saved on this page.

<div class="fb" id="fb" markdown="0">
  <div class="fb-grid">
    <label for="fb-cand">Candidate<input type="text" id="fb-cand" placeholder="Name or ID"></label>
    <label for="fb-role">Role track
      <select id="fb-role"><option value="intern">Intern</option><option value="se">Software Engineer</option><option value="sse" selected>Senior SE</option><option value="tl">Tech Lead</option><option value="arch">Architect</option></select></label>
    <label for="fb-stage">Stage
      <select id="fb-stage"><option>Technical interview</option><option>Evaluation exercise</option><option>System design</option><option>Team interview</option><option>HR culture interview</option><option>Leadership scenario</option><option>Architecture presentation</option><option>Case study / POC walkthrough</option></select></label>
    <label for="fb-int">Interviewer<input type="text" id="fb-int" placeholder="Your name"></label>
  </div>
  <div id="fb-comps"></div>
  <div class="fb-grid">
    <label for="fb-rec">Recommendation<select id="fb-rec"><option>Strong hire</option><option selected>Hire</option><option>No hire</option><option>Strong no hire</option></select></label>
    <label for="fb-culture">Culture signals<select id="fb-culture"><option>Positive</option><option selected>No concerns</option><option>Concern (explain in evidence)</option></select></label>
    <label for="fb-open">Needs validation<input type="text" id="fb-open" placeholder="What the next stage should check"></label>
  </div>
  <div class="fb-stats">
    <div>Weighted average<b id="o-avg">–</b></div>
    <div>Must-haves at 3+<b id="o-must">–</b></div>
    <div>Decision rule<b id="o-rule">–</b></div>
  </div>
  <div class="fb-out" id="fb-text"></div>
  <button type="button" id="fb-copy">Copy feedback</button> <span id="fb-status"></span>
</div>
