import type { ReactElement } from "react";
import { roles } from "./content/roles";
import { templates } from "./content/templates";
import Home from "./pages/Home";
import Process from "./pages/Process";
import People from "./pages/People";
import Prepare from "./pages/Prepare";
import Conduct from "./pages/Conduct";
import Methods from "./pages/Methods";
import Culture from "./pages/Culture";
import Feedback from "./pages/Feedback";
import Governance from "./pages/Governance";
import Rollout from "./pages/Rollout";
import RolesIndex from "./pages/RolesIndex";
import RolePage from "./pages/RolePage";
import TemplatesIndex from "./pages/TemplatesIndex";
import TemplatePage from "./pages/TemplatePage";

export interface AppRoute { path: string; element: ReactElement }

/** Every page on the site. Role and template pages are generated from their data files. */
export const routes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/process", element: <Process /> },
  { path: "/roles", element: <RolesIndex /> },
  ...roles.map((r) => ({ path: `/roles/${r.slug}`, element: <RolePage role={r} /> })),
  { path: "/people", element: <People /> },
  { path: "/prepare", element: <Prepare /> },
  { path: "/conduct", element: <Conduct /> },
  { path: "/methods", element: <Methods /> },
  { path: "/culture", element: <Culture /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/templates", element: <TemplatesIndex /> },
  ...templates.map((t) => ({ path: `/templates/${t.slug}`, element: <TemplatePage template={t} /> })),
  { path: "/governance", element: <Governance /> },
  { path: "/rollout", element: <Rollout /> },
];
