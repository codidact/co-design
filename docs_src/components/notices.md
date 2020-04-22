---
layout: page
title: Notices
description: Notices are messages that either inform you about the result of an action or the state of something.
---

## Basic structure

An element can be turned into a notice, by giving it the class `.notice`. There are five types of notices, though:

<table class="table is-compact">
    <tr>
        <th>type of notice</th>
        <th>which class to apply</th>
        <th>use for ...</th>
    </tr>
    <tr>
        <td>Muted (default)</td>
        <td>&mdash;</td>
        <td>... all notices, where no other type applies or which should have low visibility.</td>
    </tr>
    <tr>
        <td>Danger</td>
        <td><code>.is-danger</code></td>
        <td>... notices, that denote a dangerous, negative or deleted state or indicate that an action failed.</td>
    </tr>
    <tr>
        <td>Warning</td>
        <td><code>.is-warning</code></td>
        <td>... notices, that denote a critical or possibly dangerous state in need of your attention, or indicate an action with possibly unexpected outcome.</td>
    </tr>
    <tr>
        <td>Success</td>
        <td><code>.is-success</code></td>
        <td>... notices, that denote a positive state or indicate that an action succeeded.</td>
    </tr>
    <tr>
        <td>Info</td>
        <td><code>.is-info</code></td>
        <td>... notices, that inform neutrally about a state or the result of an action.</td>
    </tr>
</table>

{% example "basic" %}
<div class="notice">Muted notice</div>
<div class="notice is-danger">Danger notice</div>
<div class="notice is-warning">Warning notice</div>
<div class="notice is-success">Success notice</div>
<div class="notice is-info">Info notice</div>
{% endexample %}

## Filled notices

Sometimes a notice needs additional weight, possibly, because an action is critical. In these cases, it is in order, to apply the class `.is-filled`, to make the notices even more noticeable.


{% example "filled" %}
<div class="notice is-filled">Muted notice</div>
<div class="notice is-filled is-danger">Danger notice</div>
<div class="notice is-filled is-warning">Warning notice</div>
<div class="notice is-filled is-success">Success notice</div>
<div class="notice is-filled is-info">Info notice</div>
{% endexample %}


## Notices as banner

Sometimes the notice applies to the whole page/site/instance. In these cases, the notice should be put either directly above or below the header. Also you should give it the class `.is-banner` which changes some styles to make it better fit into the position. And don't forget, to center the content in a wrapper with the `.container` class.

{% example "banner" "" "has-background-color-tertiary-050" %}
<header class="header">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--site-name" href="#!">Your site</a>
    </div>
    <div class="header--menu">
        <a class="header--item" href="#!">Link</a>
        <a class="header--item" href="#!">Link</a>
        <div class="header--separator"></div>
        <a class="header--item" href="#!">Link</a>
    </div>
    </div>
</header>
<div class="notice is-banner is-warning">
    <div class="container">
        Warning banner
    </div>
</div>
{% endexample %}