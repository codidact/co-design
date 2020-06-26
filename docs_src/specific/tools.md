---
layout: page
title: Tools
description: The tools component is supposed to be used for actions on a post ("post action menu").
---

A tools component consists of a `.tools`-container and some `.tools--item` within that. The items can be links or buttons, it doesn't matter. You can mark some items as "dangerous", by adding `.is-danger`. When the post is in the dangerous state (e.g. deleted) and the item is for reversing that, add `.is-danger` and `.is-filled`. You can mark an item as active with `.is-active`.

Tool items work well with icons.

Most simple case:

{% example "tools" %}
<div class="tools">
    <a href="#" class="tools--item">Permalink</a>
    <a href="#" class="tools--item">History</a>
    <a href="#" class="tools--item">Edit</a>
    <button class="tools--item">Close</button>
    <button class="tools--item is-danger">Delete</button>
    <button class="tools--item">Flag</button>
    <button class="tools--item">Tools</button>
</div>
{% endexample %}

With icons:

{% example "tools" %}
<div class="tools">
    <a href="#" class="tools--item">
        <i class="fa fa-link"></i>
        Permalink
    </a>
    <a href="#" class="tools--item">
        <i class="fa fa-history"></i>
        History
    </a>
    <a href="#" class="tools--item">
        <i class="fa fa-pencil"></i>
        Edit
    </a>
    <button class="tools--item">
        <i class="fa fa-lock"></i>
        Close
    </button>
    <button class="tools--item is-danger">
        <i class="fa fa-trash"></i>
        Delete
    </button>
    <button class="tools--item">
        <i class="fa fa-flag"></i>
        Flag
    </button>
    <button class="tools--item">
        <i class="fa fa-wrench"></i>
        Tools
    </button>
</div>
{% endexample %}

With one item marked as active:

{% example "tools-active" %}
<div class="tools">
    <a href="#" class="tools--item">Permalink</a>
    <a href="#" class="tools--item">History</a>
    <a href="#" class="tools--item">Edit</a>
    <button class="tools--item">Close</button>
    <button class="tools--item is-danger">Delete</button>
    <button class="tools--item">Flag</button>
    <button class="tools--item is-active">Tools</button>
</div>
{% endexample %}

With a danger-filled item:

{% example "tools-danger-filled" %}
<div class="tools">
    <a href="#" class="tools--item">Permalink</a>
    <a href="#" class="tools--item">History</a>
    <a href="#" class="tools--item">Edit</a>
    <button class="tools--item">Close</button>
    <button class="tools--item is-danger is-filled">Undelete</button>
    <button class="tools--item">Flag</button>
    <button class="tools--item">Tools</button>
</div>
{% endexample %}

With a danger-filled item marked as active:

{% example "tools-danger-filled-active" %}
<div class="tools">
    <a href="#" class="tools--item">Permalink</a>
    <a href="#" class="tools--item">History</a>
    <a href="#" class="tools--item">Edit</a>
    <button class="tools--item">Close</button>
    <button class="tools--item is-danger is-filled is-active">Undeleting...</button>
    <button class="tools--item">Flag</button>
    <button class="tools--item">Tools</button>
</div>
{% endexample %}