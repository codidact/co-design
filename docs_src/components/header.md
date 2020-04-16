---
layout: page
title: Header
description: The header is the primary navigation of your page.
js: true
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

## Header slides

Header slides are a supplementary component to headers. They allow for drop down and mobile menus.

Header slides have the `.header-slide` class and its items have either the class `.header-slide--item` for items or `.header-slide--separator` for line separators. Header items can be active, use the class `.is-active` for that.

Header slides will probably need JavaScript, because you need to explicitely show them, by giving them the class `.is-active`. Furthermore, you'll need to position it, by setting its `top: X` and `right: X` properties appropriately.

If you plan to use a header slide as mobile menu, you should add all header items to it, that are removed from normal view.</p>

{% example "slides" %}
<div class="header-slide is-active">
    <a class="header-slide--item" href="#">question</a>
    <a class="header-slide--item is-active" href="#">tags</a>
    <a class="header-slide--item" href="#">users</a>
    <div class="header-slide--separator"></div>
    <a class="header-slide--item" href="#"><span class="header-slide--alert">1</span>mod</a>
    <a class="header-slide--item" href="#">help</a>
    <a class="header-slide--item" href="#">discussions</a>
</div>
{% endexample %}

As we said above, Co-Design does not contain any JavaScript to toggle header slides. This documentation uses the following snippet, which may or may not be appropriate for you:

```
const headerSlideTriggers = document.querySelectorAll("[data-trigger-header-slide]");

for (let i = 0; i < headerSlideTriggers.length; i++) {
  headerSlideTriggers[i].addEventListener("click", function (e) {
    const headerSlide = document.querySelector(this.getAttribute("data-trigger-header-slide"));

    headerSlide.classList.toggle("is-active");
    this.classList.toggle("is-active");

    // Position header slide appropriately relative to
    // trigger.
    const rect = this.getBoundingClientRect();
    headerSlide.style.top = (rect.top + rect.height) + "px";
    headerSlide.style.right = (document.body.clientWidth - rect.right) + "px";

    // Prevent navigation
    e.preventDefault();
  });
}
```