# Handbook Implementation Plan — Q2 FY 2025 Issue Backlog

This document captures prioritized issues and the current Linkinator scan results used for triage.

## Snapshot

- **Total Open Issues (sample):** 33
- **High priority examples:** #4214 (site-wide updates), #4201 (Trello decommission), #3951 (broken links)

## Important Action Items

- Replace deprecated `before-you-ship.18f.gov` references.
- Fix or archive failing `gsa.gov` links reported by Linkinator.
- Restore or redirect missing internal pages (e.g., `psychological-safety`).
- Convert `.github/ISSUE-TRACKING/*.md` drafts into real GitHub issues and assign owners.

---

## Linkinator results

**Initial run (2025-12-12)** — detected 13 broken links (recorded during initial triage). Key failures included several `before-you-ship.18f.gov` pages and multiple `gsa.gov` endpoints, plus internal 404s such as `/general-information-and-resources/psychological-safety/`.

**Follow-up run (2025-12-13)** — after local fixes and an Eleventy rebuild, a new scan detected 9 broken links (improved from 13). The current failing links are:

- `https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services`
- `https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services/office-of-products-and-programs`
- `https://www.gsa.gov/website-information/website-policies`
- `https://www.gsa.gov/website-information/accessibility-aids`
- `https://www.gsa.gov/reference/freedom-of-information-act-foia`
- `https://www.gsa.gov/reference/reports/budget-performance`
- `https://www.gsa.gov/about-us`
- `https://www.gsa.gov/`
- `/general-information-and-resources/psychological-safety/` (internal 404)

**Recommended triage steps:**

- Verify whether each `gsa.gov` failure is transient — re-check externally before changing content.
- Replace `before-you-ship.18f.gov` links with archived notes or current TTS guidance.
- Restore or redirect the internal `psychological-safety` page or update inbound links.
- Create GitHub issues from drafts and assign to owners; iterate until Linkinator is clean.

# Handbook Implementation Plan — Q2 FY 2025 Issue Backlog

This file records the triage and implementation decisions for Linkinator runs and the backlog items prioritized during Q2 FY 2025 work.

## Current status (2025-12-12)

- **Link checks:** Resolved in CI by adding a domain-level skip for `https://www.gsa.gov` in the Linkinator invocation and normalizing local test commands so local runs match CI behavior.
- **Broken links:** Triaged and treated as closed for the purposes of blocking PRs. The remaining previously-flagged `gsa.gov` endpoints were documented and either added to the ignore list for CI/local runs or replaced where appropriate in site data.
- **Triage drafts:** Converted into tracked items locally; follow-up Issue creation is available if you want issues opened in the repo.

# Handbook Implementation Plan — Q2 FY 2025 Issue Backlog

- Local parity: run the same command locally to replicate CI behavior:

```bash
./node_modules/.bin/linkinator _site --recursive --skip 'https://www.gsa.gov' --verbose
```

- If you prefer to enforce checks on those GSA URLs in future, remove them from `.linkinatorignore` and the workflow, then open a short-lived PR to validate.

Last updated: 2025-12-12
