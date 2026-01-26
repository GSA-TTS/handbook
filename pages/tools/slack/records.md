---
title: Slack records
questions:
  - admins-slack
---

[_Back to Slack page_](../)

All Slack messages are potentially [records]({% page "/records-management/" %}),
and are subject to FOIA. Therefore, **assume everything you share/do in Slack
will be made public, and attributed back to you**. Treat Slack as a public forum
— you have _no_ privacy. Don't say something on Slack that you wouldn't feel
comfortable appearing on the news. This includes:

- File uploads to Slack
- Any audio or video transmitted using a
  [Slack Call](https://slack.com/help/articles/115003498363-Slack-calls--the-basics)
- Channel names
- Custom emoji
- [Emoji reactions](https://slack.com/help/articles/206870317-Use-emoji-reactions)

## Records policy

Per the mandatory
[General Records Schedule 3.1](https://www.archives.gov/records-mgmt/memos/ac33-2014.html)
issued by the National Archives and Records Administration (NARA), everything in
Slack channels and groups is considered at minimum a temporary record.

To ensure compliance with the possibility that we might create permanent or
long-lived records in Slack, the records retention policy is set to **retain all
messages forever AND also retain edit and deletion logs for all messages**.
Users are prohibited from deleting messages. Do not abuse the `edit` command in
Slack to effectively delete your message by replacing it with null or symbolic
content. Edits for clarity or typos are fine. If any bot or integration ever
posts something inappropriate, please call for a clean-up in
{% slack_channel "admins-slack" %} using `@slackadmin`.

This policy applies to all types of Slack communications: public channels,
private groups, even direct messages. **Nothing is private.** GSA IT uses an
[eDiscovery](https://en.wikipedia.org/wiki/Electronic_discovery) tool with
[Slack's Discovery APIs](https://slack.com/help/articles/360002079527-A-guide-to-Slacks-Discovery-APIs)
to pull and filter data. There is no regular monitoring of these messages, but
they have been reviewed in the past. Various legal actions (for example, a
Freedom of Information Act (FOIA) request) or security operations approved by
the TTS Tech Operations Director have required others to view the exports.

When Slack or other records are released under FOIA, GSA will disclose employee
names unless disclosure would clearly violate the employee’s personal privacy.
This would include situations where the agency has a concrete basis to believe
that disclosure will result in harassment of the employee. GSA will redact
personal information like home address and emergency contact information.

For more information, please consult
[GSA Order 2231.1](https://www.gsa.gov/reference/gsa-privacy-program/privacy-instructional-letters-and-directives).

## Exporting channel contents

There is not an easy way to export the contents of a single channel, for
partners or otherwise. If you really want, you can:

1. Open the Slack channel in Chrome
1. [Take a screenshot](https://zapier.com/blog/full-page-screenshots-in-chrome/)
1. Scroll up
1. Repeat

These, of course, will be images, so they unfortunately won't be searchable.

If you'd like the text to be searchable

1. Open up Google Keep
1. Insert the image
1. Click on the 3 stacked dots
1. Select "Grab Image text"
