import { useRef, useState } from "react";
import { roles } from "../content/roles";
import { competencies } from "../content/site";
import { cultureSignals, exampleForm, recommendations, stages, summarize, type FeedbackForm } from "../lib/feedback";
import { useCopy } from "./useCopy";

/** Turns scores into a consistent feedback record. Nothing is saved; the user copies the output. */
export function FeedbackBuilder() {
  const [form, setForm] = useState<FeedbackForm>(exampleForm);
  const [status, setStatus] = useState("");
  const pre = useRef<HTMLPreElement>(null);

  const role = roles.find((r) => r.id === form.roleId) ?? roles[0];
  const out = summarize(form, role);
  const { copy, label } = useCopy(() => out.text, () => pre.current);

  const set = <K extends keyof FeedbackForm>(k: K, v: FeedbackForm[K]) => setForm((f) => ({ ...f, [k]: v }));
  const setAt = (k: "scores" | "evidence", i: number, v: string) =>
    setForm((f) => ({ ...f, [k]: f[k].map((x, j) => (j === i ? v : x)) }));

  const reset = () => {
    const blank = exampleForm();
    setForm({
      ...blank, candidate: "", scores: blank.scores.map(() => ""), evidence: blank.evidence.map(() => ""),
    });
    setStatus("");
  };

  return (
    <form className="fb" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <div className="fb-row">
        <label className="f">Candidate
          <input type="text" placeholder="Name or ID" value={form.candidate} onChange={(e) => set("candidate", e.target.value)} />
        </label>
        <label className="f">Role track
          <select value={form.roleId} onChange={(e) => set("roleId", e.target.value)}>
            {roles.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </label>
        <label className="f">Stage
          <select value={form.stage} onChange={(e) => set("stage", e.target.value)}>
            {stages.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="f">Interviewer
          <input type="text" placeholder="Your name" value={form.interviewer} onChange={(e) => set("interviewer", e.target.value)} />
        </label>
      </div>

      <div>
        {competencies.map((name, i) => {
          const w = role.weights.w[i];
          if (!w) return null;
          const isMust = role.weights.must.includes(i);
          return (
            <div className="fb-comp" key={name}>
              <span className="nm">{name}<small className="wt">Weight {w}{isMust ? " · must-have" : ""}</small></span>
              <select aria-label={`Score for ${name}`} value={form.scores[i]} onChange={(e) => setAt("scores", i, e.target.value)}>
                <option value="">N/A</option><option>1</option><option>2</option><option>3</option><option>4</option>
              </select>
              <textarea rows={1} placeholder="Evidence: what they said or did" aria-label={`Evidence for ${name}`}
                value={form.evidence[i]} onChange={(e) => setAt("evidence", i, e.target.value)} />
            </div>
          );
        })}
      </div>

      <div className="fb-row">
        <label className="f">Recommendation
          <select value={form.recommendation} onChange={(e) => set("recommendation", e.target.value)}>
            {recommendations.map((r) => <option key={r}>{r}</option>)}
          </select>
        </label>
        <label className="f">Culture signals
          <select value={form.culture} onChange={(e) => set("culture", e.target.value)}>
            {cultureSignals.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="f span2">Needs validation / open doubts
          <input type="text" placeholder="What the next stage or references should check" value={form.openDoubts}
            onChange={(e) => set("openDoubts", e.target.value)} />
        </label>
      </div>

      <div className="fb-out">
        <div className="stat"><span className="small muted">Weighted average</span><span className="big">{out.average ? out.average.toFixed(2) : "–"}</span></div>
        <div className={"stat" + (out.mustWarn ? " warn" : "")}>
          <span className="small muted">Must-haves at 3 or more</span>
          <span className="big">{role.weights.must.length ? `${out.mustMet} of ${role.weights.must.length}` : "–"}</span>
        </div>
        <div className={"stat" + (out.verdictTone === "none" ? "" : " " + out.verdictTone)}>
          <span className="small muted">Against the decision rule</span><span className="big sm">{out.verdict}</span>
        </div>
      </div>

      <pre ref={pre} aria-live="polite">{out.text}</pre>

      <div className="fb-actions">
        <button type="button" className="btn primary" onClick={() => { copy(); setStatus("Paste it into the candidate's record in the hiring system."); }}>
          {label ?? "Copy feedback"}
        </button>
        <button type="button" className="btn" onClick={reset}>Clear</button>
        <span className="status">{status}</span>
      </div>
    </form>
  );
}
