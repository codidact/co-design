---
layout: page
title: Links
description: Links provide navigation between pages, not action. If you want to provide action, you should use a <a href="components.buttons.html">button</a>.
---

## Basic structure

You can mark an element as a link, by either using an `<a>` element with a source ("href" attribute), or by adding the `.link` class.

This results in a blue-ish color (which can be modified in the "_child.scss") and an underline on hover.

{% example "basic" %}
<a href="#">Link (a)</a>,
<span class="link">Link (.link)</span>,
<button class="link">Link (button.link)</button>
{% endexample %}

## Colored links

It's also possible to give links any of the <a href="/utilities/colors">secondary colors</a> and to "mute" them (gray out).

To do so, you have to use any of these classes:
- `.is-red` for dangerous links/links to removed targets
- `.is-success` for successful links
- `.is-yellow` for potentially dangerous links
- `.is-teal` for links in neutral-informative contexts (using no modifier is here the best option in most cases, however)
- `.is-muted` for secondary/inactive links

{% example "colored" %}
<a href="#">normal</a>,
<a href="#" class="is-red">is-red</a>,
<a href="#" class="is-green">is-green</a>,
<a href="#" class="is-yellow">is-yellow</a>,
<a href="#" class="is-teal">is-teal</a>,
<a href="#" class="is-muted">is-muted</a>
{% endexample %}


## Links with/without underline

By default, all links are underlined, if and only if they are hovered. However it is possible to either prevent all underlines or to force them to always exist. Use these classes for this:

- `.is-underlined` to force an underline to always exist
- `.is-not-underlined` to prevent underlines from ever appearing

{% example "underline" %}
<a href="#">normal</a>,
<a href="#" class="is-underlined">with underline</a>,
<a href="#" class="is-not-underlined">without underline</a>
{% endexample %}