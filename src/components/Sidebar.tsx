import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav, type NavItem } from "../content/nav";

const isIn = (item: NavItem, pathname: string) =>
  item.path === pathname || (item.children ?? []).some((c) => c.path === pathname);

export function Sidebar() {
  const { pathname } = useLocation();
  const link = (n: NavItem) => <NavLink key={n.path} to={n.path} end>{n.title}</NavLink>;
  return (
    <aside className="rail" id="rail" aria-label="Sections">
      <p className="rail-h">Playbook</p>
      <nav>
        {/* children show only for the section you are in */}
        {nav.map((n) => (
          <Fragment key={n.path}>
            {link(n)}
            {n.children && isIn(n, pathname) && <div className="sub">{n.children.map(link)}</div>}
          </Fragment>
        ))}
      </nav>
    </aside>
  );
}
