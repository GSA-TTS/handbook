/*
https://designsystem.digital.gov/components/alert/

heading: text of the alert heading
level: the severity of the alert (default info)
slim: set if slim style
no_icon: set if omitting icon

Example:

{% alert "Heads up!" %}
  This is the body of the info alert message.
{% endalert %}

{% alert "An error has occurred." "error" "slim" "no-icon" %}
  This is the body of the info alert message.
{% endalert %}
*/

module.exports = (
  content = "",
  heading = "",
  level = "info",
  slim = false,
  no_icon = false
) => {
  const classes = ["usa-alert", `usa-alert--${level}`];
  if (slim) {
    classes.push("usa-alert--slim");
  }
  if (no_icon) {
    classes.push("usa-alert--no-icon");
  }

  const body = [`<div class="usa-alert__text">${content.trim()}</div>`];
  if (heading != "") {
    body.unshift(`<h3 class="usa-alert__heading">${heading.trim()}</h3>`);
  }

  return `
    <div class="${classes.join(" ")}">
      <div class="usa-alert__body">${body.join("")}</div>
    </div>
  `;
};
