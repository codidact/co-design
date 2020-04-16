---
layout: page
title: Typographic utilities
description: There are different typographic utilities, that allow you to change font-related properties of elements.
---

## Font size

You can set the `font-size` to any of a list of "named" values. This is called a "gradient" in our framework. Unless you override it in the "_child.scss", you can use the following values:

<table class="table is-compact">
<tr>
    <th>name</th>
    <th>value</th>
    <th>default for</th>
</tr>
<tr>
    <td>small</td>
    <td>12px</td>
    <td>h6</td>
</tr>
<tr>
    <td>caption</td>
    <td>14px</td>
    <td>h5</td>
</tr>
<tr>
    <td>base</td>
    <td>16px</td>
    <td>any text and h4</td>
</tr>
<tr>
    <td>larger</td>
    <td>19px</td>
    <td>h3</td>
</tr>
<tr>
    <td>subheading</td>
    <td>22px</td>
    <td></td>
</tr>
<tr>
    <td>heading</td>
    <td>25px</td>
    <td>h2</td>
</tr>
<tr>
    <td>subtitle</td>
    <td>28px</td>
    <td></td>
</tr>
<tr>
    <td>title</td>
    <td>31px</td>
    <td>h1</td>
</tr>
<tr>
    <td>subdisplay</td>
    <td>34px</td>
    <td></td>
</tr>
<tr>
    <td>display</td>
    <td>37px</td>
    <td></td>
</tr>
</table>

To set the font size, you need to give the element the class `has-font-size-X`, where X is replaced with the font-size name.

{% example "font-size" %}
<div class="has-font-size-display">3 questions</div>
<div class="has-font-size-larger">matched your query</div>
{% endexample %}



## Font family

You can set the `font-family` to either "primary" (the default sans serif font) or "code" (the monospace font). Unless you override it in the "_child.scss", each option uses this font stack:

<table class="table is-compact">
    <tr>
        <th>option</th>
        <th>fonts</th>
    </tr>
    <tr>
        <td>primary</td>
        <td><span class="has-font-family-code">"Red Hat Display", "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif</span></td>
    </tr>
    <tr>
        <td>code</td>
        <td><span class="has-font-family-code">"Consolas", "Courier New", monospace</span></td>
    </tr>
</table>

To set the font family, you need to give the element the class `has-font-family-X`, where X is replaced with the font stack name.

{% example "font-family" %}
This is <span class="has-font-family-code"> code with some <span class="has-font-family-primary">default text</span> followed by some code</span> again.
{% endexample %}


## Font decoration

It is possible to override the font weight and whether it is italic for an element.

You have the classes `has-font-weight-normal`, `has-font-weight-medium`, `has-font-weight-bold` and `has-font-weight-black` for font-weight and `has-font-style-normal` and `has-font-weight-italic` for italic style or not.

{% example "font-decoration" %}
<p class="has-font-weight-normal">This is normal</p>
<p class="has-font-weight-medium">This is medium</p>
<p class="has-font-weight-bold">This is bold</p>
<p class="has-font-weight-black">This is black</p>
<br>
<p class="has-font-style-italic">This is italic</p>
<p class="has-font-weight-black has-font-style-italic">This is black and italic</p>
{% endexample %}

## Text align
It is possible to override the text alignment for an element.

You have the classes `has-text-align-left`, `has-text-align-center`, `has-text-align-right` and `has-text-align-justify`, which determine, whether the text in an element is on the left, centered, on the right or justified, respectively. Justification should not be used in the most cases, though.

{% example "text-align" %}
<p class="has-text-align-left"><strong>Left aligned.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
<p class="has-text-align-center"><strong>Centered.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
<p class="has-text-align-right"><strong>Right aligned.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
<p class="has-text-align-justify"><strong>Justified.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
{% endexample %}