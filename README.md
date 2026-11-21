# Mitra Engineering Hiring Playbook

A small React site (Vite + TypeScript). Content lives in plain files; the layout, menu, role pages and template pages are generated from them.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173, live reload
npm run check      # type-check + tests (broken links, menu, decision rule). CI runs this too
npm run build      # production build into dist/
```
Pages use hash URLs (`/#/process`), so it hosts anywhere, including GitHub Pages, with no server rules.

## Where things are
| Path | What |
| --- | --- |
| `src/content/roles/*.ts` | **One file per role track**: weights, must-haves, panel, stages, questions, red flags. Role page, roles index, menu and feedback builder all update. |
| `src/content/templates/*.txt` | **One text file per template.** Edit the text; no code. Titles and owners are listed in `src/content/templates.ts`. |
| `src/content/site.ts` | Site name, version, the eight competencies. |
| `src/content/nav.ts` | The side menu and previous/next order (roles and templates are added automatically). |
| `src/pages/*.tsx` | The prose pages (Home, Process, People, ...). Plain JSX, the same markup as before. |
| `src/components/` | Layout, sidebar, pager, weight bars, copy button, feedback builder. |
| `src/lib/feedback.ts` | The decision-rule logic behind the feedback builder. |
| `src/styles/` | CSS. Colours and fonts are variables at the top of `base.css`. |
| `tests/` | Fails the build on a broken internal link, a page missing from the menu, bad weights. |

## Common edits
- **Change wording on a page:** edit its file in `src/pages/`. Use `<A href="/process">` for internal links.
- **Change a role's weights or must-haves:** edit `weights` in `src/content/roles/<role>.ts`.
- **Edit a template:** edit `src/content/templates/<name>.txt`. Set `editUrl` on its line in `templates.ts` to show an "editable copy" link.
- **Add a template:** add `<slug>.txt`, add one line to `templates.ts`. Menu and index update themselves.
- **Add a role:** copy a file in `src/content/roles/`, edit it, add it to `src/content/roles/index.ts`.
- **Add a prose page:** create `src/pages/X.tsx`, add a route in `src/routes.tsx` and a line in `src/content/nav.ts`. `npm run check` fails if you forget either.

## Review and publishing
Each pull request is routed to the content owner through `.github/CODEOWNERS`. Merging to `main` runs the checks, builds, and publishes with GitHub Pages (Settings > Pages > Source: GitHub Actions). Anyone can also suggest a change with a *Change proposal* issue.

## First-time setup
1. Create the **private** repository `nirukalr/hiring-playbook` and push this folder.
2. Create the teams named in `CODEOWNERS`: `hiring-excellence-group`, `architects-forum`, `tech-leads-forum`, `hr`, `talent-acquisition`.
3. In **Settings → Branches**, protect `main`: require a pull request and review from code owners.
4. In **Settings → Pages**, set the source to **GitHub Actions**. With GitHub Enterprise Cloud, set visibility to **Private** so only signed-in members can read it.
5. Without GitHub Enterprise, copy the same files (the contents of `dist/` after `npm run build`) to an internal web server or storage bucket behind company sign-in.

## Never put in this repository
Candidate names, CVs, interview feedback, or confidential client information. Those belong in the hiring system or the project's own space.
