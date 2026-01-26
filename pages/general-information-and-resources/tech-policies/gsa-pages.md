---
title: GSA Pages
questions:
  - tts-tech-operations
  - cg-pages
  - dns
redirect_from:
  - /gsa-pages/
---

# Authority to Use (ATU) Process

{% alert "", "warning" %}
This guide is for **GSA Employees or Contractors** operating a GSA Website
{% endalert %}

"GSA Pages" is a **GSA only Authority to Operate (ATO)** of [cloud.gov's FEDRAMP Authorization](https://marketplace.fedramp.gov/products/F1607067912) of their [cloud.gov Pages](https://pages.cloud.gov) service. As such, it adds the Security Controls around the source code and contents for the website (e.g. Github). It provides **GSA employees** with a fast and secure approach to getting a web presence for your projects/programs.

{% include "low-system.html" %}

## Launching a Website at GSA

- Confirm your website is listed on [https://touchpoints.digital.gov](https://touchpoints.digital.gov)
  - if not listed, [complete a new website request](https://touchpoints.app.cloud.gov/admin/websites/new)
- Follow [GSA's Digital Lifecycle Program Guide](https://insite.gsa.gov/employee-resources/communications/websites/strategy-policy-and-standards/digital-lifecycle-program)

Prior to standing up a site with GSA Pages, you will need a domain or subdomain. To obtain a new domain or subdomain with GSA, approval is needed by GSA Leadership and Office of Customer Experience in Touchpoints.

## Launching a cloud.gov Pages Website

- Identify a Federal GSA Employee as the **GSA Website Manager**

> Note: **GSA Website Manager** is defined here [GSA's Digital.gov Program](https://digital.gov/2023/03/24/who-is-your-website-manager/).

- Turn on all [Github Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) for the website's repository and `Enable`:
  - [CodeQL](https://docs.github.com/en/code-security/code-scanning)
  - [Dependabot](https://docs.github.com/en/code-security/dependabot/)
  - [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
- Designate (One) Github Team with `Admin` access to the repository
- Designate (One or More) Github Team(s) with `Write` access to the repository
- Submit a pull request to add your repository to our Github configuration scanner to [GSA](https://github.com/GSA/.allstar/blob/main/allstar.yaml) or [GSA-TTS](https://github.com/GSA-TTS/.allstar/blob/main/allstar.yaml)
- Create a [`SECURITY.md` file](https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository) - [Example](https://github.com/GSA-TTS/.allstar/blob/main/SECURITY.md)
- Follow GSA's [Digital Lifecycle Program](https://insite.gsa.gov/employee-resources/communications/websites/strategy-policy-and-standards/digital-lifecycle-program?term=DLP) for the Website

## Authority to Use (ATU) Review

1. Review [GSA Pages Security Review and Approval Process](https://insite.gsa.gov/system/files/GSA-Pages-Security-Review-and-Approval-Process-%5BCIO-IT-Security-20-106-Revision-2%5D-03-08-2024_0.pdf)
1. Complete [GSA Pages Security Review and Approval Form](https://docs.google.com/forms/d/e/1FAIpQLSeDNRkNOol6pNvWdTBXA_lVMyGr4v0o5wo2ElZAMMX2kPMjzg/viewform) your information will be used to complete [GSA Pages Security Review Document](https://insite.gsa.gov/system/files/GSA-Pages-Site-Review-and-Approval-Template-03-08-2024.docx)
1. Email [TTS Tech Operations](mailto:tts-tech-operations@gsa.gov) to confirm receipt or request review status.

- Resolve any Critical or High security findings from security scanners
- [TTS Tech Operations](mailto:tts-tech-operations@gsa.gov) will:
  - Create a Google Group for your website
  - Notify the Website Manager of any missing information or security findings

Once the ATU review is completed the **GSA Website Manager** will be sent an ATU Approval package for signature in Docusign. The **GSA Website Manager** will be responsible for managing Security Findings over the lifecycle of the Website using the Google Group created to manage communications.

## Maintaining Approved Sites

Sites hosted on GSA Pages are required to have their URLs scanned in accordance with CIO-IT Security-06-30: Managing Enterprise Cybersecurity Risk and GSA’s parameter for National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53, control RA-5, Vulnerability Scanning.

> This is performed after the ATU request is submitted, reviewed, and signed.

## Reassessment

A Site’s ATU will have to be reassessed and an ATU reissued if the Site is found `NOT` to be in conformity with the requirements.

Conditions/events that may require a reassessment of the ATU include:

- New third party integrations not on the approved list are added.
- The data types or information presented on the site changes.
- A significant security incident occurs.
- There are deviations from the ATU maintenance requirements.

> This Determination is made by the GSA Pages System Owner `tts-tech-operations@gsa.gov`. Generally, this is done if security findings are not being addressed promptly.

**GSA Pages System Owner** will proceed with the following actions, only in the event that the **GSA Website Manager** is none responsive.

## Failure to Maintain Site - Site Removal

Sites that fail to maintain the ATU requirements will be issued a formal notice. The GSA Pages team may take steps to disable the site or remediate the vulnerabilities. **GSA Website Manager** who hit certain triggers of overdue **Plan of Actions & Milestones (POA&Ms)** and/or failure to maintain alignment to ATU requirements will be required to provide a **Corrective Action Plan (CAP)** detailing the steps that will be taken to address the deficiencies.

The CAP must be approved by the **GSA Website Manager**, System Owner, ISSM, and IST Director. Sites or **GSA Website Managers** who fail to respond to a CAP or complete approved actions will be removed from the ATO boundary, and will no longer be authorized. The removal process steps are further described below:

- **Detailed Finding Review (DFR)** - **GSA Website Managers** will be issued a DFR upon failing to address a deficiency within the site or alignment with the ATU requirements.
- **Corrective Action Plan** - **GSA Website Managers'** who fail to adequately respond or address a DFR will be issued a CAP request.
  The **GSA Website Manager** must provide a CAP to the System owner within 30 days of the CAP request. The CAP must detail how the team will address the deficiencies and the timeline for completion.

The **GSA Website Manager** CAP must be approved by the GSA Pages system owner, the ISSM, and IST Director.

## Site Disablement

**GSA Website Manager** who fail to respond to the CAP within the 30 day timeframe, or fail to provide an adequate CAP, or fail to comply with the provisions, timeline and duration of their CAP will have their site Disabled.

- Disabling a site consists of removing the site from the [cloud.gov Pages Platform](https://pages.cloud.gov) which will result in a site being unreachable.

## Site Removal

**GSA Website Manager** who fail to address deficiencies within 90 days of disablement will have their site removed from the GSA Pages ATO boundary and the site will be deleted.

- Deleting a site removes the published site from the [cloud.gov Pages Platform](https://pages.cloud.gov) and from the dashboards of all site users. This will bring the entire site offline and make it inaccessible for users.
- A Site Removal letter will be issued by the **GSA Pages System Owner** to **GSA Website Manager** indicating that the site is no longer authorized to operate.

## Incident Response

**In the event of a security incident:**

Follow [TTS Incident Response Plan]({% page "/general-information-and-resources/tech-policies/security-incidents" %})

## Contingency Plan

**In the event of an outage:**

1. Sign up for [cloud.gov Pages Status](https://cloudgov.statuspage.io/) notifications
1. Follow [cloud.gov Contingency Plan](https://cloud.gov/docs/ops/contingency-plan/)
