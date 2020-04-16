---
layout: page
title: Buttons
description: Links provide actions, and not navigation, unless this is required after doing the action. If you want to provide navigaton, you should use <a href="components.links.html">links</a>.
---

To mark an element as a button, it needs to have the `.button` class.

## Primary buttons

Buttons come in three forms: primary, danger and muted. The one you'll need most, though, is primary. Therefore all buttons are considered primary, unless you specify something different.

Primary buttons can have different levels of importance. There are default buttons, which have the least priority, then outlined and then filled buttons. You should only have one filled primary button in a view, as it is considered for the most important action.

{% example "basic" %}
<button class="button">default primary button</button>
<button class="button is-outlined">outlined primary button</button>
<button class="button is-filled">filled primary button</button>
{% endexample %}


## Danger buttons

Not everything is nice and happy, though. In these cases, you should use a danger button, to denote, that an action might be dangerous, unintended, destructive or irreversible.

As primary buttons, danger buttons can have different levels of importance. There are default buttons, which have the least priority, then outlined and then filled buttons. You should only have one filled danger button in a view, as it is considered for the most important action.

{% example "danger" %}
<button class="button is-danger">default danger button</button>
<button class="button is-danger is-outlined">outlined danger button</button>
<button class="button is-danger is-filled">filled danger button</button>
{% endexample %}

## Muted buttons

Sometimes actions are not available or should only be considered secondary to others. For these cases, it's possible to use muted buttons.

As primary and danger buttons, muted buttons can have different levels of importance. There are default buttons, which have the least priority, then outlined and then filled buttons.

{% example "muted" %}
<button class="button is-muted">default muted button</button>
<button class="button is-muted is-outlined">outlined muted button</button>
<button class="button is-muted is-filled">filled muted button</button>
{% endexample %}

## Button sizes
      
It's possible to modify the size of buttons. We have five sizes, besides the default one: small, (default), medium, large, very large, extemely large

{% example "sizes" %}
<button class="button is-small">small button</button>
<button class="button">default button</button>
<button class="button is-medium">medium button</button>
<button class="button is-large">large button</button>
<button class="button is-very-large">very large button</button>
<button class="button is-extremely-large">extremely large button</button>
{% endexample %}

## Icon only buttons

Sometimes you have buttons, which consist *only* of an icon. These are often used for vote buttons. You can mark a button as icon only, by giving it the class `.is-icon-only`. As normal buttons, they appear as primary/danger/muted buttons and they, too, have different sizes.

Icon only buttons should have a descriptive `title="..."` attribute for accessibility reasons

{% example "icon-only" %}
<button class="button is-icon-only-button"><i class="fa fa-envelope"></i></button>
<button class="button is-icon-only-button is-extremely-large"><i class="fa fa-heart"></i></button>
<button class="button is-icon-only-button is-danger"><i class="fa fa-eye"></i></button>
<button class="button is-icon-only-button is-muted"><i class="fa fa-gear"></i></button>
{% endexample %}

## Close buttons

Co-Design has "close buttons", which should be used, whenever a notice, modal, widget, etc. can be dismissed by the user. It should not trigger any action, besides those neccessary to close the modal. A close button is positioned automatically and cannot be styled with any of the other `.is-X` classes, besides `.is-active`.

A close button has the class `.is-close-button`, and the HTML entity `&amp;times` (&times;) as only content.

{% example "close" %}
<div class="notice is-danger">
    <button class="button is-close-button">&times;</button>
    Something important happened!
</div>
{% endexample %}

## Active buttons

It's possible to mark buttons as active (i.e. pressed), by adding the class `.is-active`.

## Button lists

Co-Design also provides you with button lists, which allow you to group or collapse related buttons. Button lists can also be used for filters, where only one option can be enabled at a time.

Create a button list, by wrapping your buttons into a container with the class `.button-list`. If you want to collapse them (no space between them), you need to give the container the class `.is-gutterless`.

All buttons in one button list should have the same form (primary, danger, muted) and size. All buttons in one collapsed button list should have the same style (default, outlined, filled), too.

{% example "lists" %}
<div class="button-list">
    <button class="button is-outlined is-active">all actions</button>
    <button class="button is-outlined">PII access</button>
    <button class="button is-outlined">formal warnings</button>
    <button class="button is-outlined">suspensions</button>
    <button class="button is-outlined">privilege revokations</button>
</div>
<br>
<div class="button-list is-gutterless">
    <button class="button is-muted is-outlined is-active">all actions</button>
    <button class="button is-muted is-outlined">PII access</button>
    <button class="button is-muted is-outlined">formal warnings</button>
    <button class="button is-muted is-outlined">suspensions</button>
    <button class="button is-muted is-outlined">privilege revokations</button>
</div>
{% endexample %}