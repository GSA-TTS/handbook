---
title: "CI: Enforce Linkinator failures in `pull-request` workflow"
labels: [ci, automation]
assignees: []
---

Summary
-------

Make Linkinator failures block PRs so broken external links must be fixed before merging. Currently the PR workflow runs Linkinator; this task makes the enforcement explicit and documents the change.

Suggested actions
-----------------

- Update `.github/workflows/pull-request.yml` to explicitly enforce Linkinator failures.
- Document the change in the PR and the acceptance criteria for resolving link failures.

Acceptance criteria
-------------------

- Workflow is updated so the `validate_external_links` job fails on Linkinator errors (no `continue-on-error: true` or other skip behavior).
- A follow-up PR is created that either addresses the currently failing links or documents the triage plan for handling them.
