---
layout: page
title: Basic HTML
description: Co-Design has default styles for most important HTML elements, so that you can use them without any problems.
---

## Headings

Co-Design has support for all six headings from `<h1>` to `<h6>`.

{% example "headings" %}
<h1>This is a h1 heading</h1>
<h2>This is a h2 heading</h2>
<h3>This is a h3 heading</h3>
<h4>This is a h4 heading</h4>
<h5>This is a h5 heading</h5>
<h6>This is a h6 heading</h6>
{% endexample %}


## Paragraphs

HTML paragraphs (`<p>`) come with default margins and line heights. There are two variants: normal and lead paragraphs. Lead paragraphs are the ones following headings that summarize a page's contents. They have the class `p.is-lead`.</p>

{% example "paragraphs" %}
<p class="is-lead">This is a lead paragraph.</p>
<p>This is a normal paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{% endexample %}


## Code and Quotation blocks

Co-Design provides default styles for inline code (`<code>`), code blocks (`<pre>`) and block quotes (`<blockquote>`).

It is often recommended to wrap code blocks in both a `<code>` and then in a `<pre>` element.

{% notice "Attention" %}
<em>Thou shalt not</em> use these elements to provide formatting, but semantics.
{% endnotice %}

{% example "code-quotes" %}
<p>This paragraph has <code>inline code</code>.</p>
<pre><code>This is a code block</code></pre>

<blockquote>
    <p>This is a quote</p>
</blockquote>
{% endexample %}