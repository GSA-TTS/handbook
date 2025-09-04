---
title: Intro to GitHub
keywords: github
redirect_from:
  - /intro-to-github/
---

_This section provides a brief overview of GitHub. There are different sections
provided for different functions in GitHub. Use the sections that are relevant
to the work you will be doing._

[GitHub](https://github.com) is a publicly accessible place to share and
collaborate on (primarily) open source software projects. GitHub interacts with
a program on your computer called Git that tracks every change ever made in a
software project.

[Git and GitHub]({% page "/github/" %}) are the standard tools for revision
control at TTS. We use GitHub to author blog posts, manage documentation, and
comment on one another's work. In fact, it's very likely you'll interact with
GitHub in _some_ way, even if you're not writing code.

We recommend you get familiar with the basics. If you're new to GitHub and feel
confused at first, that's normal. Try a few guides, review our documentation,
and ask your teammates for help.

The remainder of this post will help you familiarize yourself with GitHub, get
squared away with creating your GitHub account, setting up some basic stuff, and
will show you some of the ways you might use GitHub, even if it's not committing
code.

### Introduction

- [GitHub]({% page "/github/" %}) - A detailed guide on how we use GitHub at
  TTS.
- [GitHub for Beginners](https://www.youtube.com/watch?v=gLozuPQ34EQ) -
  Intended for beginners, this video class is led by Will Slack. Slides are
  available [here](https://digital.gov/resources/an-introduction-github#how-do-i-use-github) and course
  materials are
  [here](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit).
- [“Git what?” Extolling GitHub’s virtues to non-coders](https://medium.com/nyc-planning-digital/git-what-extolling-githubs-virtues-to-non-coders-6cc11f1a5fd2) -
  In this article, learn from a high level view how GitHub works. It’s a great
  article for those of you worried about how complicated GitHub can be and
  explains what it’s like for non-coders.
- [GitHub for Non-Coders](https://brennan.io/2015/08/07/github-noncoders/) -
  This blog branches off from the previous article. It goes into more detail
  about how GitHub can be used by non-coders. Share this with any team members
  who are hesitant about how GitHub can be used by them.
- GitHub has a handy document that explains the typical
  [GitHub Workflow](https://guides.github.com/introduction/flow/).

### Set up your account

Follow the [instructions]({% page "/github/" %})

### Basics

The following resources will help you with learning GitHub. They are organized
by different categories. Read the ones that will be most useful to you.

### 1. Repository Basics

- **Repo** is short for repository, or a project on GitHub. Anybody at TTS can
  create repos in the GSA-TTS organization and you should _always_ create new
  projects as GSA-TTS, not as yourself. You can create new repos in GitHub by
  clicking the + next to your profile picture. Then, choose New Repository and
  change the owner to GSA-TTS.
- The **license** on every repo must be Creative Commons 0, or CC0. That's
  shorthand for Public Domain. TTS is not only committed to working in the
  public domain by our own policies, but is also committed
  [by law](https://www.usa.gov/government-works). (Though we are allowed to by
  law, we don't trademark our logo.) There are a few exceptions to that rule, so
  check with {% slack_channel "admins-github" %} and
  {% slack_channel "wg-opensource" %} before putting any license _other_ than
  CC0 on your project. For more details about licensing, see our
  [open source policy](https://github.com/18F/open-source-policy).

Once you're a member of the GSA-TTS organization, you'll have access to many of our
repos. You'll also have at least read-only access to a few of our private
repositories. Check with your team on how to interact with a project. In some
cases, the repos themselves have information in a `CONTRIBUTING.md` file for
guidance.

Repositories are where everything is stored in GitHub. Understanding what a
repository is will help you understand where your information is stored in
GitHub and who can access it.
[GitHub Docs - About repositories](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-repositories)
starts you out on understanding repositories.

### 2. Project Management

Developer, designer, editor, manager: Whatever your role is, you’ll want to get
used to filing issues on GitHub. Issues are a common way of submitting feedback
on projects at GSA-TTS. For example, if you want to write a blog post, you’ll be
asked to submit an issue to the blog repo. If filing an issue seems more
difficult for some reason, head to Slack. Or vice versa.

GitHub can be used for project management purposes. Each issue created will show
up on the project board and can be managed by the team.
[GitHub Docs - About project boards](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-project-boards)
explains how to set up a project board using a Kanban template in GitHub.

If you’re trying to learn how to become an expert in issues, this article,
[Mastering Issues](https://guides.github.com/features/issues/), is a great place
to start. It’s a short read with all of the basics about issues.

### 3. Web-based Editing

[Digital.gov: An Introduction to GitHub](https://digital.gov/resources/an-introduction-github/)
is a video that includes a lot of the GitHub basics you could want. It’s about a
30 minute video that shows you how to manage and publish website content. **This
is particularly useful if you are contributing to
[cloud.gov Pages](https://cloud.gov/pages/) sites.**

Pull requests are important for editing content and making changes in GitHub.
[Github Docs - About pull requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
explains what a pull request is and how it works. Make sure you are making a
pull request from a
[branch](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)
and not directly in `master` or `main`.

[Introduction to GitHub for Newcomers](https://www.youtube.com/watch?v=iv8rSLsi1xo&pp=ygUdaW50cm8gdG8gZ2l0aHViIGZvciBuZXcgdXNlcnM%3D)
is a longer video that will teach you how to file issues and issue pull
requests.

A fork is a copy of the main project that is fully separate from GSA-TTS’s. You
might be asked to fork a repo and work off your own copy, or you might be asked
to commit directly to your team’s original repo. This is the kind of thing you
should ask your teammates about — don’t make assumptions!

There are a few exceptions to this, but generally speaking, you will submit any
changes to a project through a pull request. A pull request, or PR, is a way of
saying “here are some changes I’d like to contribute “ and letting the repo’s
owner decide whether to accept (or merge) them or give feedback. Sometimes your
pull request will go from your fork to the main project, sometimes from a
branch. Again, make sure you understand your team’s Git workflow. On [Handbook](https://github.com/gsa-tts/handbook),
nobody forks and everybody works off of branches; we submit pull requests to the
`main` branch.

A few clarifying definitions:

- A **fork** is a copy of the main project that is fully separate from GSA-TTS's.
  You might be asked to fork a repo and work off your own copy, or you might be
  asked to commit directly to your team's original repo. This is the kind of
  thing you should ask your teammates about — don't make assumptions!
- There are a few exceptions to this, but generally speaking, you will submit
  any changes to a project through a pull request. A **pull request,** or
  **PR,** is a way of saying "here are some changes I'd like to contribute " and
  letting the repo's owner decide whether to accept (or merge) them or give
  feedback. Sometimes your pull request will go from your fork to the main
  project, sometimes from a _branch._ Again, make sure you understand your
  team's Git workflow. On [Handbook](https://github.com/gsa-tts/handbook), nobody forks and everybody works off
  of branches; we submit pull requests to the `main` branch.

### 4. Mastering Markdown

Markdown is how you will format and edit content in GitHub.
[Github Guides - Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
will teach you the basics of markdown. Look for the eye icon and text that says
“Preview changes” and you’ll be able to see what the markdown will look like
once it is displayed. If you notice that your text is not converting to the
styles, go back to the file and make sure it ends with the .md file extension.

### 5. Practice in GitHub

When you’re ready to start practicing with GitHub, the
[TTS Handbook repository](https://github.com/GSA-TTS/handbook) is a good place to
start. If you see something in the Handbook that is out of date or there is at
typo that needs to be fixed, you can create a pull request and make the changes.
At least one review is required for it to be merged into the Handbook, so
someone will check your work. If you need help, you can ask in the
{% slack_channel "tts-handbook" %} Slack channel and check out our guidance on
[updating the Handbook]({% page "updating-the-handbook" %}).

### 6. Working with GitHub

If you're working with an agency, you'll need to find ways to collaborate with
them on the project you're tasked with. Typically, the way we give outside
agencies and contractors access to GitHub repos is by making those repositories
public. Once they're public, anybody can access them; we just need to add people
as a collaborators. {% slack_channel "admins-github" %} can help you with that.

You can use GitHub for almost anything, but consider the resources available to
agency partners or other stakeholders before deciding to use it. Are your agency
partners used to using GitHub? Will they need to create accounts and jump
through hoops? Can they even access it from their agency computers? These are
the kinds of things we consider when deciding if GitHub is the right thing to
use.

TTS sometimes adds contractors and agency partners to the GSA-TTS organization on
GitHub. We sometimes use forks to collaborate with contractors. Sometimes we do
both. Again, check with your team on how to do this.

Most projects/repositories have a `CONTRIBUTING.md` file in their root directory
that explains how the team invites people to contribute to the project. They
might prefer chats over pull requests, for example.

Another pro tip: Search the existing issues before you add one. It may make more
sense to comment on that issue rather than create a new one.

To submit an issue, Log in, find the appropriate repo on GitHub, and click the
Issues tab in the right column. Then, click the New Issue button. Your issue
should have a title and explainer text. You'll probably know what to put there,
but teams sometimes have guidance on how to format issues or things to include.

Final pro tip: If your project wants issues formatted in a specific way, you can add an [issue template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) file.

### 7. Transferring a repository

Often during the course of working with and transitioning projects to partners,
an `GSA-TTS`-owned GitHub repository will need to be transferred to the ownership of
the partner. A "Transfer" is the recommended approach since it will include
Issues, Pull Requests, and other GitHub metadata and history that won't be
captured by just cloning the `git` repository which only contains the code.

#### Transferring to another organization on GitHub.com

This is a simple process that can be initiated in the GitHub user interface, but
requires a user with `ownership` permissions to the GitHub repository in
question (a higher level of access than `admin`). For help transferring a
repository, please send a message to {% slack_channel "admins-github" %}. More
details can be found on
[Github](https://help.github.com/en/articles/transferring-a-repository).

#### Transferring to GitHub Enterprise

Unfortunately, transferring repositories from GitHub.com to GitHub Enterprise
cannot be done via the GitHub user interface and requires a process that relies
on the GitHub API. Access to the migration
[API](https://developer.github.com/v3/migrations/orgs/) will require `ownership`
permissions to the repository in question on both sides of the transfer. Please
coordinate with {% slack_channel "admins-github" %} and partner administrators
to facilitate this type of transfer. See
[Github](https://help.github.com/enterprise/2.2/admin/articles/moving-a-repository-from-github-com-to-github-enterprise)
for more details.
