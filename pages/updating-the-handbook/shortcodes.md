---
title: Shortcodes
sidebar:
  navigation: updating-the-handbook
  current: Shortcodes
questions:
  - tts-handbook
---

Shortcodes are utilities that help simplify adding pieces to your page and help
us keep them consistent across all pages. Because shortcodes are processed
separately from Markdown, they are only available in pages that begin with
[front matter]({% page "updating-the-handbook/frontmatter" %}).

## Images

To add an image to your Handbook page, first put it somewhere in the `_img`
directory. Then, you can reference that image using a shortcode that will copy
it into the correct place in the output and provide a URL to that image. There
are two shortcodes, depending on your needs. Most commonly, you'll use the
`image` shortcode:

```
{% raw %}{% image "_img/ocelot.png"
  "ocelot" %}{% endraw %}
```

The first part after `image` is the path to the image and the second part is the
alt text. The example above will result in this image being displayed:

{% image "_img/ocelot.png" "alt text" %}

<figcaption>Image &copy; <a href="https://commons.wikimedia.org/wiki/File:Ocelotl-Ocelote-Ocelot.png">Proyecto Hunab Ku</a>. Shared under Creative Commons Attribution-ShareAlike 4.0.</figcaption>

If you need to apply a CSS class to your image for styling purposes, you can
instead use the `image_with_class` shortcode, like so:

```
{% raw %}{% image_with_class
  "_img/ocelot.png"
  "usa-input--error"
  "alt text"
%}{% endraw %}
```

Will result in this image being displayed:

{% image_with_class "_img/ocelot.png" "usa-input--error" "an ocelot" %}

{% alert "Don't forget the alt text!", "warning" %}
If your image adds context for sighted users, you should be sure to also include alt text that can be read aloud by screen readers. Alt text is not necessary if your image is purely decorative, such as a logo.
{% endalert %}

---

## Linking to other Handbook pages

Because the Handbook can be deployed in multiple environments, we need to take
care with how we link between pages. Thankfully there's a shortcode to help! To
link to another page in the Handbook, simply use the `page` shortcode with the
path to the other page. For example:

```
{% raw %}{% page "updating-the-handbook/components" %}{% endraw %}
```

This shortcode will produce a URL that is suitable for use in links, like so:

```
{% raw %}[Handbook components]
({% page "updating-the-handbook/components" %}){% endraw %}
```

Will produce this correct link: [Handbook
components]({% page "updating-the-handbook/components" %})

---

## Linking to Slack channels

Rather than hunting down the exact link to a Slack channel, the `slack_channel`
shortcode enables you to quickly create a link to it based solely on the channel
name. By default, the link is rendered with the channel name, but you can
optionally set the link text to anything you want.

```
{% raw %}- {% slack_channel "tts-handbook" %}
- {% slack_channel
    "tts-handbook"
    "TTS Handbook community" %}{% endraw %}
```

Produces this:

- {% slack_channel "tts-handbook" %}
- {% slack_channel "tts-handbook" "TTS Handbook community" %}

---

## Alert

The Handbook alert shortcode is a convenience wrapper around the
[USWDS Alert component](https://designsystem.digital.gov/components/alert/). It takes ordered arguments:

0. `heading` - The alert heading or title. If omitted, no heading is shown.
1. `level` - the alert level. Allowed values are `info`, `warning`, `error`,
   `success`, or `info`. If not provided, defaults to `info`.
2. `content` - the body of the alert. If omitted, no body is shown.
3. `slim` - provide if using the slim version of the alert banner.
4. `no-icon` - provide if omitting the icon.

**Example**:

```
{% raw %}{% alert %}
  A basic alert.
{% endalert %}

{% alert "Heads up!" %}
  This is the body of the info alert message, and the heading is above.
{% endalert %}

{% alert "An error has occurred." "error" "slim" "no-icon" %}
  This is the body of the error alert message.
{% endalert %}{% endraw %}
```

Produces this:

{% alert %}
A basic alert.
{% endalert %}

{% alert "Heads up!" %}
This is the body of the info alert message, and the heading is above.
{% endalert %}

{% alert "An error has occurred." "error" "slim" "no-icon" %}
This is the body of the error alert message.
{% endalert %}

---

## USWDS Icons

The [US Web Design System](https://designsystem.digital.gov/) includes
[a set of icons](https://designsystem.digital.gov/components/icon/) that are
available for use in the Handbook. The `uswds_icon` shortcode makes it nice and
easy to get them:

```
{% raw %}{% uswds_icon "campaign" %}{% endraw %}
```

Produces the following icon:

{% uswds_icon "campaign" %}

{% alert "Be careful with icons" %}
Do not use icons in place of textual content. These icons do not come with alt text and are not accessible. Use them as decorative elements or as additional emphasis on the text.
{% endalert %}

---

## Downloadable files

To include a file for download in your Handbook page, you must use the `download` shortcode.

#### Arguments

- **file path**: The location of your file in the Handbook source code, relative to the source code base directory. For convenience, there is already a `downloads` directory you can use.

**Returns** the URL to a downloadable file.

#### Example:

If you have a file called `my-form.pdf` in the `downloads` directory, you need to use this shortcode to make the file available for download:

```
{% raw %}[download link]
({% download
  "downloads/my-form.pdf"
%}){% endraw %}
```

Produces a link like this:

[download link]({% download "downloads/my-form.pdf" %})

---

## Other internal links

Sometimes you need to create links that may be elsewhere in the Handbook or
possibly external (for example, if you are iterating over a list of links
provided in a data file). In those cases, use the `link` shortcode. This
shortcode does nothing if the provided link begins with http or https, but for
other cases, it modifies the link based on the Handbook's deployment
environment. For example:

```
{% raw %}- [link 1]({% link "about-us/code-of-conduct" %})
- [link 2]({% link "https://www.gsa.gov" %}){% endraw %}
```

Produces:

- [link 1]({% link "about-us/code-of-conduct" %})
- [link 2]({% link "https://www.gsa.gov" %})

---

## Identifying the current page

The Handbook has a CSS class called `usa-current` that can be used to identify
an element as being associated with the current page. To simplify figuring out
which element is "current," you can use the `usa-current` shortcode. This is
primarily useful in navigation links where you are iterating over a list of URLs
and want to know which one corresponds to the current page. The short code
returns either the text `usa-current` if the URL is current or empty text
otherwise, making it suitable to use as a `class` attribute.

```
{% raw %}<a href="my-page" class="
  {% usa-current list-item.path page.inputPath %}
">Some navigation link</a>{% endraw %}
```

In this example, `list-item` is presumably a single item from a list and it has
a `path` property. `page` is a variable provided by 11ty for each page, and
`inputPath` is that page's location in the filesystem.
