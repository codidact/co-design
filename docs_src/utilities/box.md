---
layout: page
title: Box styles
description: Besides the text, you can also style the box elements.
---

## Margin and pading

Padding is blank space between the border of an element and its content. Margin is a blank space outside the border of an element, where no other elements can be. **In Co-Design, the utilities work identically for margins and paddings, therefore, we only explain everything once for paddings.**


You are able to override the padding to a multiple of the padding unit. The padding unit can be modified in the "_child.scss" and defaults to 4px.

We support the following multiples:

<table class="table is-compact">
    <tr>
        <th>class</th>
        <th>resulting padding</th>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-0</td>
        <td>0px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-1</td>
        <td>4px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-2</td>
        <td>8px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-4</td>
        <td>16px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-6</td>
        <td>24px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-8</td>
        <td>32px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-12</td>
        <td>48px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-16</td>
        <td>64px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-18</td>
        <td>72px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-24</td>
        <td>96px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-32</td>
        <td>128px</td>
    </tr>
    <tr>
        <td class="has-font-family-code">.has-padding-36</td>
        <td>144px</td>
    </tr>
</table>

The class `.has-padding-X` can also be replaced with any of the following classes, which only target some of the sides:

- `.has-padding-top-X` for only the top padding
- `.has-padding-right-X` for only the right padding
- `.has-padding-bottom-X` for only the bottom padding
- `.has-padding-left-X` for only the left padding
- `.has-padding-horizontal-X` for only the left and right padding
- `.has-padding-vertical-X` for only the top and bottom padding

{% example "padding-margin" %}
<div class="has-padding-4 has-background-color-red-600 has-color-white">
    padding: 4
</div>
<div class="has-padding-vertical-2 has-margin-vertical-2 has-background-color-green-600 has-color-white">
    padding: 2 vertical, margin 2 vertical
</div>
<div class="has-padding-horizontal-16 has-margin-vertical-32 has-background-color-yellow-600 has-color-white">
    padding: 16 horizontal, margin: 32 vertical
</div>
{% endexample %}



## Border

An element's border can have different styles, widths and radii and can be colored. These properties can be overridden by utilities.

### Border width

You can set the border width to any integer value between 0 (no border) and 10. The number is converted to pixels. You can set the border for all sides, or for any of the four sides top, right, bottom or left:

- `.has-border-width-X` for all four border widths
- `.has-border-top-width-X` for only the top border width
- `.has-border-right-width-X` for only the right border width
- `.has-border-bottom-width-X` for only the bottom border width
- `.has-border-left-width-X` for only the left border width

{% example "border-width" "" "d-more-padding" %}
<span class="has-padding-2 has-border-width-3 has-border-style-solid has-border-top-width-10 has-border-bottom-width-1">
    box with different border widths
</span>
{% endexample %}

### Border style

You can set the border style to any of "solid", "none", "dotted", "dashed", "double". You can set the border for all sides, or for any of the four sides top, right, bottom or left:

- `.has-border-style-X` for all four border styles
- `.has-border-top-style-X` for only the top border style
- `.has-border-right-style-X` for only the right border style
- `.has-border-bottom-style-X` for only the bottom border style
- `.has-border-left-style-X` for only the left border style

{% example "border-style" "" "d-more-padding" %}
<span class="has-padding-2 has-border-width-4 has-border-style-dotted has-border-top-style-double has-border-right-style-dashed has-border-left-style-solid">
    box with different border styles
</span>
{% endexample %}

## Border color

To set the border color, you need the color name and possibly its shade number. Then you can use the pattern `.has-border-color-NAME-SHADE` or alternatively `.has-border-color-NAME` for the default shade (400).

<a href="/utilities/color">See the page related to colors</a> in order to see a list of color names and shades.


### Border radius

You can set the border radius to any integer value between 0 (no border radius) and 10. The number is converted to pixels. You can set the border for all corners, or for any of the four corners top-left, top-right, bottom-left or bottom-right:

- `.has-border-radius-X` for all four border radii
- `.has-border-top-left-style-X` for only the top-left corner border radius
- `.has-border-top-right-style-X` for only the top-right corner border radius
- `.has-border-bottom-left-style-X` for only the bottom-left corner border radius
- `.has-border-bottom-right-style-X` for only the bottom-right corner border radius

      <h5 id="border-radius-example">Example</h5>

{% example "border-radius" %}
<div class="has-margin-2 has-padding-2 has-border-radius-0 has-border-width-5 has-border-style-solid has-border-color-red">r0</div>
<div class="has-margin-2 has-padding-2 has-border-radius-3 has-border-width-5 has-border-style-solid has-border-color-green">r3</div>
<div class="has-margin-2 has-padding-2 has-border-radius-6 has-border-width-5 has-border-style-solid has-border-color-teal">r6</div>
<div class="has-margin-2 has-padding-2 has-border-radius-9 has-border-width-5 has-border-style-solid has-border-color-yellow">r9</div>
{% endexample %}


## Box shadow

Box shadows can be given to elements. You have to give them the class `.has-shadow-X` for this, where X is a value between 1 and 10. You can use `.has-shadow-0` to reset and remove the shadow.

{% example "shadow" %}
<div class="grid">
    <div class="has-padding-4 has-shadow-0">shadow: 0</div>
    <div class="has-padding-4 has-shadow-1">shadow: 1</div>
    <div class="has-padding-4 has-shadow-4">shadow: 4</div>
    <div class="has-padding-4 has-shadow-7">shadow: 7</div>
    <div class="has-padding-4 has-shadow-10">shadow: 10</div>
</div>
{% endexample %}