(function () {
  function init() {
    var box = document.getElementById("fb-comps");
    if (!box || box.dataset.ready) return;
    box.dataset.ready = "1";
    var COMPS = ["Technical depth", "Problem solving and reasoning", "System design and architecture", "Code quality and testing", "Ownership and delivery", "Communication and collaboration", "Learning and curiosity", "Leadership and influence"];
    var ROLES = {
      intern: { name: "Intern", w: [10, 25, 0, 15, 10, 15, 25, 0], must: [1, 6] },
      se: { name: "Software Engineer", w: [20, 20, 10, 20, 15, 10, 5, 0], must: [0, 3, 4] },
      sse: { name: "Senior SE", w: [20, 15, 15, 15, 15, 10, 5, 5], must: [0, 2, 4] },
      tl: { name: "Tech Lead", w: [15, 10, 15, 5, 20, 10, 5, 20], must: [2, 4, 7] },
      arch: { name: "Architect", w: [15, 10, 30, 5, 10, 10, 5, 15], must: [0, 2, 7] }
    };
    var $ = function (id) { return document.getElementById(id); };
    COMPS.forEach(function (c, i) {
      var d = document.createElement("div");
      d.className = "fb-comp"; d.dataset.i = i;
      d.innerHTML = '<label for="fb-s' + i + '">' + c + '<small class="wt"></small></label>' +
        '<select id="fb-s' + i + '"><option value="">N/A</option><option>1</option><option>2</option><option>3</option><option>4</option></select>' +
        '<textarea id="fb-e' + i + '" rows="1" placeholder="Evidence: what they said or did" aria-label="Evidence for ' + c + '"></textarea>';
      box.appendChild(d);
    });
    function render() {
      var r = ROLES[$("fb-role").value], sum = 0, wsum = 0, ok = 0, seen = 0, one = false, lines = [];
      Array.prototype.forEach.call(box.children, function (d) {
        var i = +d.dataset.i, w = r.w[i], must = r.must.indexOf(i) > -1;
        d.classList.toggle("hide", !w);
        d.querySelector(".wt").textContent = w ? "Weight " + w + (must ? " · must-have" : "") : "";
        if (!w) return;
        var s = $("fb-s" + i).value, ev = $("fb-e" + i).value.trim();
        if (s) { s = +s; sum += s * w; wsum += w; if (s === 1) one = true; if (must) { seen++; if (s >= 3) ok++; } }
        lines.push("  " + COMPS[i] + (must ? " (must)" : "") + ": " + (s || "N/A") + (ev ? "  — " + ev : ""));
      });
      var avg = wsum ? sum / wsum : null, v = "Add scores";
      if (wsum) {
        if (one) v = "No hire: a score of 1";
        else if (seen < r.must.length) v = "Must-haves not all assessed";
        else if (ok < r.must.length) v = "Must-have below 3";
        else if (avg < 3) v = "Average below 3";
        else v = "Meets the hire bar";
      }
      $("o-avg").textContent = avg ? avg.toFixed(2) : "–";
      $("o-must").textContent = ok + " of " + r.must.length;
      $("o-rule").textContent = v;
      $("fb-text").textContent = ["INTERVIEW FEEDBACK",
        "Candidate: " + ($("fb-cand").value || "—") + " | Role: " + r.name + " | Stage: " + $("fb-stage").value,
        "Interviewer: " + ($("fb-int").value || "—") + " | Submitted before discussing: yes", "",
        "Scores (1–4, weighted for " + r.name + "):"].concat(lines).concat(["",
        "Weighted average: " + (avg ? avg.toFixed(2) : "—") + " | Must-haves at 3+: " + ok + " of " + r.must.length,
        "Culture signals: " + $("fb-culture").value,
        "Needs validation: " + ($("fb-open").value || "—"),
        "Recommendation: " + $("fb-rec").value]).join("\n");
    }
    $("fb").addEventListener("input", render);
    $("fb").addEventListener("change", render);
    $("fb-copy").addEventListener("click", function () {
      var t = $("fb-text").textContent;
      try { navigator.clipboard.writeText(t).then(function () { $("fb-status").textContent = "Copied. Paste it into the hiring system."; }); }
      catch (e) { $("fb-status").textContent = "Select the text above and copy it."; }
    });
    render();
  }
  if (window.document$ && window.document$.subscribe) { window.document$.subscribe(init); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
