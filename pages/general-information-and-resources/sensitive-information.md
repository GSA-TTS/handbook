---
title: Sensitive information
questions:
  - infrastructure
redirect_from:
  - /sensitive-information/
---

Here's what you need to know about sensitive information at TTS.

## What is considered sensitive?

Anything that would make our systems vulnerable or would impact the privacy of
others if it fell into the wrong hands. See also:
[the GSA Controlled Unclassified Information (CUI) Guide](https://insite.gsa.gov/employee-resources/information-technology/security-and-privacy/controlled-unclassified-information-cui/cui-guide).

Here are some examples of sensitive information:

- passwords
- API Keys
- private certificates and keys
- usernames
- email (messages)
- IP addresses
- subnets
- resource IDs
- account IDs
- non-public security vulnerabilities
- roles, policies, and group membership
- Personally Identifiable Information (PII)
  - See `Releasability of GSA Individual Employee Information` in the
    [GSA Data Release Policy](https://www.gsa.gov/directives-library/gsa-data-release-policy-2)
    (commonly referred to as "business card PII") for exceptions
- payment card industry (PCI) information
- Controlled Unclassified Information (CUI)
- Federal Tax Information (FTI)
- personal health information (PHI/ePHI)
- some kinds of acquisition information
- emergency procedures, such as evacuation plans

Not all sensitive information is treated the same. TTS categorizes sensitive
information as **secrets**, **privacy**, and **other** sensitive information in
order to help provide guidance for how to handle different types of sensitive
information.

**Secrets**, like passwords, API keys, and private keys should **NOT** be keep
in source code repositories. Instead, use
[alternative secret management](#tools) approaches and solutions.

**Privacy** information, like PII, has [its own
guidance]({% page "/launching-software/privacy" %}).

**Other** sensitive information, like IP addresses, subnets, and AWS account
IDs, may be kept in a _private_ repository.

It's okay to publish IAM roles, policies, and group names as long as _who_
belongs to those is not attached to the information. This helps deter spear
phishing. You may store this information in a _private_ repository.

If you aren't sure whether something is sensitive information, ask
{% slack_channel "infrastructure" %} for advice _first_. Please don't include
the potentially sensitive information in Slack.

If you inadvertently come into the possession of classified information (Secret,
Top Secret, etc.), you should immediately follow our [security incident
process]({% page "/security-incidents/" %}).

## What to do if you find or expose sensitive information

See [reporting other
incidents]({% page "/general-information-and-resources/tech-policies/security-incidents/#reporting-other-incidents" %}).

## Protecting TTS Systems

Preventing the leak/exposure of secrets and sensitive information must always be
our top priority. We follow these best practices for protecting sensitive
information in code and TTS systems:

- [Install Caulking](https://github.com/cloud-gov/caulking). It's easy to
  accidentally push secrets to GitHub. Caulking checks for many common types of
  API tokens and other sensitive information before you commit, allowing you to
  remove sensitive data before accidentally publishing it. (This repo assumes
  MacOS with Homebrew installed.)
- **Do not store sensitive information in GitHub**, including environment
  variables, private configuration data, or sensitive information about the
  public (including but not limited to PII). In the event that such variables or
  configuration data is pushed to a GitHub repository accidentally, even
  momentarily, consider it compromised and revoke or change the credentials
  immediately. Do not delete the commit itself. Then immediately follow the
  directions on the [incident response handbook
  page]({% page "/security-incidents" %}). If you're unsure how to protect this
  information, consult with Infrastructure on GitHub or in the
  {% slack_channel "admins-github" %} channel in Slack.
- [Build Pipeline Security](https://sprocketfox.io/xssfox/2021/01/18/pipeline/)
  is a helpful resource for protecting sensitive information in CI/CD.

## Tools

TTS offers a variety of tools for protecting sensitive information. As you
learned in your Security Awareness and Privacy training in
[GSA Online University (OLU)](https://gsaolu.gsa.gov), only share sensitive
information with the people who absolutely need it and are authorized to see it.

### Google Drive

You can use [GSA Google Drive]({% page "/tools/google-drive/" %}) to share
sensitive files, spreadsheets, and documents. This includes personally
identifiable information (PII) of either federal staff or the public, but it
_does not_ include classified information of any kind. If you're handling PII,
be absolutely sure you are only sharing Drive files with GSA staff and that
those staff members have a direct need for the information.

### OMB MAX

You can use [OMB MAX](https://max.omb.gov/) to share sensitive files, either
using appropriate "workspaces" within MAX, or with
[MAX Drive](https://drive.max.gov/).

[MAX Drive](https://drive.max.gov/) is good for sending a one-off file to a
partner (for example, when their email server strips out an attachment).
Retrieving a file that has been uploaded to MAX Drive does not require the
recipient to have a Max.gov account — they only need the file share's private
URL and an (optionally set) access password. An access password should be set
for any files that are not public.

[MAX workspaces](https://community.max.gov/pages/viewpage.action?pageId=177209586)
are used with partners who don't have access to — or who don't feel comfortable
putting the information in — Google Drive. Some workspaces in MAX are available
to private organizations (for example, cloud service providers in the FedRAMP
workspaces) and many other government agencies. Anyone with a `@gsa.gov` email
can self-register on [Max.gov](https://portal.max.gov/portal/home); register
your HSPD-12/PIV card or set up 2-factor authentication via a supported
authenticator app. Max.gov document sharing uses
[Confluence](https://www.atlassian.com/software/confluence) so you may need to
read Max.gov's documentation on how to manage permissions and upload documents.

Be sure you know who you need to share with before posting. Only
.gov/.mil/.fed.us users can self-register to Max.gov; other email domains can be
individually granted access, but you'll have to personally sponsor them by
making a request to MAXsupport@omb.eop.gov.

### Cloud.gov

You can create an S3 service instance on cloud.gov and issue credentials for
partners to access it. See
[interacting with your S3 bucket](https://cloud.gov/docs/services/s3/#interacting-with-your-s3-bucket-from-outside-cloud-gov).

### Password-protected file

Follow the linked instructions to password-protect a:

- [PDF](https://support.apple.com/guide/preview/password-protect-a-pdf-prvw587dd90f/mac)
- [ZIP](https://osxdaily.com/2012/01/07/set-zip-password-mac-os-x/) (which can
  be a folder full of files)

  - [Information from GSA IT](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/email-with-gmail/how-to-create-fipscompliant-zip-files)

Send the encrypted file and password to the recipient separately, with the
latter ideally through something ephemeral like a phone call.
