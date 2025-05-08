---
title: Editing in GitHub
sidebar:
  navigation: updating-the-handbook
  current: Editing in GitHub
questions:
  - tts-handbook
---

If you're not familiar with how to edit Markdown through GitHub, start with our
[Intro to GitHub]({% page "/intro-to-github/" %}) and
[digital.gov's Using GitHub for Content Creation](https://digital.gov/resources/an-introduction-github/).

- Click the `Edit this page` link at the very bottom of whichever page you want
  to edit. This will bring you to GitHub with the page you selected already
  loaded into an editor window. This is a plaintext editor.
- Make your changes. For more information about how to author Handbook content,
  refer back to the [Making your updates section]({% page
  "updating-the-handbook/#making-your-updates" %}) of the intro page.
- At the bottom of the page, you will have an opportunity to provide some text
  describing this edit. This will be used as part of the default description
  text when you open your pull request (PR) in the next step. You may leave it
  blank if you wish as you will have a chance to edit the PR text directly.
- Make sure `Create a new branch for this commit and start a pull request` is
  selected. Check the automatically-generated branch name in the text box below
  that selection – you will need it later if you want to edit multiple files as
  part of the same pull request – and click the `Propose changes` button.
- On the pull request page, give your PR a short title that helps people quickly
  identify what it does. Feel free to provide more information in the
  description field.
- Click the `Create pull request` button. This will automatically start a series
  of tests to ensure everything is still working as expected. While those run,
  you can assign someone to review your pull request using the "Reviewers"
  section in the right sidebar. Most PRs will be automatically assigned a
  reviewer, but you can add your own. See the [pull
  requests]({% page "updating-the-handbook/#pull-requests-prs" %}) and
  [CODEOWNERS]({% page "updating-the-handbook/#codeowners" %}) sections of the
  intro for more information.

If you need to edit multiple files as part of a single pull request, it is best
to use a desktop file editor. Doing it directly in GitHub is a bit more
complicated.

- After editing your first file as described above, navigate to the
  [list of branches](https://github.com/GSA-TTS/handbook/branches), find the one you
  created above, and click it. This will display a list of all files in the
  Handbook, but as they exist on your branch.
- Browse the file tree to find the ones you want to edit. Click a filename to
  open a file viewer. From here, you can edit the file by clicking the pencil
  icon above the content.
- When you finish editing a file, make sure
  `Commit directly to the <your branch> branch` is selected and then click the
  `Commit changes` button. This will cause your new edits to be added to the
  pull request you opened previously.
- You can continue to edit files from your branch and they will be added to your
  pull request.
