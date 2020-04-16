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
        <div class="item-list--number-value">
            <div class="item-list--number">23</div>
            <div class="item-list--number-label">answers</div>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number">120</div>
            <div class="item-list--number-label">votes</div>
        </div>
        <div class="item-list--text-value is-primary">
            <div class="margin-bottom-2"><a href="#" class="has-font-size-larger">What is Codidact?</a></div>
            <div class="has-padding-1">
                <a href="#" class="badge is-tag is-master-tag">meta</a>
                <a href="#" class="badge is-tag">support</a>
                <a href="#" class="badge is-tag">codidact</a>
            </div>
        </div>
        <div class="item-list--image-value">
            <a href="#!"><img src="https://placekitten.com/100/100" alt="placeholder image"></a>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number-label">last active</div>
            <div class="item-list--number">1d</div>
        </div>
    </div>
    <div class="item-list--item is-highlighted">
        <div class="item-list--number-value">
            <div class="item-list--number">23</div>
            <div class="item-list--number-label">answers</div>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number">120</div>
            <div class="item-list--number-label">votes</div>
        </div>
        <div class="item-list--text-value is-primary">
            <div class="margin-bottom-2"><a href="#" class="has-font-size-larger">Welcome to Codidact</a></div>
            <div class="has-padding-1">
                <a href="#" class="badge is-tag is-master-tag">meta</a>
                <a href="#" class="badge is-tag">announcement</a>
                <a href="#" class="badge is-tag">codidact</a>
            </div>
        </div>
        <div class="item-list--image-value">
            <a href="#"><img src="https://placekitten.com/101/101" alt="placeholder image"></a>
        </div>
        <div class="item-list--number-value">
            <div class="item-list--number-label">last active</div>
            <div class="item-list--number">Dec '18</div>
        </div>
    </div>
</div>
{% endexample %}