import { roles } from "./roles";
import { templates } from "./templates";

export interface NavItem { title: string; path: string; children?: NavItem[] }

/**
 * The side menu, and the order of the previous/next links.
 * Role and template entries are generated from their data files.
 * To add a plain page: create it in src/pages, add a route in src/routes.tsx, then add a line here.
 */
export const nav: NavItem[] = [
  { title: "Overview", path: "/" },
  { title: "The common process", path: "/process" },
  {
    title: "Role tracks",
    path: "/roles",
    children: roles.map((r) => ({ title: r.navTitle, path: `/roles/${r.slug}` })),
  },
  { title: "Who does what", path: "/people" },
  { title: "Interviewer preparation", path: "/prepare" },
  { title: "Conducting the interview", path: "/conduct" },
  { title: "Evaluation methods", path: "/methods" },
  { title: "HR culture interview", path: "/culture" },
  { title: "Feedback and decisions", path: "/feedback" },
  {
    title: "Templates",
    path: "/templates",
    children: templates.map((t) => ({ title: t.navTitle, path: `/templates/${t.slug}` })),
  },
  { title: "Keeping it current", path: "/governance" },
  { title: "Rollout", path: "/rollout" },
];

export const flatNav: NavItem[] = nav.flatMap((n) => [n, ...(n.children ?? [])]);
