---
layout: page
title: Badges
description: Badges are a collection of small, graphic and distinct elements that have in common, that they label something or express properties of something.
---

All badges have the CSS class `.badge</code>, and at least one other class in the form `.is-X</code>, where X describes the type of the badge.

## Tags

Tags are badges that allow classification of content. Often, tags are entered by your users. Tags are created with the CSS classes `.badge.is-tag</code>.

There are two types of tags: normal tags and filled tags. Filled tags can be used for example for a group of tags, where on of them is required. Or filled tags could be categories. Filled tags have additionally the class `.is-filled</code> (deprecated, but also valid: `.is-master-tag</code>).

{% example "tags" %}
<span class="badge is-tag">codidact</span>
<a href="#" class="badge is-tag">design</a>
<a href="#" class="badge is-tag is-filled">co-design</a>
{% endexample %}

It's also possible to color tags, by giving them one of these classes `.is-red</code>, `.is-yellow</code>, `.is-green</code>, `.is-teal</code> or `.is-muted</code>. This can be combined with filled tags.

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
{% endexample %}


## Awards

Awards are badges that are given to users for doing good things. Often they are awarded automatically. Awards are created with the CSS classes `.badge.is-award</code>.</p>

It's also possible and recommended to add an icon in front of the award label.

There are three types of awards: bronze, silver and gold. They can be created with the additional classes `.is-bronze</code>, `.is-silver</code> and `.is-gold</code>, respectively.

{% example "awards" %}
<span class="badge is-award is-bronze"><span class="badge--icon">&#x2764;</span>First Upvote</span>
<span class="badge is-award is-silver"><span class="badge--icon">&#x2764;</span>Second Upvote</span>
<span class="badge is-award is-gold"><span class="badge--icon">&#x2764;</span>Third Upvote</span>
{% endexample %}


## User roles

It's also possible to use badges to show someone's user role (for example: moderator status). These badges are created with the CSS classes `.badge.is-user-role</code>. They can also be muted with the class `.is-muted</code>.

{% example "user-roles" %}
<span class="badge is-user-role">mod</span>
<span class="badge is-user-role is-muted">mod</span>
{% endexample %}


## User trust levels

It's also possible to use badges to show someone's user "trust level", which is a number expressing a user's trust and privilege. These badges are created with the CSS classes `.badge.is-user-trust-level</code>. They can also be muted with the class `.is-muted</code>.

{% example "user-tl" %}
<span class="badge is-user-trust-level">1</span>
<span class="badge is-user-trust-level">1382</span>
<span class="badge is-user-trust-level is-muted">42</span>
{% endexample %}