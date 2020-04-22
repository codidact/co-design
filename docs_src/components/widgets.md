---
layout: page
title: Widgets
description: Widgets group multiple view elements into one larger component. It's often called a "card" and also often used in sidebars.
---

You create a widget by creating a wrapper element with the CSS class `.widget`

## Minimal widget

A minimal widget consists only of a body (`.widget--body`).

{% example "minimal" %}
<div class="widget">
    <div class="widget--body">
        <p><strong>Hello!</strong> Welcome to our community for questions around the law. This is only a site for hobbyists and professionals to share their knowledge, however, so we cannot give you legal counsel. <em>Contact a lawyer if you need (immediate) help, rather than posting in an online forum.</em></p>
    </div>
</div>
{% endexample %}



## Widget with header

Besides a body, a widget can also contain a header (`.widget--header`). The header is either "simple" (like a heading), or more "complex" (for example, when it needs more information than just one name). In the latter case, you should add the `.is-complex` class, to prevent font size issues.

A header can also have a link, which allows for some action. This is one of the very few exceptions, where a link may provide action rather than navigation. This link must be given the class `.widget--header-link`.

{% example "header" %}
<div class="widget">
    <div class="widget--header">
        <a href="#" class="widget--header-link">edit</a>
        Welcome to Codidact Law
    </div>
    <div class="widget--body">
        <p><strong>Hello!</strong> Welcome to our community for questions around the law. This is only a site for hobbyists and professionals to share their knowledge, however, so we cannot give you legal counsel. <em>Contact a lawyer if you need (immediate) help, rather than posting in an online forum.</em></p>
    </div>
</div>
{% endexample %}


## Widget with footer

Besides a body and a header, a widget can also contain a footer (`.widget--footer`). This often contains actions (buttons).

{% example "header" %}
<div class="widget">
    <div class="widget--header">
        <a href="#" class="widget--header-link">edit</a>
        Welcome to Codidact Law
    </div>
    <div class="widget--body">
        <p><strong>Hello!</strong> Welcome to our community for questions around the law. This is only a site for hobbyists and professionals to share their knowledge, however, so we cannot give you legal counsel. <em>Contact a lawyer if you need (immediate) help, rather than posting in an online forum.</em></p>
    </div>
    <div class="widget--footer">
        <a href="#!" class="button is-filled">More information...</a>
    </div>
</div>
{% endexample %}