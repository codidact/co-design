---
layout: page
title: Category Header
description: The category header is the secondary navigation within Codidact, which shall be used for large-scope tabs (within categories). The names and colors of these are configurable by the application users.
---

A category header consists of the following elements:

- An element with the class `.category-header` as container for everything. This should be a `<header>` element for semantic reasons.
    - A tabs element with the class `.category-header--tabs` with
        - A tabs container with the class `.category-header--tabs-container` (probably centered with `.container`) with
            - Any count of tab links with the class `a.category-header--tab` and for up to one of them with the class `.is-active`. The tab label is written into these nodes.
    - (optionally) A current categorys element with the class `.category-header--container`. It should be centered with `.container`. It contains
        - A category name `.category-header--name`
        - A category navigation `.category-header--nav` which can contain
            - Navigation items (`a.category-header--nav-item`
            - Up to one navigation separator, which pushes everything behind it to the right side (`.category-header--nav-separator`
            - navigation buttons (`.category-header--nav-item.is-button`

A category header **must** have exactly one color code added to it. You can choose from `.is-turqoise`, `.is-green`, `.is-blue`, `.is-purple`, `.is-gray`, `.is-yello`, `.is-orange`, `.is-pink` and `.is-red`. This is often user-selectable and depends on the chosen category.

By default the category namefrom the current category navigation hides on mobile, to save place as it can be seen on the tabination too.

{% example %}
<header class="category-header is-orange">
    <div class="category-header--tabs">
        <div class="container category-header--tabs-container">
            <a href="#" class="category-header--tab is-active">Q&amp;A</a>
            <a href="#" class="category-header--tab">Wiki</a>
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