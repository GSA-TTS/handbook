---
title: Updating the Handbook
sidebar:
  navigation: updating-the-handbook
  current: Intro
questions:
  - tts-handbook
---

Everyone – inside and outside TTS – can submit contributions to the Handbook. If
there's something missing, a piece of information is outdated, or something is
broken, you're allowed and encouraged to submit a fix! This guide is meant to help you
get started and provide documentation for the Handbook's various components and
utilities that make editing easier.

{% alert %}
There is no dedicated staff for Handbook maintenance. Maintenance is done by TTS staff who are interested and have time to help.
{% endalert %}

### Disclaimers and cautions

Before you make your contribution, there are a few things to remember:

- This Handbook website and repository are public. Use links to internal Google Docs, Sheets, etc. for
  anything that shouldn't be publicly visible.
- We're careful about publishing
  [information collected during research]({% page "/research-guidelines" %})
  [learn more](https://docs.google.com/document/d/1Xp4LxbW6cx61rXrsnnfIPCz6cglovHzZeEjCcnpIeaM/edit)
  and ask {% slack_channel "g-research" "the research guild" %} for guidance
  first.
- Avoid "click here" links. Follow the
  [A11Y Project Anchor Link Patterns](https://a11yproject.com/patterns/#anchors-links).

There is also some information that should **not** be included in the Handbook:

- We receive training on this, but here are a few reminders about things we shouldn't
  include in the Handbook:

  - [Sensitive information]({% page "/sensitive-information" %})
  - Comments that can be easily interpreted as
    [endorsements](https://www.oge.gov/web/oge.nsf/Use%20of%20Government%20Position%20and%20Resources/17593AE8B3A597C685257E96006364E4?opendocument)
    (or other potential ethical issues)

  - Information that can easily go out of date and is already published
    somewhere else in a useful format. This includes:

    - People's email addresses and phone numbers, even if it is public information. We typically link to group/team email addresses or Slack channels. There is also a public-facing
      [GSA staff directory](https://www.gsa.gov/staff-directory) that you can link to.
    - Information that is already well-covered on GSA InSite - link there
      instead of reproducing it.
    - Specific TTS org chart info (such as lists of names of supervisors and
      facilitators).

## Choosing a development environment

The first choice you need to make is whether you want to update the Handbook
from within GitHub or if you want to download it to your local computer and
update it there. The one you choose is your "development environment." You are
not locked into an environment – you can choose whichever is more appropriate
for each update you want to make, switching back and forth as needed.

### GitHub

Using GitHub means you don't need to download or install anything, which is very
convenient. For small updates, such as changing some text on a single page,
working in GitHub is often easier and faster. Making changes directly in GitHub
becomes a little more difficult as you increase the number of pages that you are
working with.

Consider using GitHub as your development environment if your proposed changes
are fairly simple: adding a single new page or updating content on a small
number of existing pages. But if you are working across many pages, working in
GitHub may make it more difficult.

If you choose GitHub, you can check the [Editing in
GitHub]({% page "updating-the-handbook/edit-in-github/" %}) page for more
information about how to make your edits and submit them for review.

### Local

A local development environment requires that you have a [text
editor]({% page "tools/text-editors" %}) installed, have
[configured your GitHub account with an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh),
and configured your local `git` installation. These requirements are only
necessary the first time, so while they do introduce complexity, it is only a
one-time cost.

Working locally also allows you to build and run the Handbook on your own
computer so you can see your changes live in your web browser as you make them,
which is especially helpful for larger updates. However, this requires that you
either have Docker or Node.js installed and running, additional one-time
complexities. Installing those is beyond the scope of this guide for now.

Consider working locally if you are making extensive changes that are worth the
time and effort to install a text editor and configure your local `git`. For
more information about working locally, see the [editing
locally]({% page "updating-the-handbook/edit-locally/" %}) page.

## Making your updates

The Handbook is mostly authored in a markup language called Markdown. If you're
unfamiliar with Markdown, the
[Markdown Tutorial](https://www.markdowntutorial.com/) is a fun way to learn the
basics. If you already know Markdown and just want to brush up on the syntax,
the [CommonMark reference](https://commonmark.org/help/) is a big help.

{% alert %}
There is no single Markdown standard. It is a general set of practices with many different "flavors." Some Markdown behaviors that work in GitHub issues, pull requests, or wikis may not work on the Handbook. The Handbook uses a "flavor" called [CommonMark](https://spec.commonmark.org/0.30/) whereas GitHub uses [GitHub Flavored Markdown](https://github.github.com/gfm/).
{% endalert %}

Find the page you want to update (or create a new one in the `pages` directory)
and start writing! If you need help, feel free to reach out in
{% slack_channel "tts-handbook" %}. When you're happy with your changes, open a
pull request so someone else can review them and get them merged into the
Handbook.

The Handbook has a variety of utilities available to make updates easier and
help keep everything consistent across pages. There are two primary kinds of
utilities:

- [Front matter]({% page "updating-the-handbook/frontmatter" %}) - This is data
  that you can supply at the top of your page that can change or control how the
  page is displayed in a web browser.

- [Shortcodes]({% page "updating-the-handbook/shortcodes" %}) - These are small
  snippets that replace one kind of content with another. For example, the Slack
  link above was created with this shortcode:
  ```
  {% raw %}{% slack_channel "tts-handbook" %}{% endraw %}
  ```
- [Components]({% page "updating-the-handbook/components" %}) - These are larger
  pieces of UI that you can add to your page in a consistent way, including
  alerts, side navigation, or links to more information.

### Pull requests (PRs)

Each pull request should be reviewed by at least one other TTS staff member
before merging. Once a PR is approved, anyone can merge it (including the
original submitter).

If you make a pull request that's best reviewed by a specific person, tag or
assign it to that person. It can also help to ping them in Slack to ask for
review.

### CODEOWNERS

The TTS Handbook uses the GitHub
["code owners" feature](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners)
to automatically add content owners as a reviewer. This means that in most
cases, you as a contributor should not need to manually add anyone for a review.

If you suspect that the wrong team was added as a reviewer, feel free to open a
pull request to change the CODEOWNERS file, located at the top level of the
project.

### How to review and merge pull requests

Any TTS staff member can review a pull request. If it's not your area of
expertise, ask somebody who has expertise in that area (for instance, by
commenting to tag a person or sharing the PR in Slack). If the author of the
pull request added a specific person as a reviewer, hold off merging the pull
request until at least one specified reviewer has had a chance to review it.

A note to submitters: If you need multiple people to see your PR before it's
merged, please add a comment letting reviewers know!

If you're not sure, ask for a second opinion in
{% slack_channel "tts-handbook" %} first.

## Content and accessibility

The handbook aims to follow [GSA's Accessibility Program](https://www.gsa.gov/website-information/accessibility-statement)

## File/folder structure

New files should be created in the `pages` directory and in the sub-directory
that makes the most sense for your content. For example, a new page on an `topic` should go in the `pages/topic` directory.

Images that should appear in the Handbook should be placed in the `_img`
directory. You can create addition subdirectories and nest them however you need
within the `_img` directory. Use the [image
shortcode]({% page "updating-the-handbook/shortcodes/#images" %}) to ensure your
images are available on the web after publication.

If you need to include a file for visitors to download, those files should go in
the `downloads` directory. These may also be in subdirectories. Use the
[download
shortcode]({% page "updating-the-handbook/shortcodes/#downloadable-files" %}) to
ensure the files are published to the web.

## Public domain

This project is in the public domain within the United States, and copyright and
related rights in the work worldwide are waived through the
[CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By
submitting a pull request, you are agreeing to comply with this waiver of
copyright interest.
