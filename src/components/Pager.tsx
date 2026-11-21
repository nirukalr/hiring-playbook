import { useLocation } from "react-router-dom";
import { flatNav } from "../content/nav";
import { A } from "./A";

export function Pager() {
  const { pathname } = useLocation();
  const i = flatNav.findIndex((n) => n.path === pathname);
  if (i < 0) return null;
  const prev = flatNav[i - 1], next = flatNav[i + 1];
  return (
    <nav className="pager" aria-label="Previous and next page">
      {prev && <A href={prev.path}><small>Previous</small><span>{prev.title}</span></A>}
      {next && <A href={next.path}><small>Next</small><span>{next.title}</span></A>}
    </nav>
  );
}
