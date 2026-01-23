---
title: Blogging Guide
keywords: blogging, guide
questions:
  - blog
  - outreach
redirect_from:
  - /blogging/
cSpell: ignore retroed
---

This guide helps TTS employees through the blogging process and assists them in
properly framing their post so that it’s concise, readable, and achieves its
goals. If you have any questions, ask them in {% slack_channel "blog" %} or by
email to [tts-outreach@gsa.gov](mailto:tts-outreach@gsa.gov).

Everyone at TTS is encouraged to contribute to our blogs. We value a diversity
of voices and positions. You don’t have to be a project lead, be in management,
or even be at TTS for a set amount of time to draft a post. If you’ve got an
idea that you think will help advance TTS’s mission, we’d love to hear it.

## Choosing a blog

TTS has a number of blogs that employees can publish content to. Normally folks will
publish to their team's blog. Depending on the content, however, it is possible
that you could publish to the blog of a team that isn't your own. These are the
TTS blogs:

- [challenge.gov blog](https://www.challenge.gov/blog/)
- [digital.gov blog](https://digital.gov/posts/)
- [FedRAMP blog](https://www.fedramp.gov/blog/)
- [GSA blog](https://www.gsa.gov/blog/)
- [USAGov blog](https://blog.usa.gov/)

The tips in this guide are broadly applicable, and the
[approval process](https://docs.google.com/document/d/1drX3O-qvkxdptS4d8W4TEuRpx3sUHaasENzvT-clDOc/edit)
is essentially the same -- the only difference is that each blog has its own
approver.

## Blog mission brief

The TTS blogs are places where we share what we’ve learned, what we’ve made, and
what we do in an accessible, public way. We work in the open and share
information that makes our work understandable and usable. We write frankly
about the challenges we encounter and detail the lessons we learn when making
tough decisions. We hope to lead by example, showing that government agencies
can be straightforward and friendly in their communication.

In sum, our goals are:

- To support and highlight the operational excellence our employees’ daily work
  provides to GSA, the federal government, and the public
- To strengthen our partnership with other federal agencies
- To strengthen our relationship with the public and people who might want to
  join TTS
- To actively promote innovation in government, wherever it’s happening

### Execution

The [TTS Outreach & Stakeholder Engagement Team]({{base.baseurl}}/office-of-operations/outreach/) determines editorial
strategy; that team also oversees the drafting and editing processes.

The blogs are further supported by volunteer writers across TTS/GSA. Team
contributions (idea generation, drafting, giving interviews) are key to its
success. We accept pitches for blog ideas from anyone in TTS.

### Risks and concerns

We assess every post to ensure it adheres to our mission, as outlined above.
Being this open about all aspects of our work is atypical for a government
agency, and, accordingly, we expect to proactively share our reasoning for why
we make certain editorial decisions. We acknowledge the need to show strategy
and data that supports our ambition.

## Blog management

We use a combination of a
[private GitHub repo](https://github.com/18f/blog-drafts), a
[private kanban board](https://github.com/18F/blog-drafts/projects/1), and an
[editorial calendar](https://calendar.google.com/calendar/embed?src=gsa.gov_pkkbf53u1m6is9gi76v1l8i5j8%40group.calendar.google.com&ctz=America/New_York)
to manage the blog editing and approval process. Blog posts are drafted in
Google Docs, editing is managed in GitHub, the process is tracked with the
kanban board, and posts are scheduled on the calendar. We discuss all of this in
the #blog Slack channel.

Head over to the
[blog-drafts README](https://github.com/18F/blog-drafts/blob/master/README.md)
for detailed instructions on how to get your blog post published, correctly fill
out blog post metadata, and rules for tagging.

## Writing a great post

### Keep it user centered

Blog posts should offer something to the reader, whether that’s a new tool for
them to use, a guide they can use to improve their own work, or educational
information about a complicated topic or process. You should begin with the
thing your readers should take away from your post, and why it matters to them.

Sometimes the process of building something or tackling a particularly thorny
challenge is what makes a post worth writing, but those posts should still be
framed around offering techniques to your readers. Spending too much time saying
a problem was difficult and that we solved it isn’t helpful to the reader unless
we also offer a solution so they can avoid this problem in their own work.

### If it feels like a marathon, make it a series

Our mission is broad, but our strategy is small steps. This applies to how we
build products and how we blog. No single post is going to cover the breadth of
a topic or completely convince an agency to adopt our practices. **The goal of a
blog post should be to communicate one idea clearly, and make it short and
readable enough for your audience to read the whole thing**. It’s likely that as
you're writing a post, all kinds of details and new ideas will pop into your
head. Consider breaking up your post into a series that will bring the reader
along to learn a new skill or gain a deep understanding of how a product was
built.

### Write a user story to determine your audience

It’s crucial to decide on your target audience before you start drafting a blog
post. “General public” or “the federal government” is too broad of an audience
to be useful. Clearly defining your audience will help you determine length,
technical detail, tone, how much background you need to include, and what ask
you will include at the end. You can help define the audience and goal of your
post by creating a [user story](https://en.wikipedia.org/wiki/User_story).

For this type of user story, you can use this simple format:

> As a _type of audience_, I want _to learn something_, so that _some benefit is
> had_.

If you’re writing about a new service that TTS is offering, your user story
might be:

> “As a _Chief Information Officer_, I want _to learn about the specifics of
> TTS’s new service_, so that _I can see if it will help me modernize my
> agency’s technology_.”

This narrow focus will help you decide a number of things. Because your audience
is federal technologists, you can assume a certain familiarity with government
processes and terms. This allows you to go a little deeper into government
procedure and some of the nitty-gritty of how this product works. You might also
choose to use a slightly more formal tone for this post since this could be the
opening message in a businesses conversation.

If you’re writing about a new little tool you built while working on a larger
project, your user story might be:

> “As a _member of the open source community_, I want _to know what this tool
> does_, so that _I can contribute back to the code_.”

Using this framework for your post, you can be more technical, more enthusiastic
about your small solution, and use a more informal tone appropriate for the open
source community. You would also be sure to include links for readers who want
to dive into the code and get involved.

## Outline templates

You’ll likely have half a dozen ideas for blog posts for every project you work
on. Creating an outline is a great way to move from a jumble of ideas into
something you can get down into text.

Below are a number of outlines for the types of blog posts we typically write at
TTS. Give it a read, and see if any of them match up with what you’d like to
communicate. The goal of these templates is to help you refine your idea, not to
fit your writing into a rigid format. Feel free to modify the structure and
change the section headings to be specific to your writing. As you’ll see, many
of the linked examples only loosely follow these formats.

### Writing about products

#### Grand idea project launch

- What we launched
- The problem we addressed
  - Include brief background information on partner
- How we solved the problem
- One interesting fact about the development process
  - Or, how this project fits into larger TTS values
- What’s next
- Call to action

#### One detail product launch

- What we launched
  - But I want to focus on this one detail
- Explanation of detail and why it’s interesting
- Connection to larger TTS values or methods
- Summary of other things people can find in the product
- Call to action to explore product or otherwise engage

#### Product update

- What’s the new feature
- Link and summary of previous work
- Deeper explanation of the feature
- Explanation of either an interesting technical detail of the feature or an
  important step in the development of the feature
- Connect the feature back to the central mission of the partner or product
- Next steps for the team

#### One thing I learned

- Brief explanation of your project and your work on that project
- Introduction of interesting thing you learned
- Further explanation of what you learned
- The impact this thing had on your work
- How this is relevant to other projects/teams
- Point to documentation or artifact if it exists
- Question or call to action

#### Retrospective

- Explanation of agile retrospectives and why this was a notable one
- Background on product/team/process that was being retroed
- What we did in the retro
- What we learned
- How we’ve used that to change something
- Next steps

#### Technical explanation

- Explanation of the product or feature this technical explanation applies to
- Your goal in developing this technical fix
- What you did
- Why you did it
- How this has positively impacted your project
- Connection to TTS value
- How this can be reused outside your project
- Call to reuse/adapt

### Writing about non-TTS work

#### Highlight of federal innovation separate from TTS work

- Brief introduction on the work
  - If TTS has worked with this agency on a separate project, mention our
    previous work
- Explanation of the problem they were trying to solve
- Explanation of how they solved it
- Connection to how TTS uses similar techniques or developed similar projects
- Concluding paragraph on general trend/innovation in government

#### Highlight of innovative work elsewhere in TTS or GSA

- Explanation of what happened
- Why this is great and connects to TTS principles or projects
- Further explanation of what happened
- Hopes for positive outcome from this work
- Call to action or link to additional work by TTS/GSA

#### Outside adaptation or use of an TTS product

- Who, what, when of someone reusing or adapting an TTS product
- Original reason for this product. How it’s being reused/adapted
- Quote from outside organization
- Connection to TTS value or principle
- Excitement about adoption or opportunities
- Link to additional blog posts on reuse (even if about other products)

### Writing about ideas and policies

#### How to/Guide

- What this guide will teach you
- Who this guide is useful for
- Summary of guide content
  - Multiple headings, paragraphs with bolded intros, or a bulleted list are
    best
  - Concise explanations with code samples if applicable
  - Downloadable artifacts if applicable
- Why we think this type of information is useful
  - And how it’s improved our projects
- Call to action and links to additional resources

#### Culture or principle explanation

- Brief explanation of cultural value and why it’s good
- The cultural idea or practice you want to talk about
- How this came about
- How we do this in practice
- The positive effects we’ve seen
- Next steps or ways we want to refine this practice
- Question for readers

#### Announcement of large changes or new policies

- Announcement of new change
- 2 additional important details
- How this change fits into larger TTS principles or goals
- Additional small or technical details
- Thanks, connection back to policy and moving forward

## Authorship

The authors listed on a blog post should be only the people who have actively
contributed significant portions of text to the blog post. Generally, posts
should only be written by one or two people. Limiting the number of people who
write a post makes it feel more personal and less written by committee, allows
for a stronger voice in the writing, and helps speed up the editing and approval
process.

### Multiple authors

Some posts may have significant amounts of text written by more than two people,
in which case every contributor should be listed as an author.

Team members who contributed editing, criticism, quotes, images, or small
amounts of text should not be included as authors. You should also not include
people as authors if they worked on a project but did not write the post. If
there are people who contributed to a project or who helped make a blog post a
reality (for example, by helping with idea generation, design, or editing), you
can thank them with an italicized section at the bottom of the post.

If a post has multiple authors, then it should only use plural pronouns (we,
our). Team members who are listed as authors should not be referred to by name
or quoted in the text of the post since the post is already being attributed to
them.

### Guest authors

The TTS blogs welcome guest authors from other government agencies. They're
especially good for highlighting the innovative work happening around the
government, getting a different perspective on TTS projects, and for showing how
agencies are adapting our tools for their own use. Our blog team is happy to
work with guest authors to develop an idea and edit their writing. We'll work to
support their tone and voice. Posts from guest authors will have to go through the communications approval process at their agency as well as at TTS and GSA.

### No authors

On occasion, it can be useful to have posts written by TTS as an organization
rather than as an individual. We may use this for posts that explain fundamental
concepts of our business or culture where many team members contributed writing
and editing. Posts with TTS as an author have a more formal and authoritative
tone and are about statements of policy or fact rather than opinions.
