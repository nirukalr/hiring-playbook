# System design exercise

**Who uses it:** SE (optional), SSE, TL

Use the copy button on the block below. The editable master copy lives in the shared drive: *add link*.

```text
SYSTEM DESIGN EXERCISE  (45–60 min)
Problem (project-shaped, same for every candidate for this role):
  e.g. "A claim approval API reduces a member's funding balance.
  Approvals arrive by API and from a queue worker. Design it."

0–5   Clarify: candidate should ask about volume, consistency, tenants
5–25  Design: data model, components, request flow
25–40 Failure: duplicates, partial failure, retries, dead letters, replay
40–50 Change a constraint: 10× traffic / new region / rule change
50–60 Operate: monitoring, alarms, deployment, rollback, cost

Probe points and what a 3 / 4 sounds like:
  Idempotency   3: idempotency key per approval   4: explains storage and expiry
  Transactions  3: balance + claim in one tx       4: outbox for events
  Tenancy       3: tenant on every query           4: enforced below the app layer
  Observability 3: logs + alarms on DLQ            4: correlation IDs, SLOs
```
