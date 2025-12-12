# Handbook Implementation Plan - Q2 FY 2025 Issue Backlog Review

This document outlines the plan for addressing open issues in the GSA-TTS Handbook repository. It categorizes issues by type and links them to the relevant content in the handbook.

## Summary

- **Total Open Issues:** 33
- **Categories:**
    - Content Updates: 26
    - New Content: 3
    - Technical/Maintenance: 4

## Prioritization Matrix

| Priority | Issue ID | Title | Content Area | Status |
| :--- | :--- | :--- | :--- | :--- |
| **High** | #4214 | Update Handbook Across The Board | Multiple Pages | Open |
| **High** | #4201 | Trello page is out of date | `pages/tools/trello/` | Updated (decommission notice added) |
| **High** | #4178 | Correct and improve instructions for adding partners to Slack | `pages/tools/slack/external-collaboration.md` | Open |
| **High** | #4145 | remove or redirect 81 18f.gov references | Multiple Pages | Open |
| **High** | #3987 | Security Policy violation Repository Administrators | Repository Settings | Open |
| **High** | #3985 | Security Policy violation Branch Protection | Repository Settings | Open |
| **Medium** | #4101 | Update Mural reference | `pages/general-information-and-resources/collaboration-tools.md` | Updated (FigJam migration details added) |
| **Medium** | #4100 | Add more details about giving partners access to Slack | `pages/tools/slack/external-collaboration.md` | Updated (ServiceNow guidance clarified) |
| **Medium** | #4021 | Conferences and training document is out of date | `pages/training-and-development/conferences-events-training.md` | Open |
| **Medium** | #3993 | Transit benefit instructions for DC-based employees is incomplete | `pages/general-information-and-resources/employee-resources-policies/transit-benefit.md` | Open |
| **Medium** | #3951 | broken links and missing pages | Multiple Pages | In Progress (Linkinator 2025-12-12) |
| **Medium** | #3145 | OLU vendor has changed, suggesting review of all OLU pages is needed | Multiple Pages | Open |
| **Medium** | #2990 | Update to replace FedRelay info with new CART provider info | `pages/general-information-and-resources/employee-resources-policies/deaf-hoh.md` | Open |
| **Medium** | #2184 | Review and update `/deaf-hoh` information | `pages/general-information-and-resources/employee-resources-policies/deaf-hoh.md` | Open |
| **Low** | #4135 | Update content guild leads on /working-groups-and-guilds-101/ | `pages/training-and-development/working-groups-and-guilds-101.md` | Open |
| **Low** | #4020 | Add Google Drive Sync instructions | `pages/tools/google-drive.md` | Open |
| **Low** | #3949 | Instructions for password protecting files are Mac-specific and insite link is broken | `pages/general-information-and-resources/sensitive-information.md` | Open |
| **Low** | #3947 | Handbook is missing information on downloading Slack to PCs | `pages/tools/slack.md` | Open |
| **Low** | #3902 | Adjusting steps for setting up the PIV on the macs | `pages/getting-started/piv-cards.md` | Open |
| **Low** | #3856 | "Staff Directory" links to empty/defunct spreadsheet | `pages/general-information-and-resources/who-we-are.md` | Open |
| **Low** | #3851 | broken link in handbook | `pages/tools/software.md` (likely) | Open |
| **Low** | #3841 | Training missing in travel card description | `pages/travel-and-leave/travel-and-leave-policies/first-time-travel-get-in-concur.md` | Open |
| **Low** | #3804 | Add co-hosting event guidance to handbook | New Page | Open |
| **Low** | #3800 | Dead links on Research Guidelines page | `pages/18f/how-18f-works/research-guidelines.md` | Open |
| **Low** | #3726 | Update and reorganize content about our funding structures | `pages/18f/history-and-values.md` | Open |
| **Low** | #3636 | Add Analytics Guild to the list of TTS guilds | `pages/training-and-development/working-groups-and-guilds-101.md` | Open |
| **Low** | #3586 | Mission, Vision, Values | Homepage | Open |
| **Low** | #3532 | Status document for conferences, events and training page out of date | `pages/training-and-development/conferences-events-training.md` | Open |
| **Low** | #3403 | Document procedure or tips for handling spam contributions on GitHub repositories | `pages/tools/github.md` | Open |
| **Low** | #3398 | as a supervisor, I want to be able to navigate through the plays of the new supervisor playbook | New Content | Open |
| **Low** | #3241 | Add TTS org to "Intro to GitHub" | `pages/training-and-development/intro-to-github.md` | Open |
| **Low** | #3169 | Update accessibility guidance for documents and artifacts | `pages/getting-started/classes/accessibility.md` | Open |
| **Low** | #2952 | Create an interactive glossary of common terms and acronyms | Feature Request | Open |

