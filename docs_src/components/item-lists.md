---
layout: page
title: Item lists
description: Item lists are a flexible component that allows you to display complex data in a understandable and skimable way.
---

To build an item list, you need:

- A container for the whole list (`.item-list`), which contains any count of:
    - Items (`.item-list--item`), which all contain any count of these, whereas the structure is constant in one list:
        - Number values (`.item-list--number-value`), which contain one or both of these in any order:
            - A number (`.item-list--number`), and/or
            - A number label (`.item-list--number-label`)
        - Text values (`.item-list--text-value`), and/or
        - Image values (`.item-list--text-value`), which contain exactly one image, possibly in a link

Furthermore, one of these item values is "primary" (`.is-primary`), which is the one, that should identify the item (e.g. post name).

It is also possible to highlight items, for example if they match a query, by giving them the `.is-highlighted` class.

{% example %}
<div class="item-list">
    <div class="item-list--item">
        <div class="item-list--text-value is-primary">
            <a href="#"><p class="has-font-size-subheading">What is Codidact?</p></a>
            <div class="has-padding-1 has-margin-bottom-2">
                <a href="#" class="badge is-tag is-master-tag has-border-radius-10">meta</a>
                <a href="#" class="has-border-radius-10 badge is-tag">support</a>
                <a href="#" class="badge is-tag has-border-radius-10">codidact</a>
            </div>
            <div class="has-margin-bottom-2 has-padding-1">
                <button class="button has-border-radius-10 is-small">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <span class="has-opacity-4 has-font-size-small">Last modified 20 hours ago: </span>
                <a href="#"><span class="has-font-size-small">John Doe</span></a>
            </div>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number">50</div>
            <div class="item-list--number-label">Votes</div>
            <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
        </div>
        <div class="item-list--number-value has-border-style-solid has-border-color-green has-border-radius-9 has-border-width-1 has-background-color-green-050 has-shadow-7">
            <div class="item-list--number">23</div>
            <div class="item-list--number-label">Answers</div>
            <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-comment-o" aria-hidden="true"></i></button>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number">120</div>
            <div class="item-list--number-label">Views</div>
            <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-eye"></i></button>
        </div>
    </div>
    <div class="item-list">
        <div class="item-list--item">
            <div class="item-list--text-value is-primary">
                <a href="#"><p class="has-font-size-subheading">Welcome to Codidact</p></a>
                <div class="has-padding-1 has-margin-bottom-2">
                    <a href="#" class="badge is-tag is-master-tag has-border-radius-10">meta</a>
                    <a href="#" class="has-border-radius-10 badge is-tag">support</a>
                    <a href="#" class="badge is-tag has-border-radius-10">codidact</a>
                </div>
                <div class="has-margin-bottom-2 has-padding-1">
                    <button class="button has-border-radius-10 is-small">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <span class="has-opacity-4 has-font-size-small">Last modified 20 hours ago: </span>
                    <a href="#"><span class="has-font-size-small">John Doe</span></a>
                </div>
            </div>
            <div class="item-list--number-value">
                <div class="item-list--number">50</div>
                <div class="item-list--number-label">Votes</div>
                <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
            </div>
            <div class="item-list--number-value">
                <div class="item-list--number">23</div>
                <div class="item-list--number-label">Answers</div>
                <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-comment-o" aria-hidden="true"></i></button>
            </div>
            <div class="item-list--number-value">
                <div class="item-list--number">120</div>
                <div class="item-list--number-label">Views</div>
                <button class="button is-icon-only-button has-shadow-0"><i class="fa fa-eye"></i></button>
            </div>
        </div>
    </div>
</div>
{% endexample %}
