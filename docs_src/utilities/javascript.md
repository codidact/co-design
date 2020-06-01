---
layout: page
title: JavaScript
description: Co-Design comes with a standard JavaScript library, which should allow you to do many things without writing a single line of JavaScript yourself.
---

To be able to use this JavaScript, you'll need to include it into your project. See the [installation guide](/setup/installation) for more information.

## Components

Co-Design will provide JavaScript controllers to every module, which is in need of one. See the respective component page for details:

- [Header](/components/header)
- [Modals](/components/modals)

## Utilities

Furthermore, Co-Design JavaScript provides some commonly used utilities:

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

### Dismiss

Co-Design JS supports dismissing target elements. To create a dismisser, you need to give the trigger these attributes:

- `data-dismiss` with a CSS selector selecting the target
- (optionally) `data-dismiss-soft` for a more soft dismissal (first decrease opacity)

{% example "dismiss" %}
<p>Click the close button to remove the notice:</p>

<div class="notice is-danger" id="example-dismiss-target">
    <button data-dismiss="#example-dismiss-target" class="button is-close-button">&times;</button>
    Something important happened!
</div>

<div class="notice is-success" id="example-dismiss-soft-target">
    <button data-dismiss="#example-dismiss-soft-target" data-dismiss-soft class="button is-close-button">&times;</button>
    Something important happened! (soft dismiss)
</div>
{% endexample %}