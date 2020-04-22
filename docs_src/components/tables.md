---
layout: page
title: Tables
description: Tables allow you to display structured data in a meaningful way. Do not use tables to arrange elements in a certain way. Use <a href="utilities.layout.html#grid">the grid system</a> instead.
---

## Basic structure

To apply Co-Design's table formatting, you just need to add the <code>.table</code> class to a HTML table. This will automatically add some padding and borders.

      
      
{% example "basic" %}
<table class="table">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}

## Full width table
      
By default, tables grow with its content, except that they can't overflow their parent container. However it is possible to fix tables to 100% width, by giving them the <code>.is-full-width</code> class.

{% example "full-width" %}
<table class="table is-full-width">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}


## Striped table

It is also possible to make the table striped, i.e. highlighting every even row. This is helpful for scanning large tables, because it is now harder to "switch the row" by accident. To do so, you just need to give the column the class <code>.is-striped</code>.

{% example "striped" %}
<table class="table is-striped">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}


## Hoverable table
      
Furthermore it is possible to highlight hovered columns, i.e. highlighting every even row. This is also helpful for scanning large tables, because it is now harder to "switch the row" by accident. To do so, you just need to give the column the class <code>.is-with-hover</code>.

{% example "hoverable" %}
<table class="table is-with-hover">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}

## Hoverable and striped table

It's of course also possible to combine stripes and hover effects.

{% example "hoverable-striped" %}
<table class="table is-with-hover is-striped">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}


## Compact table

Sometimes it's better to have a compact table. These tables have reduced whitespace.

Of course, compact layout can also be combined with the three other modifiers.

{% example "compact" %}
<table class="table is-compact">
    <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer count</th>
    </tr>
    <tr>
        <td>1</td>
        <td><a href="#">How can I contribute to Co-Design?</a></td>
        <td>5</td>
    </tr>
    <tr>
        <td>2</td>
        <td><a href="#">Why should I choose Co-Design over Bootstrap?</a></td>
        <td>94</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">How to style a table in Co-Design?</a></td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td><a href="#">What's the difference between a table and a button?</a></td>
        <td>48</td>
    </tr>
</table>
{% endexample %}