---
layout: page
title: Drop Panels
description: Drop panels can be used for dropdowns and dropups and are automatically positioned through Co-Design's JavaScript.
---

## Basic

You create a drop panel by using the class `.droppanel`. Drop panels can contain (among other elements): Drop panel headers (`.droppanel--header`) and drop panel menus (`.droppanel--menu`). The menu contains menu items (`<a>`), with active ones marked as `.is-active`.

By default, drop panels are hidden. You need to give them the class `.is-active` to make them visible. In most cases, Co-Design's JavaScript should be able to do this for you. You can also make a drop panel larger (`.is-large`) or ultra-wide (`.is-wide`).

{% example "basic" %}
<div class="droppanel is-active">
    <div class="droppanel--header">
        Search for...
    </div>
    <input class="form-element">
    <div class="droppanel--header">
        Order by...
    </div>
    <div class="droppanel--menu">
        <a href="#">Score</a>
        <a href="#" class="is-active">Creation date</a>
        <a href="#">Last activity</a>
        <a href="#">Answer count</a>
    </div>
</div>
{% endexample %}

Here is an example with different sizes

{% example "sizes" %}
<div class="droppanel is-active is-large">
    <p>Large size.</p>
</div>
<div class="droppanel is-active is-wide">
    <p>Wide size.</p>
</div>
{% endexample %}

## JavaScript

Co-Design's JavaScript provides full support for showing drop panels and aligning them automatically.

Give the drop panel an id or unique class and add `data-drop="[query]"` to the trigger, where the query is a CSS selector for the drop panel.

If you want to toggle a class on the trigger (for example `.is-active`), you can add `data-drop-self-class-toggle="[class]"` to the trigger. If you want to force a direction (up or down), to which the drop panel should go, add `data-drop-force-dir="[up|down]"` to the trigger.

{% example "js" "" "d-dp-with-js-example" %}
<button class="button is-filled" data-drop="#droppanel-example" data-drop-self-class-toggle="is-active">Toggle example drop panel</button>
<div class="droppanel" id="droppanel-example">
    <div class="droppanel--header">👋 Hello!</div>
    <p>Welcome to my drop panel!</p>
</div>
{% endexample %}