## Detailed Issue Analysis

### Content Updates

#### [Issue #4214: Update Handbook Across The Board](https://github.com/GSA-TTS/handbook/issues/4214)
- **Description:** Comprehensive review and update of multiple sections including TTS Offices, Tools, NavBar, History, Getting Started, Training, and Performance Management.
- **Affected Pages:** Multiple.
- **Action:** Systematically review each linked section and update content/links.

#### [Issue #4201: Trello page is out of date](https://github.com/GSA-TTS/handbook/issues/4201)
- **Description:** Trello was decommissioned on 9/1/25.
- **Affected Pages:** `pages/tools/trello/`
- **Action:** Update page to reflect decommissioning or remove if no longer relevant.

#### [Issue #4178: Correct and improve instructions for adding partners to Slack](https://github.com/GSA-TTS/handbook/issues/4178)
- **Description:** Fix broken link to chat.18f.gov and clarify ServiceNow ticket types.
- **Affected Pages:** `pages/tools/slack/external-collaboration.md`
- **Action:** Update links and instructions.

#### [Issue #4145: remove or redirect 81 18f.gov references](https://github.com/GSA-TTS/handbook/issues/4145)
- **Description:** 18f.gov is offline.
- **Affected Pages:** Multiple.
- **Action:** Search and replace/remove 18f.gov references.

#### [Issue #4101: Update Mural reference](https://github.com/GSA-TTS/handbook/issues/4101)
- **Description:** Mural is no longer used; replace with FigJam.
- **Affected Pages:** `pages/general-information-and-resources/collaboration-tools.md`
- **Action:** Update tool references.

#### [Issue #4100: Add more details about giving partners access to Slack](https://github.com/GSA-TTS/handbook/issues/4100)
- **Description:** Add specifics on permissible use, account types, and transition plans.
- **Affected Pages:** `pages/tools/slack/external-collaboration.md`
- **Action:** Expand documentation.

#### [Issue #4021: Conferences and training document is out of date](https://github.com/GSA-TTS/handbook/issues/4021)
- **Description:** Update guidance on SF-182 process and alternate approvers.
- **Affected Pages:** `pages/training-and-development/conferences-events-training.md`
- **Action:** Update process documentation.

#### [Issue #3993: Transit benefit instructions for DC-based employees is incomplete](https://github.com/GSA-TTS/handbook/issues/3993)
- **Description:** Clarify Regional Code for DC employees.
- **Affected Pages:** `pages/general-information-and-resources/employee-resources-policies/transit-benefit.md`
- **Action:** Add specific instructions for DC region code.

#### [Issue #3145: OLU vendor has changed, suggesting review of all OLU pages is needed](https://github.com/GSA-TTS/handbook/issues/3145)
- **Description:** OLU vendor change impacts training request process.
- **Affected Pages:** Multiple OLU-related pages.
- **Action:** Review and update all OLU references.

#### [Issue #2990: Update to replace FedRelay info with new CART provider info](https://github.com/GSA-TTS/handbook/issues/2990)
- **Description:** Replace FedRelay with new CART vendor instructions.
- **Affected Pages:** `pages/general-information-and-resources/employee-resources-policies/deaf-hoh.md`
- **Action:** Update vendor information and instructions.

#### [Issue #2184: Review and update `/deaf-hoh` information](https://github.com/GSA-TTS/handbook/issues/2184)
- **Description:** General update of Deaf/HoH resources.
- **Affected Pages:** `pages/general-information-and-resources/employee-resources-policies/deaf-hoh.md`
- **Action:** Comprehensive review and update.

### New Content

#### [Issue #3804: Add co-hosting event guidance to handbook](https://github.com/GSA-TTS/handbook/issues/3804)
- **Description:** Create new page for co-hosting events guidance.
- **Action:** Create new page with provided content.

#### [Issue #3403: Document procedure or tips for handling spam contributions on GitHub repositories](https://github.com/GSA-TTS/handbook/issues/3403)
- **Description:** Add guidance on handling spam.
- **Affected Pages:** `pages/tools/github.md`
- **Action:** Add new section to GitHub tools page.

