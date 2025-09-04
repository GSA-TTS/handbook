---
title: Slack integrations
questions:
  - admins-slack
cSpell: ignore coffeemate
---

[_Back to Slack page_](../)

We have a few different Slack Apps and bots you'll see in Slack:

- [Charlie](https://gsa-tts.slack.com/app_redirect?app=A01NPS5DRND): our
  [Slack app](https://api.slack.com/). Knows all kinds of tricks! Check out
  [its repo on GitHub](https://github.com/18F/charlie) to learn more.
- [coffeemate](https://gsa-tts.slack.com/app_redirect?app=A01NPS5DRND): send a
  message with `coffee me` in a public channel or direct message
  [@Charlie](https://gsa-tts.slack.com/app_redirect?app=A01NPS5DRND) with
  `coffee me` to set up a virtual coffee/tea with a random coworker.
- [Slackbot](https://get.slack.help/hc/en-us/articles/202026038-Slackbot-your-assistant-notepad-programmable-bot):
  We automate responses to frequently asked questions with a Slackbot. You can
  [update or customize responses](https://gsa-tts.slack.com/customize/slackbot). **Do not
  include private or sensitive information in Slackbot automatic responses.**
  
Learn more about some of our unique channel customizations and auto-responses in
the
[Slack @ TTS](https://docs.google.com/document/d/1Hm42cg61S7FPhaLrRIJxl-LXQCcwGvJTKX_wG0Jz4aU/edit#heading=h.4l9k8pqdjzh1)
guide.

If you're interested in learning more about the bots, or perhaps contributing to
them, pop into {% slack_channel "bots" %}.

### New integrations

You can add new "configurations" of
[pre-approved integrations](https://gsa-tts.slack.com/apps/manage) to Slack, for
things like posting Trello or GitHub notifications to a Slack channel. For
getting notifications into Slack with a custom integration, you can
[create a new App for Incoming Webhooks](https://api.slack.com/messaging/webhooks),
which will be approved. For any new integration types, please follow the process
below.

**[Integration request form](https://docs.google.com/forms/d/e/1FAIpQLSfo6M9aFT_UvUng9pl-Tti9RsHedqXfQ773btIdxoVxwEuoAg/viewform?gxids=7628)**

Note this is only necessary for new bots or _types_ of integrations — approval
is not needed for new “configurations” of a previously-approved App. The form
should be filled out again if the nature of the connection changes, e.g. a
webhook connection changes to using OAuth.

New integrations being built/hosted by GSA should be developed against the
[test Slack](https://gsa-tts-testing.slack.com/)—ask in #admins-slack for
access.

New integrations/bots need approval from the following:

- Security Engineering (ISE)
- OCTO
- GSA IT Slack admins

Those that are approved will be approved across the GSA Slack Enterprise Grid.
Considerations:

- Read access from Slack (e.g. RSS) will almost definitely be approved.
- One-way integrations into Slack (e.g. via webhooks) are almost always fine.
- Integrations from higher-risk systems into Slack will generally not be
  approved.
