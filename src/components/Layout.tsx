import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { site } from "../content/site";
import { flatNav } from "../content/nav";
import { Sidebar } from "./Sidebar";
import { Pager } from "./Pager";

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // new page: close the mobile menu, scroll to top, set the tab title
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    const page = flatNav.find((n) => n.path === pathname);
    document.title = page && pathname !== "/" ? `${page.title} · ${site.org} ${site.name}` : `${site.name} · ${site.org}`;
  }, [pathname]);

  return (
    <div className={menuOpen ? "menu-open" : undefined}>
      <header className="topbar">
        <div className="topbar-in">
          <Link className="brand" to="/"><small>{site.org} · Engineering</small><b>{site.name}</b></Link>
          <button className="menu-btn" type="button" aria-expanded={menuOpen} aria-controls="rail"
            onClick={() => setMenuOpen((o) => !o)}>Menu</button>
        </div>
      </header>
      <div className="shell">
        <Sidebar />
        <main id="content">
          <Outlet />
          <Pager />
        </main>
      </div>
      <footer className="footer">
        <div>{site.org} · {site.name} · Version {site.version} · Proposals for change go to the Hiring Excellence Group.</div>
      </footer>
    </div>
  );
}