### Technical/Maintenance

#### [Issue #3987: Security Policy violation Repository Administrators](https://github.com/GSA-TTS/handbook/issues/3987)
- **Description:** Too many teams with admin permission.
- **Action:** Audit and reduce admin permissions.

#### [Issue #3985: Security Policy violation Branch Protection](https://github.com/GSA-TTS/handbook/issues/3985)
- **Description:** Branch protection rules need update.
- **Action:** Update branch protection settings.

#### [Issue #3951: broken links and missing pages](https://github.com/GSA-TTS/handbook/issues/3951)
- **Description:** Fix broken links identified by automated link checks (Linkinator) and manual review.
- **Recent status (2025-12-12):** In progress — a Linkinator run detected 13 broken links. See results and recommended actions below.
- **Action:** Triage Linkinator findings, update or remove broken external links, restore or redirect missing internal pages, and re-run Linkinator until the scan is clean.

**Linkinator results (2025-12-12)**

The following links were reported as failing during a scan of the generated `_site` directory. These are prioritized for triage and fix:

- External links reported as failing or unreachable:
    - `https://before-you-ship.18f.gov/infrastructure/`
    - `https://before-you-ship.18f.gov/security/scanning/`
    - `https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services`
    - `https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services/office-of-products-and-programs`
    - `https://www.gsa.gov/about-us`
    - `https://www.gsa.gov/`
    - `https://www.gsa.gov/website-information/accessibility-aids`
    - `https://www.gsa.gov/reference/freedom-of-information-act-foia`
    - `https://www.gsa.gov/reference/reports/budget-performance`
    - `https://www.gsa.gov/website-information/website-policies`

- Internal / site links returning errors (404):
    - `/general-information-and-resources/psychological-safety/` (404 when crawling `_site`)
    - `https://handbook.tts.gsa.gov/index` (404)

Recommended immediate fixes:

- Replace or remove references to `before-you-ship.18f.gov` (18F content is deprecated). Update to current TTS or GSA guidance, or add an archived link/note where appropriate.
- Verify each failing `gsa.gov` URL and replace with the correct canonical GSA/TTS resource if available; where GSA endpoints are transiently failing, attempt re-checks before removing.
- Restore the missing internal `psychological-safety` page or update links to the correct location within the site.
- Replace the `handbook.tts.gsa.gov/index` link with the canonical site root or a correct relative link.
- After fixes, re-run `pnpm run test:linkinator` to confirm the scan is clean and close or update Issue #3951 accordingly.

Notes:
- These results are a snapshot from 2025-12-12 and should be used as a prioritized triage list. Some external failures reported as status `0` may be transient; verify before removing or permanently changing content.

Triage issue drafts
-------------------

I could not create GitHub issues automatically because the local environment does not have the `gh` CLI authenticated. Instead, I created local issue-draft files under `.github/ISSUE-TRACKING/` that you can convert into real GitHub issues or use as PR/triage checklists:

- `.github/ISSUE-TRACKING/triage-18f-links.md` — bulk deprecated 18F links
- `.github/ISSUE-TRACKING/triage-gsa-links.md` — failing `gsa.gov` links
- `.github/ISSUE-TRACKING/triage-internal-404s.md` — missing internal pages / redirects
- `.github/ISSUE-TRACKING/triage-enforce-linkinator-ci.md` — CI enforcement and acceptance criteria

How to convert drafts into GitHub issues (recommended)

1. Install and authenticate the GitHub CLI locally if you want to create the issues from this machine:

```bash
gh auth login
gh issue create --title "Triage: Deprecated 18F 'before-you-ship' links (bulk)" --body-file .github/ISSUE-TRACKING/triage-18f-links.md --label triage
```

2. Or copy-paste the draft contents into the GitHub web UI under the repository's Issues tab and assign reviewers/labels.

CI enforcement note
-------------------
I also updated the `pull-request` workflow to explicitly enforce Linkinator failures in the `validate_external_links` job (the `Run Linkinator` step now sets `continue-on-error: false`) so future PRs will be blocked by unresolved external broken links. Create the triage issues and address the highest-priority link fixes, then open a PR to resolve them.

#### [Issue #2952: Create an interactive glossary of common terms and acronyms](https://github.com/GSA-TTS/handbook/issues/2952)
- **Description:** Feature request for interactive glossary.
- **Action:** Evaluate feasibility and implement if approved.
