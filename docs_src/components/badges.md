---
layout: page
title: Badges
description: Badges are a collection of small, graphic and distinct elements that have in common, that they label something or express properties of something.
---

All badges have the CSS class `.badge`, and at least one other class in the form `.is-X`, where X describes the type of the badge. You can contract these two classes to the short form `.badge-X` **when neccessary for operator precedence issues**.

## Tags

Tags are badges that allow classification of content. Often, tags are entered by your users. Tags are created with the CSS classes `.badge.is-tag`.

There are two types of tags: normal tags and filled tags. Filled tags can be used for example for a group of tags, where on of them is required. Or filled tags could be categories. Filled tags have additionally the class `.is-filled` (deprecated, but also valid: `.is-master-tag`).

{% example "tags" %}
<span class="badge is-tag">codidact</span>
<a href="#" class="badge is-tag">design</a>
<a href="#" class="badge is-tag is-filled">co-design</a>
{% endexample %}

It's also possible to color tags, by giving them one of these classes `.is-red`, `.is-yellow`, `.is-green`, `.is-teal` or `.is-muted`. This can be combined with filled tags. You can also make smaller tags with `.is-small`.

{% example "tags-colored" %}
<p>Default styles</p>
<span class="badge is-tag is-red">red</span>
<span class="badge is-tag is-yellow">yellow</span>
<span class="badge is-tag is-green">green</span>
<span class="badge is-tag is-teal">teal</span>
<span class="badge is-tag is-muted">muted</span>
<p>Filled styles</p>
<span class="badge is-tag is-filled is-red">red</span>
<span class="badge is-tag is-filled is-yellow">yellow</span>
<span class="badge is-tag is-filled is-green">green</span>
<span class="badge is-tag is-filled is-teal">teal</span>
<span class="badge is-tag is-filled is-muted">muted</span>
<p>Small styles</p>
<span class="badge is-tag is-small is-red">red</span>
<span class="badge is-tag is-small is-yellow">yellow</span>
<span class="badge is-tag is-small is-green">green</span>
<span class="badge is-tag is-small is-teal">teal</span>
<span class="badge is-tag is-small is-muted">muted</span>
{% endexample %}


## Status badges

Status badges are shown on clickable components to inform the user, that changes or new things are available or that some amount has been selected.

Create one by using the class `.badge.is-status`. It can (but isn't required to) contain a number indicating the amount of changes. The badge will be styled appropriately in both cases. Don't forget to keep accessibility in mind.

{% example "status-on-button" %}
<button class="button is-danger is-filled">
    <span class="badge is-status">5</span>
    Delete selected posts
</button>
{% endexample %}

Or you could use it within a category header (here with both possible styles):

{% example "status-on-category-header" %}
<header class="category-header is-red">
    <div class="category-header--tabs">
        <div class="container category-header--tabs-container">
            <a href="#" class="category-header--tab is-active">Q&amp;A<span class="badge is-status">2</span></a>
            <a href="#" class="category-header--tab">Wiki<span class="badge is-status"></span></a>
            <a href="#" class="category-header--tab">Blog</a>
        </div>
    </div>
    <div class="container category-header--container">
        <div class="category-header--name">Q&amp;A</div>
        <div class="category-header--nav">
        <a href="#" class="category-header--nav-item is-active">Questions</a>
        <a href="#" class="category-header--nav-item">Tags</a>
        <a href="#" class="category-header--nav-item">Search</a>
        <div class="category-header--nav-separator"></div>
        <a href="#" class="category-header--nav-item is-button">Ask Question</a>
        </div>
    </div>
</header>
{% endexample %}


## Awards

Awards are badges that are given to users for doing good things. Often they are awarded automatically. Awards are created with the CSS classes `.badge.is-award`.</p>

It's also possible and recommended to add an icon in front of the award label.

There are three types of awards: bronze, silver and gold. They can be created with the additional classes `.is-bronze`, `.is-silver` and `.is-gold`, respectively.

{% example "awards" %}
<span class="badge is-award is-bronze"><span class="badge--icon">&#x2764;</span>First Upvote</span>
<span class="badge is-award is-silver"><span class="badge--icon">&#x2764;</span>Second Upvote</span>
<span class="badge is-award is-gold"><span class="badge--icon">&#x2764;</span>Third Upvote</span>
{% endexample %}


## User roles

It's also possible to use badges to show someone's user role (for example: moderator status). These badges are created with the CSS classes `.badge.is-user-role`. They can also be muted with the class `.is-muted`.

{% example "user-roles" %}
<span class="badge is-user-role">mod</span>
<span class="badge is-user-role is-muted">mod</span>
{% endexample %}


## User trust levels

It's also possible to use badges to show someone's user "trust level", which is a number expressing a user's trust and privilege. These badges are created with the CSS classes `.badge.is-user-trust-level`. They can also be muted with the class `.is-muted`.

{% example "user-tl" %}
<span class="badge is-user-trust-level">1</span>
<span class="badge is-user-trust-level">1382</span>
<span class="badge is-user-trust-level is-muted">42</span>
{% endexample %}