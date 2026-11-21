import { competencies } from "../content/site";
import type { Weights as W } from "../content/types";

/** Horizontal bars for a role's competency weights; must-haves are orange. */
export function Weights({ weights }: { weights: W }) {
  return (
    <div className="weights">
      {weights.w.map((v, i) => {
        if (!v) return null;
        const must = weights.must.includes(i);
        return (
          <div key={i} className={"w" + (must ? " must" : "")}>
            <span className="lab">{competencies[i]}{must && <b>must</b>}</span>
            <span className="bar"><i style={{ width: `${(v / 30) * 100}%` }} /></span>
            <span className="v">{v}</span>
          </div>
        );
      })}
    </div>
  );
}
