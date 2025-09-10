---
title: Collaboration tools
questions:
  - questions
redirect_from:
  - /collaboration-tools/
cSpell: ignore Intelink
---

Collaboration is a critical part of our work and organizational philosophy.
There are a variety of tools to support our teams' collaboration and
communication needs. While some tools are used often within TTS, working with an
external partner may necessitate the use of a different tool that's best for the
partner team and their internal IT policies.

_References to specific products or organizations are for information only and
don't constitute an endorsement of the product/company._

## Using TTS tools

{% include "software-warning.html" %}

Below are our the tools we use internally at TTS and potential tools to help
your team and partner collaborate.

For each tool mentioned below, we include links to:

- a setup handbook page
- a Tool @ TTS guide
- an admin handbook page _when applicable_

### Instant messaging

**[Slack]({% page "/tools/slack/" %})** is an instant messaging tool that uses
themed chat rooms (called channels) to help teams quickly communicate on a daily
basis, in an open, collaborative way. The TTS team will create a channel for
your project in our Slack workspace, which you can access from your web browser.
It may be useful to read about
[what managers need to know about social tools](https://hbr.org/2017/11/what-managers-need-to-know-about-social-tools)
when getting started.

- [Slack @ TTS – Internal Guide](https://docs.google.com/document/d/1Hm42cg61S7FPhaLrRIJxl-LXQCcwGvJTKX_wG0Jz4aU/edit#heading=h.ho6etfp5g3pp)

<details markdown="block">
<summary> Compliance and records considerations</summary>

- Slack is ATO'd for use in GSA, and has a FedRAMP Agency Authorization at the
  [LI-SaaS impact level](https://tailored.fedramp.gov/). Slack operates within
  the AWS public cloud.
- All communication in Slack are considered records and conform to GSA's record
management policy.
</details>

Here are some common barriers to using Slack with partners and workarounds to
try:

- **IF** partners are too overwhelmed by other things to check (such as email),
  **THEN** use email to message instead.
- **IF** blocked by firewall/security issues, **THEN** use email to message
  instead. Sometimes Google Hangouts Chat is an option, at least for GSA
  partners.

<details markdown="block">
<summary>Other instant message services to consider or ask your partner about</summary>

- **Skype:** Skype provides instant messaging and video teleconferencing
  capabilities within a partner network.
- **Google Hangouts Chat:** Google Hangouts Chat is the instant messaging
  service within the Google G Suite, and typically integrated with Gmail,
  Calendar, Drive, and Sites.
- **[Microsoft Teams]({% page "/tools/teams/" %})**
</details>

### Video conferencing

See [meetings and meeting
tools]({% page "/getting-started/classes/meetings-and-meeting-tools/#videoconferencing" %}).

### Sharing files

**[Google Drive]({% page "/google-drive/" %})** is a storage and collaboration
platform for spreadsheets, slide decks, and text documents. Documents on Google
Drive are not public, but can be shared among team members. TTS can give your
team access to our Google Drive so everyone can collaborate.

<details markdown="block">
<summary>Compliance and records considerations</summary>

- [Google G Suite has a FedRAMP Agency ATO](https://marketplace.fedramp.gov/#/product/google-g-suite)
Moderate Impact authorized since January 2016. Agencies using the service
include GSA, DOE, DHS, and others.
</details>

Here are some common barriers to using Drive with partners and some workarounds
to try:

- **IF** the partner doesn't have a government Google account, **THEN** create
  [GACA](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/sharing-securely-in-google/gsa-affiliated-customer-account-gaca)
  accounts for partners, or share files via services below or via email.
- **IF** they're blocked by firewall/security issues, **THEN** try options
  below.

<details markdown="block">
<summary>Other file sharing services to consider or ask your partner about</summary>

- **Microsoft SharePoint:** a browser-based collaboration and documentation
  management system, similar to Google Drive. Recent releases of SharePoint
  provide allow teams to rapidly create internal websites (like Google Sites)
  and collaboratively create and manage content in documents, spreadsheets, and
  slides.
- **[Max.gov](https://portal.max.gov/portal/home):** a government-wide suite of
  advanced collaboration, information sharing, data collection, publishing,
  business intelligence, and authentication tools and services used to
  facilitate cross-government collaboration and knowledge management.
- **[DOD SAFE](https://safe.apps.mil)**, (Secure Access File Exchange): SAFE is
  a service to exchange unclassified files that are too large to share via
  email. SAFE can handle files up to 8.0 GB.
- **[Intelink's](https://www.intelink.gov/my.policy):** IntelDocs, allows users
to share unclassified files. The service has a file size limit of 100MB and
folder limit of 1GB.
</details>

### Tracking project tasks

**[Trello]({% page "/trello/" %})** is a project management tool that organizes
information into lists. Teams often use it to track specific tasks through
different stages (such as backlog, in progress, in review, and done). Trello
boards can be private or public.

<details markdown="block">
<summary>Compliance and records considerations:</summary>

- GSA Tech Operations is working on a FedRAMP application as of January 2020.
  Members of TTS can use it and will be notified if anything changes.
- Trello boards should be considered records.
</details>

<details markdown="block">
<summary>Trello alternatives</summary>

- **[Airtable]({% page "/tools/airtable/" %})**
- **[GitHub Project Boards:](https://docs.github.com/en/github/managing-your-work-on-github/managing-project-boards)**
  Not recommended from usability/UI perspective, as the interface is basic
  without the richness of other planning systems or the simplicity of Trello.
  Compliance/records considerations are the same as for
  [GitHub]({% page "/github/" %}).
- **Jira:** The GSA IT Jira instance is not recommended. Like ZenHub, it
  integrates with GitHub and provides higher-level scoping and linking (e.g.,
  epics and dependencies). It's pretty difficult to grant access to outsiders,
  and it's pretty heavyweight and difficult to configure. Contact
  [gsa-jira.support@gsa.gov](mailto:gsa-jira.support@gsa.gov) for more
  information.
- **Microsoft Azure Devops Boards:** Bundled with Azure, but not within
  [FedRAMP services in scope](https://docs.microsoft.com/en-us/azure/azure-government/compliance/azure-services-in-fedramp-auditscope).
- **[Smartsheet]({% page "/tools/smartsheet/" %})**
- **[ZenHub:](https://www.zenhub.com/)** Works within GitHub and provides
higher-level scoping and linking (e.g., epics and dependencies). Unfortunately,
[we cannot expand use at GSA](https://github.com/GSA-TTS/tts-tech-operations/issues/1040).
</details>

Here are some common barriers to using Trello with partners and some workarounds
to try:

- **IF** not part of partners' daily workflow/practices, **THEN** discuss task
  progress in sprint ceremonies or via email.
- **IF** blocked by firewall/security issues, **THEN** build a board using
  whiteboarding or visualization tools like Mural, Google Slides or Powerpoint.

### Viewing/scheduling calendars

**[Google Calendar]({% page "/google-calendar/" %})** is the calendar tool that
comes with gmail and G Suite. [The Handbook]({% page "/sharedcalendars/" %}) has
guidelines and requirements for providing partners with access.

<details markdown="block">
<summary>Compliance and records considerations</summary>

- [Google G Suite has a FedRAMP Agency ATO](https://marketplace.fedramp.gov/#/product/google-g-suite)
Moderate Impact authorized since January 2016. Agencies using the service
include GSA, DOE, DHS, and others.
</details>

Here are some common barriers to using Google Calendar and some workarounds to
try:

- **IF** G-suite is incompatible with partners' available tools, **THEN** have
  partners schedule meetings, try Max.gov calendar, or use email, phone, or
  Slack to align on meeting times.

### Development and Documentation

**[GitHub]({% page "/github/" %})** is an online code storage and collaboration
platform. TTS will create a repository (commonly called a repo) for the project
and use it to store both documents and code. By default, TTS's work with your
team on GitHub will be visible to the public. Your TTS team can tell you more
about the benefits of working in the open. Teams may also use GitHub, as well as
browser add-ons that complement it, to collaboratively track project tasks.

<details markdown="block">
<summary>Compliance and records considerations</summary>

- GitHub is ATO'd for use in GSA and has
  [a FedRAMP Agency Authorization at the LI-SaaS impact level](https://marketplace.fedramp.gov/#/product/github-enterprise-cloud).
  GitHub operates their own data centers.
- All communication in GitHub is considered a record and conforms to GSA's
record management policy.
</details>

<details markdown="block">
<summary>Additional documentation support</summary>

- **[Github Wiki](https://help.github.com/articles/about-github-wikis/)** is a
section of GitHub that some teams use to store supporting documents. Each GitHub
repository has its own wiki, and anyone on your team can edit the wiki. A wiki
is a good place to store documents that the team will refer back to throughout a
project such as design principles, research results, or a project roadmap.
</details>

### Remote Whiteboarding

**[Mural]({% page "/tools/mural/" %})** is an online collaborative whiteboard
tool. It allows teams to collectively generate ideas with sticky notes and
sorting them around as if they were in the same room. You don't need an account
to participate and you can access the tool from any browser.

<details markdown="block">
<summary> Compliance and records considerations</summary>

- Mural is hosted on Azure commercial public cloud. It has a GSA ATO but doesn't
  have a FedRAMP authorization or anything in process.
- Mural generally wouldn't be used to store “records” but instead to organize
  information for discussion purposes. GSA Records Officer has determined that
  “this product likely creates a number of record types. However, the specific
  types of records created will depend on the context in which this product is
  used.” As such, be sure to export and archive information from Mural
  periodically.
- Truly low-impact: Mural shouldn't be used to store anything confidential or
  authoritative. Instead, use it for ephemeral organization of information and
  production visualizations. Non-GSA participants are invited to use the service
  anonymously.
- **IF** all the participants are on a Google Meet (or at least have
Google/[GACA](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/sharing-securely-in-google/gsa-affiliated-customer-account-gaca)
accounts), **THEN** try
[Google Jamboard](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/jamboard-digital-whiteboard).
</details>

### Feedback Collection

**Qualtrics** is a feedback collection tool that helps with creating surveys.
These surveys can be distributed in a variety of ways including on websites like
[usa.gov](https://www.usa.gov/); and used to create data dashboards. Any TTS
employee may use this tool for free. The [Qualtrics Handbook
page]({% page "/qualtrics/" %}) has detailed information on how to request a
license and use the tool.

<details markdown="block">
<summary> Compliance and records considerations</summary>

- Qualtrics has a GSA ATO and FedRAMP authorized.
- A System of Records Notice (SORN) is related to the Privacy Act.
  [SORNs are under the Chief Privacy Officer's jurisdiction](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act)
  and are posted in the Federal Register for review. Qualtrics is covered under
  SORN GSA-CIO-3.
- Qualtrics should be used if you're collecting feedback that is directly
  helping GSA; not another agency. For example: if you're working with NIH, you
  cannot collect data for NIH using GSA's Qualtrics account.
- Please use Google Forms if you're collecting feedback from people with GSA
  emails.
- Per
  [GSA's Survey Order](https://insite.gsa.gov/directives-library/gsa-customer-supplier-surveys-),
  OCE is “responsible for ensuring survey materials distributed to recipients
  outside of GSA and/or across all of GSA meet agency standards.” Meaning that
  all Qualtrics surveys need to be approved by OCE before distribution.
- [More information on Qualtrics and GSA's feedback collection efforts](https://insite.gsa.gov/services-and-offices/staff-offices/office-of-customer-experience/surveys-and-feedback-collection)

</details>

## Setting up tools with partners

Before the project even begins, the project's Account Manager should begin the
discussion of collaboration tools in pre-flight calls with partners. The goals
at this stage are to:

- **Understand what collaborative tools are already in use** at the partner
  agency and whether they'll meet our needs
- **Test whether the partner can access the tools often used at 18F**
- **Identify any potential barriers** to the shared use of collaborative tools,
  so they can potentially be resolved before the project begins

Early in the project, TTS and the partner team should agree upon a basic suite
of collaboration tools to support team activities. Consider these general
strategies:

- **Meet clients where they are.** If a partner already has a tool they use
  regularly to accomplish the same goal, it's likely worth it to make use of
  established workflows, even if the tool doesn't have as many bells and
  whistles as another tool that TTS staff uses.
- **Trial and error.** It may take a few cycles to figure out which tools work
  best for TTS and the partner team. Working through any issues with different
  tools in a Sprint 0 can be an effective way to set up the remainder of the
  engagement for success.
- **Troubleshoot with others.** Ask in Slack to see if your teammates have faced
  similar challenges. Collectively, we've overcome many blockers to collaborate
  over the years.

If your partner agency is reluctant to use collaboration tools, learn why. Is it
a security question? Is there a burdensome technology approval process? Is there
another tool already in place to achieve the same goal? Discovering the root
causes to their reluctance may help inform your project and ensure productivity.

If you're going to use a partner's tools, see the
[information below](#using-partners-tools).

Lastly, **don't wait until the end of an engagement** to think about
transitioning documents, code or client accounts from the tools that you use to
collaborate. It's important to have a partner-owned account or alternative in
order to avoid creating blockers at the end of an engagement.

### Helping partners make the most of these new tools

Here are some recommendations for how to level up our partners' skills:

#### Provide a training or learning materials

- Use or adapt Greg Walker's
  [Slack training](https://app.slack.com/docs/T025AQGAN/FQ46XKBMZ?origin_team=T025AQGAN).
- There are some useful GitHub-related resources listed in
  [this Slack thread](https://gsa-tts.slack.com/archives/CHZLJBWCV/p1559759830000500)
  or
  [this Slack thread](https://gsa-tts.slack.com/archives/C04KL9ZN2/p1571357280118500).

#### Learn by doing/watching/failing

- Introduce product features as needed on calls.
- Let the partner play around with the tools in a low-risk environment—let them
  fail and “break” things. It's a great way to learn!

#### Develop shared conventions with your partner

- Consider creating a “how we work” document detailing your team conventions
  (e.g. task labels, how you title a story, etc). It's a lot easier to remind
  folks of the process when you have a document to point them to.

### Helping partners transition off collaboration tools

- **Important!** Don't wait until the end of a project to think about this!
- If the partner is using 18F tools during the project, the team should **advise
  the partner on how to gain access to their own versions** of those tools or
  comparable alternatives.
- The TTS Handbook details processes for offboarding partners off our own tools,
  like Slack ([account
  removal]({% page "/tools/slack/user-management/#offboarding" %}) and
  [exporting]({% page "/tools/slack/records/#exporting-channel-contents" %})),
  [Github]({% page "/tools/github/#rules" %}), and Google Drive. The Account
  Manager will facilitate this offboarding, including providing ample warning to
  the partner.
- If the team has been using the partner's collaboration tools, be sure to
  capture any documents or artifacts before we lose access.

## Using partners' tools

Per
the [IT Standards policy](<https://www.gsa.gov/directive/gsa-information-technology-(it)-standards-profile>),
section 2(e):

> Collaboration with another agency through software or cloud services which
> they use for managing non-GSA data (either data owned by that agency or public
> data) does not require security or Section 508 compliance review, as that
> responsibility is assumed by the providing agency.  Other policies which may
> restrict the use of GSA Enterprise Accounts or the release of GSA-owned data
> may still apply.

In other words, it is generally fine to use a tool authorized and maintained by
a partner agency. If you're not sure, ask.

That said, only [approved
software]({% page "/general-information-and-resources/software/" %}) can be
installed on GSA machines. This often means using web-based versions, where
possible.

## See also

- [GSA's Future of Digital Work Collaboration Tool list](https://sites.google.com/a/gsa.gov/tech_toolkit/collaboration-tools)
