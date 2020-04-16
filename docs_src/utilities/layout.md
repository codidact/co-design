---
layout: page
title: Layout utilities
description: There are different layout utilities, that allow you to change everything that relates to the layout and position of elements.
---

## Layout container
      
It is recommended for readability not to have full-width containers with content, but instead to give them a maximum width and to center them. You can look at the header and this content area to see the effect.

To do so, you need to add the `.container` class. By default, the width of it is 72rem, however you can override that in your "_child.scss".

## Element float

You can make elements float to the left or to the right, by giving them the classes `.has-float-left` or `.has-float-right`, respectively. You can remove the float from an element with `.has-float-none` and clear the float around an element with `.has-float-clear`.

## Flexbox grid

Co-Design provides a flexible and powerful CSS flexbox grid. It must be in a `.grid` container and each item (cell) must have the class `.grid--cell`.

Then you can add any of the classes `.is-X` with X between one and twelve (or any other number if you override it in the "_child.scss"). Furthermore we have responsive grid classes with `.is-X-sm`, `.is-X-md` and `.is-X-lg`, being effective only, when the viewport size is under 32rem, between 32rem and 64rem or above 64rem, respectively.

By default, the elements of a grid are put on the next line, when there isn't enough space (wrap). However, sometimes that isn't wanted. For these cases, it's possible to add the class `.is-nowrap` to the grid.

{% example "grid" "Resize the browser window to see the responsive classes in effect." %}
<div class="grid">
    <div class="grid--cell is-5 is-12-sm">
    <div class="has-padding-4 has-background-color-red">&nbsp;</div>
    </div>
    <div class="grid--cell is-7 is-12-sm">
    <div class="has-padding-4 has-background-color-green">&nbsp;</div>
    </div>
    <div class="grid--cell is-3 is-12-md">
    <div class="has-padding-4 has-background-color-yellow">&nbsp;</div>
    </div>
    <div class="grid--cell is-9 is-12-md">
    <div class="has-padding-4 has-background-color-teal">&nbsp;</div>
    </div>
</div>
{% endexample %}