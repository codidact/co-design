---
layout: page
title: Pagination
description: When your view has more items than can be show on one page, use a pagination.
---

A pagination consists of an `<ul>` with the class `.pagination`. It contains `<li>` children, which can have the classes `.is-disabled` (if they cannot be clicked) or `.is-active`. Each of them must either have a `<span>` or an `<a>` as child

{% example %}
<ul class="pagination">
    <li class="is-disabled">
        <span>← Previous</span>
    </li>
    <li class="is-active">
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li class="is-disabled">
        <span>…</span>
    </li>
    <li>
        <a href="#">182</a>
    </li>
    <li>
        <a href="#">183</a>
    </li>
    <li>
        <a href="#">Next →</a>
    </li>
</ul>
{% endexample %}