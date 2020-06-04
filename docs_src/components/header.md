---
layout: page
title: Header
description: The header is the primary navigation of your page.
---

## Basic structure

A header consists of the following elements:

- An element with the class `.header` as container for everything. This should be a `<header>` element for semantic reasons.
    - A header container `.header--container` that is either centered or not (with or without `.container`). This contains all header items, in this order:
        - A header brand (`.header--brand`), which contains the brand name and information for the current site, in this order:
            - Any count of small captions/links for the network/ownership of the site. (`a.header--instance-name`)
            - Exactly one large site primary title. (`a.header--site-name`)
        - A header menu (`.header--menu`), which contains the menu items of the header:
            - Any count of menu links. (`a.header--item`)
            - Up to one header separator, which pushes everything behind it to the right side. (`.header--separator`)
            - One header menu bars (`a.header--item.is-complex.is-mobile-menu`), with
                - a bar container (`.header--menu-bars`), with exactly three, empty `<span>` elements
            - Any count of menu items (`a.header--item.is-complex`), with either
                - an image (`.header--item-image`), or
                - an icon (`.header--item-icon`)

Furthermore any header item can have one `.header--alert` notification with one number in it. All header items with images can have one `.header--trust-level` to indicate a "trust level" or other level/permission of the currently logged in user.

Header items that link to the currently shown page should be highlighted with the class `.is-active`.

By default, all header menu items, except for the mobile bars menu, disappear at small screen sizes. You can "save" them, by adding the class `.is-visible-on-mobile`.

{% example "basic" %}
<header class="header">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--instance-name" href="#">Codidact</a>
        <a class="header--site-name" href="#">Gibberish</a>
    </div>
    <div class="header--menu">
        <a class="header--item" href="#">question</a>
        <a class="header--item is-active" href="#">tags</a>
        <a class="header--item" href="#">users</a>
        <div class="header--separator"></div>
        <a class="header--item" href="#"><span class="header--alert">1</span>mod</a>
        <a class="header--item" href="#">help</a>
        <a class="header--item" href="#">discussions</a>
        <a class="header--item is-mobile-menu is-complex" href="#!">
        <span class="header--menu-bars">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </a>
        <a class="header--item is-visible-on-mobile is-complex" href="#">
            <img src="https://placekitten.com/100/100" class="header--item-image" alt="..." />
            <span class="header--alert">1</span>
            <span class="header--trust-level">5</span>
        </a>
    </div>
    </div>
</header>
{% endexample %}

## Themed

You can also add a background color:

{% example "bg-light" %}
<header class="header h-bg-yellow-050">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--instance-name" href="#">Codidact</a>
        <a class="header--site-name" href="#">Gibberish</a>
    </div>
    <div class="header--menu">
        <a class="header--item" href="#">question</a>
        <a class="header--item is-active" href="#">tags</a>
        <a class="header--item" href="#">users</a>
        <div class="header--separator"></div>
        <a class="header--item" href="#"><span class="header--alert">1</span>mod</a>
        <a class="header--item" href="#">help</a>
        <a class="header--item" href="#">discussions</a>
        <a class="header--item is-mobile-menu is-complex" href="#!">
        <span class="header--menu-bars">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </a>
        <a class="header--item is-visible-on-mobile is-complex" href="#">
            <img src="https://placekitten.com/100/100" class="header--item-image" alt="..." />
            <span class="header--alert">1</span>
            <span class="header--trust-level">5</span>
        </a>
    </div>
    </div>
</header>
{% endexample %}

If you want a darker background, you will also need to add `.is-dark` to the header

{% example "bg-dark" %}
<header class="header is-dark h-bg-green-700">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--instance-name" href="#">Codidact</a>
        <a class="header--site-name" href="#">Gibberish</a>
    </div>
    <div class="header--menu">
        <a class="header--item" href="#">question</a>
        <a class="header--item is-active" href="#">tags</a>
        <a class="header--item" href="#">users</a>
        <div class="header--separator"></div>
        <a class="header--item" href="#"><span class="header--alert">1</span>mod</a>
        <a class="header--item" href="#">help</a>
        <a class="header--item" href="#">discussions</a>
        <a class="header--item is-mobile-menu is-complex" href="#!">
        <span class="header--menu-bars">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </a>
        <a class="header--item is-visible-on-mobile is-complex" href="#">
            <img src="https://placekitten.com/100/100" class="header--item-image" alt="..." />
            <span class="header--alert">1</span>
            <span class="header--trust-level">5</span>
        </a>
    </div>
    </div>
</header>
{% endexample %}

## Small header

If your header has only a brand site name and some simple menu items, you can have a small header by adding `.is-small`. This can be combined with other modifiers

{% example "small" %}
<header class="header is-small h-bg-tertiary-800 is-dark">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--site-name" href="#">Gibberish</a>
    </div>
    <div class="header--menu">
        <a class="header--item" href="#">question</a>
        <a class="header--item is-active" href="#">tags</a>
        <a class="header--item" href="#">users</a>
        <div class="header--separator"></div>
        <a class="header--item" href="#">help</a>
        <a class="header--item is-mobile-menu is-complex" href="#!">
        <span class="header--menu-bars">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </a>
    </div>
    </div>
</header>
{% endexample %}

## Header slides

Header slides are a supplementary component to headers. They allow for drop down and mobile menus.

Header slides have the `.header-slide` class. You can also make large header slides with `.is-large`

If you plan to use a header slide as mobile menu, you should add all header items to it, that are removed from normal view and use a [Menu component](/components/nav).

{% example "slides" %}
<div class="header-slide is-active">
    <div class="menu">
        <a class="menu--item" href="#">question</a>
        <a class="menu--item is-active" href="#">tags</a>
        <a class="menu--item" href="#">users</a>
        <a class="menu--item" href="#">mod<span class="badge is-status"></span></a>
        <a class="menu--item" href="#">help</a>
        <a class="menu--item" href="#">discussions</a>
    </div>
</div>
{% endexample %}

{% example "slides-large" %}
<div class="header-slide is-large is-active">
    <h3 class="h-m-0 h-m-b-1">Search this site</h3>
    <div class="grid is-nowrap">
        <input class="form-element">
        <div class="h-m-1">
            <button class="button is-filled">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
</div>
{% endexample %}

### JavaScript

Co-Design provides standard JavaScript to position the header slides. Give your slide an id or an unique class and give the trigger the attribute `data-header-slide="[query]"`, where the query is a CSS selector for the slide.

{% example "slides-with-js" "" "d-slides-with-js-example" %}
<header class="header is-small h-bg-red-800 is-dark">
    <div class="container header--container">
    <div class="header--brand">
        <a class="header--site-name" href="#">Gibberish</a>
    </div>
    <div class="header--menu">
        <div class="header--separator"></div>
        <a class="header--item is-visible-on-mobile" href="#" data-header-slide="#example-header-slide-large">Search</a>
        <a class="header--item is-visible-on-mobile" href="#" data-header-slide="#example-header-slide">Open Slide</a>
        </a>
    </div>
    </div>
</header>
<div class="header-slide" id="example-header-slide">
    <p>Hello World!</p>
</div>
<div class="header-slide is-large" id="example-header-slide-large">
    <h3 class="h-m-0 h-m-b-1">Search this site</h3>
    <div class="grid is-nowrap">
        <input class="form-element">
        <div class="h-m-1">
            <button class="button is-filled">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
</div>
{% endexample %}