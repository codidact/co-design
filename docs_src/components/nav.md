---
layout: page
title: Navigation
description: Co-Design provides components for secondary navigation, which should not switch the context (i.e. not going from a user page to a question page).
---

## Tabs

To create a tab list, you need to create a wrapper with the class `.tabs`, and then put all the items in it as `a.tabs--item`. The active tab should be marked with the class `.is-active`.

It's also possible to have more classical tabs with a bottom border, by gibing the wrapper the class `.is-classic-tabs`.

{% example "tabs" %}
<div class="tabs">
    <a class="tabs--item" href="#">Profile</a>
    <a class="tabs--item is-active" href="#">Activity</a>
    <a class="tabs--item" href="#">Edit Account</a>
    <a class="tabs--item" href="#">Mod</a>
</div>
<p>Classic tabs</p>
<div class="tabs is-classic-tabs">
    <a class="tabs--item" href="#">Profile</a>
    <a class="tabs--item is-active" href="#">Activity</a>
    <a class="tabs--item" href="#">Edit Account</a>
    <a class="tabs--item" href="#">Mod</a>
</div>
{% endexample %}

## Menu

To create a menu, you need to create a wrapper with the class `.menu`, and then put all the items in it as `a.menu--item`. The active tab should be marked with the class `.is-active`. It's possible to designate menu headers with `.menu--header`. They can be links, too.

{% example "tabs" %}
<div class="menu">
    <div class="menu--heading">Profile</div>
    <a class="menu--item" href="#">My Profile</a>
    <a class="menu--item" href="#">Preferences</a>
    <a class="menu--item" href="#">Delete</a>
    <a class="menu--heading" href="#">Account</a>
    <a class="menu--item is-active" href="#">Authentification</a>
    <a class="menu--item" href="#">E-Mail</a>
</div>
{% endexample %}