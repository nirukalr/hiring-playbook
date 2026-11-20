# Governance: keeping it current

A process with no owner drifts within a year. The **CTO Office is responsible**; a small Hiring Excellence Group (HEG) drawn from the Architects' Forum and the Tech Leads' Forum maintains it, with HR and TA as standing members.

## Hiring Excellence Group
- **Chair:** appointed by the CTO Office
- **2 architects** from the Architects' Forum
- **2 to 3 tech leads** from the Tech Leads' Forum, across disciplines
- **HR partner** and **TA lead** as standing members
- Engineering members rotate every 9 months, half at a time, so knowledge carries over
- About 2 hours a month each, recognised in performance goals

## Content ownership

| Owner | Owns |
| --- | --- |
| Architects' Forum | Architect track, system design and kata bank, POC guidance |
| Tech Leads' Forum | Intern, SE, SSE and Tech Lead tracks; coding, code review and leadership scenarios |
| HR | Culture interview, candidate communication, fairness checks |
| TA | CV screening prompts, hiring system, metrics |
| HEG | The playbook itself, scorecard, interviewer certification, calibration |

These owners are enforced in the repository through `.github/CODEOWNERS`: a change to a page needs approval from its owner.

## Cadence

| When | What | Who |
| --- | --- | --- |
| Monthly, 60 min | Review change proposals, calibration samples (scores 2+ points apart), interviewer pool health; tag a release | HEG |
| Quarterly, 90 min | Metrics review; two good hires and any that failed; update tracks, anchors and banks | HEG + CTO Office |
| Every 6 months | Rotate scenarios, planted PRs and assignments; retire any that leaked | Owning forum |
| Yearly | Full review against company strategy and the technologies we sell | HEG + CTO Office |

## How to propose a change
1. Open a **Change proposal** issue in the repository (what, why, evidence), or click the edit icon on any page and open a pull request.
2. The page owner reviews it; the HEG decides open questions at its monthly meeting.
3. Merged changes publish automatically. Each monthly release is recorded in the [change log](changelog.md) with a version number.

## What we measure

| Metric | Target |
| --- | --- |
| Interview scores vs 90-day and 6-month performance | Baseline in 2 quarters, then improve |
| Days from application to decision | Within the role track target |
| Feedback forms submitted within 24 hours | 95% |
| Offer acceptance rate | Above 80% |
| Assignment or case study completion rate | Above 75% |
| Candidate survey score | 4 out of 5 |
| Hiring Briefs rated "ready" by independent interviewers | Above 90% |
| Leavers or failed probations within 12 months | Every case reviewed |

## Fairness, confidentiality and AI use
- Never ask about or weigh age, gender, religion, ethnicity, marital or family status, pregnancy, health or disability.
- Briefs, scenarios and exercises use sanitised or fictional domains; never show candidates client code, data or names.
- The AI CV score supports judgement and never decides; a human reviews rejections near the threshold.
- Candidates may use AI in assignments when stated upfront; the walkthrough confirms they own the work.
- Candidate CVs, notes and feedback live only in the hiring system, never in this repository.
