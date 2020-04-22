---
layout: page
title: Tabs
description: Tabs are secondary navigation, which should not switch the context (i.e. not going from a user page to a question page).
---

To create a tab list, you need to create a wrapper with the class `.tabs`, and then put all the items in it as `a.tabs--item`. The active tab should be marked with the class `.is-active`.

It's also possible to have more classical tabs with a bottom border, by gibing the wrapper the class `.is-classic-tabs`.

{% example %}
<div class="tabs">
    <a class="tabs--item" href="#!">Profile</a>
    <a class="tabs--item is-active" href="#!">Activity</a>
    <a class="tabs--item" href="#!">Edit Account</a>
    <a class="tabs--item" href="#!">Mod</a>
</div>
<p>Classic tabs</p>
<div class="tabs is-classic-tabs">
    <a class="tabs--item" href="#!">Profile</a>
    <a class="tabs--item is-active" href="#!">Activity</a>
    <a class="tabs--item" href="#!">Edit Account</a>
    <a class="tabs--item" href="#!">Mod</a>
</div>
{% endexample %}