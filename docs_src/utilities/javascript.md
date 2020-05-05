---
layout: page
title: Java Script
description: Co-Design comes with a standard Java Script library, which should allow you to do many things without writing a single line of Java Script yourself.
---

## Components

Co-Design will provide Java Script controllers to every module, which is in need of one. See the respective component page for details:

*None yet*

## Utilities

Furthermore, Co-Design Java Script provides some commonly used utilities:

### Toggle

Co-Design JS supports toggling various aspects of target elements. To create a toggle, you need to give the trigger these three attributes:

- `data-toggle` with a CSS selector selecting the target
- `data-toggle-property` with a name of the property to be toggled (defaults to: display)
- `data-toggle-value` with a name of the value of the property to be toggled. (defaults to: `\auto`)

There are these properties:

- **display** - toggles, whether the element is visible or not
- **class** - toggles, whether the element has one or many class (defined by value, separated by space) or not.

{% example "toggle-display" %}
<button class="button is-filled"
    data-toggle="#example-toggle-display-target">
Toggle Example</button>

<p id="example-toggle-display-target">This paragraph can be toggled.</p>
{% endexample %}

{% example "toggle-class" %}
<button class="button is-filled"
    data-toggle="#example-toggle-class-target"
    data-toggle-property="class"
    data-toggle-value="h-fw-bold">
Toggle Example</button>

<p id="example-toggle-class-target">This paragraph can be toggled.</p>
{% endexample %}