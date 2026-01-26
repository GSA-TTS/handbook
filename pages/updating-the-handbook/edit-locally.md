---
title: Editing locally
sidebar:
  navigation: updating-the-handbook
  current: Editing locally
questions:
  - tts-handbook
---

The Handbook can be edited locally in any text editor, though [we do have some
recommendations]({% page "tools/text-editors" %}) based on compliance
requirements and approvals.

{% alert %}
This guide currently assumes a level of familiarity with git and the command line. It does not explain how to use those things and instead simply tells you to do it. If you are looking for a place to contribute to the Handbook, expanding this page could be a good one!
{% endalert %}

After you have cloned the Handbook repo to your local computer, open it in the
text editor of your choice. From there, you can make changes as described in the
[making your updates section]({% page
  "updating-the-handbook/#making-your-updates" %}). When you're satisfied with your
changes, commit them to a new branch and push that branch to GitHub. Then browse
to the [Handbook GitHub repo](https://github.com/GSA-TTS/handbook/pulls) and open a new
pull request from your branch.

## Running the Handbook

While you're making your changes, it can be helpful to see them as they will
appear in the browser as you work. There are two ways to do this.

### Docker

If you have Docker installed and don't want to think about installing all of the
Handbook's dependencies, you can simply run `docker compose up` from the
Handbook root directory. This will create a container, map your local directory
into that container, and make the container's port 8080 available to your
machine. The first time you run `docker compose up`, it may take a few minutes
before the site is ready, but once it is, you'll be able to view your local
instance of the Handbook at [http://localhost:8080](http://localhost:8080).

As you save your changes, the content in your web browser will update
automatically. Generally your browser will update within a few seconds, though
some changes can cause the entire site to be rebuilt which can take up to about
a minute.

### Node.js

If you have Node.js installed, you can run the Handbook directly. When running
this way, the automatic browser updates happen more quickly. However, you may
need administrative privileges on your computer in order to install Node.js in
the first place.

To begin, from the Handbook's root directory, run:

```
npm ci
npm start
```

The `npm ci` command may take a few minutes to run as it is downloading and
installing the Handbooks dependencies. Once that is finished, `npm start` will
build and begin serving the Handbook. You will be able to see it by opening your
browser to [http://localhost:8080](http://localhost:8080). When you save a file,
your browser will update automatically to reflect your changes. This usually
happens in 3-4 seconds, but some changes cause the entire site to be rebuild
which can take up to about a minute.
