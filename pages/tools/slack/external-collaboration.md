---
title: External collaboration through Slack
questions:
  - admins-slack
---

[_Back to Slack page_](../)

Collaboration with people outside of TTS falls into one of two categories:

- [Working with partners on Slack](#working-with-partners-on-slack)
- [The public](#collaborating-with-the-public-on-slack)

We use different setups for each.

## Working with partners on Slack

Partners may include:

- Partners at federal agencies whose projects are under an Interagency Agreement
  with TTS, or at state or local agencies whose projects are under an
  Intergovernmental Collaboration Act agreement with TTS
- Vendors _under contract_ (not just a Terms of Service) with TTS
- Vendors with GSA who are working on a project with TTS, for which we have a
  Memorandum of Understanding (MOU)

Note this does _not_ include:

- The general public, for which we have
  [dedicated channels](#collaborating-with-the-public-on-slack)
- Other feds we're not working with directly

Contractors' level of access will be determined by the Contracting Officer (CO).
By default, **contractors who are "embedded" in TTS (working on TTS projects
most or full-time) can be added as full members using their GSA emails. Other
collaborators should be added as single or multi-channel guests** as
appropriate. See [contractors]({% page "/contractors/" %}) for general
information.
[Request GSA guest access via ServiceNow](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=7205fbef1b276014b1f620eae54bcb49&sysparm_category=f9874e76db5003400dc9ff621f96190d).

TTS collaborators within GSA may be added as full Slack members. Examples might
include the Chief Information Officer or FAS Commissioner. If you'd like to add
someone to this category ask the TTS @tech-operations before making this request
in {% slack_channel "admins-slack" %}.

### Dedicated channels

You may want to invite partners, contractors, etc. to specific project channels
to foster collaboration and asynchronous communication with the team. Projects
often
[create specific channels](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel)
that end with `-partners`.

1. [Create a `<project>-partners` channel](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel)
   if an existing channel doesn't meet your needs.
1. Add partners to the channel through one of these methods:
   - Slack Connect (preferred; see below)
   - Individually, through a ["Slack platform changes" ServiceNow ticket](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=3891c4f31b6b6014b1f620eae54bcbc1&sysparm_category=f9874e76db5003400dc9ff621f96190d).

### Shared channels

There are two options for sharing channels with partners who use Slack.

- [**Multi-workspace channels**](https://slack.com/help/articles/115001399587-Create-multi-workspace-channels-on-Enterprise-Grid)
  can be used between
  [workspaces in the GSA Slack Enterprise Grid](https://gsa.enterprise.slack.com/).

- Use
  [**Slack Connect**](https://slack.com/help/articles/115004151203-Guide-to-sharing-channels-with-external-organizations)
  to share channels with partners outside of GSA. You will likely need to request approval for Slack Connect additions via a ["Slack platform changes" ServiceNow ticket](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=3891c4f31b6b6014b1f620eae54bcbc1&sysparm_category=f9874e76db5003400dc9ff621f96190d).

Slack Connect is preferred over adding partners as guests.

- It offloads user management to the partner
- The partners can use their existing Slack accounts
- The partner is able to retain the channel history
- The history shows up in searches of the partner's Slack workspace
- It saves TTS money

The contents of shared channels are treated the same as other channels. See
[rules](../getting-started/) and [records](../records/).

## Collaborating with the public on Slack

TTS has specific channels in Slack that the public can join. These channels end
with `-public`. (Note: In Slack's parlance, all channels in a workspace are
either `public`, allowing any full member to find/join, or `private`. However,
when we say "public channels" on this page, we mean channels open to all members
of the public.)

Friends with `.gov`/`.mil` email addresses who aren't collaborating on a project
can be invited into public channels. Request this through a ["Slack platform changes" ServiceNow ticket](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=3891c4f31b6b6014b1f620eae54bcbc1&sysparm_category=f9874e76db5003400dc9ff621f96190d).

Treat these public channels like you would a livestreamed event on GSA's YouTube
page or other type of public meeting open to guests. Materials and documents
that are not otherwise public should not be shared only in public channels.
Instead, they should be published on TTS websites and then linked to from the
public channels so that access to Slack isn't required to see the information.

Members of the public must also comply with GSA standards and the [TTS Code of
Conduct]({% page "/code-of-conduct" %}).

### Add a new public channel

Submit a ["Slack platform changes" ServiceNow ticket](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=3891c4f31b6b6014b1f620eae54bcbc1&sysparm_category=f9874e76db5003400dc9ff621f96190d)

## Archive a Slack channel

When a Slack channel is no longer needed (e.g., a partner project has ended),
the channel should be archived. For Slack Connect channels (indicated by a
double diamond icon next to the channel name), make a request in
{% slack_channel "admins-slack" %} to archive the channel. Channels that aren't
Slack Connect can be archived by any member of the channel. View
[instructions for archiving a Slack channel](https://slack.com/help/articles/213185307-Archive-or-delete-a-channel).

## Use of other Slack workspaces

You may be invited to other Slack workspaces operated by government entities, or
entities under contract to the government. You're allowed to join those
workspaces as necessary for your work. You should join those workspaces with
your **GSA email address**. If you're invited to Slack workspaces [in your
personal
capacity]({% page "/office-of-operations/fas-speaker-guide/#professional-vs-personal-capacity" %}),
you must join those workspaces with a personal email address.
