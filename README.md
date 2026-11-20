# Mitra Engineering Hiring Playbook

The source for the hiring playbook website. Pages are Markdown files in `docs/`; MkDocs Material turns them into the site.

## Read it
Open the published site: **add the URL here once hosting is set up**.

## Edit it
- **Small change:** open the page on the site, click the edit (pencil) icon, make the change in GitHub's editor and open a pull request.
- **Suggestion without editing:** open a *Change proposal* issue.
- **Larger change:** clone the repo, edit files in `docs/`, preview locally, open a pull request.

Each pull request is routed to the page owner through `.github/CODEOWNERS`. Merging to `main` publishes the site automatically.

## Preview locally
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve        # open http://127.0.0.1:8000
```

## Structure
| Path | What |
| --- | --- |
| `mkdocs.yml` | Site settings and the navigation menu. Add new pages here. |
| `docs/` | All pages. Templates are in `docs/kit/`. |
| `docs/assets/` | Brand styles and the feedback builder script. |
| `.github/workflows/publish.yml` | Builds the site on every pull request and publishes it from `main`. |
| `.github/CODEOWNERS` | Who must approve changes to which pages. |

## First-time setup
1. Create a **private** repository named `hiring-playbook` in your GitHub organisation and push this folder.
2. Replace `YOUR-ORG` in `mkdocs.yml` and `.github/CODEOWNERS` with your organisation, and create the teams named in `CODEOWNERS`.
3. In **Settings → Branches**, protect `main`: require a pull request and review from code owners.
4. In **Settings → Pages**, set the source to **GitHub Actions**. With GitHub Enterprise Cloud, set visibility to **Private** so only signed-in members of your organisation can read it.
5. Without GitHub Enterprise, publish the built `site/` folder to an internal server or cloud storage behind company single sign-on instead (change the deploy job in the workflow).

## Never put in this repository
Candidate names, CVs, interview feedback, or confidential client information. Those belong in the hiring system or the project's own space.
