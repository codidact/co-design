---
layout: page
title: Table of Content
description: Tables of Content can be used to give a summary about the contents on a page.
---

Sometimes you might want to have a Table of Content on your page. For example, you might want to show one between the question and the answers on posts with many replies. A ToC entry can contain almost any content you want, as long as they are equal for all entries.

In a ToC component (`.toc`) you'll need two types of entries:

- one **ToC header** (`.toc--header`), which summarizes, what kind of information is shown in the table (e.g. "Summary", "Table of Contents" or "Answer Summary"). This can be a button if you want to allow toggling the ToC visibility
- many **ToC entries** (`.toc--entry`), which contain the actual data. This can/should be links targeting the respective section. Can contain:
  - **Icon Container** (`.toc--icon`) for icons depicting the type or other information for the current entry.
  - **Badge Container** (`.toc--badge`) for status badges (probably tags) giving meta-information for the current category.
  - **Full Container** (`.toc--full`) for a text summary (title or excerpt) of the current entry (spans all available space)

By default, all entries are collapsed if the header is a button and unless you add the class `.is-active` to the ToC. You can use the [included JavaScript utilities](/utilities/javascript) for that.

{% example "static" %}
<div class="toc">
    <div class="toc--header">Table of Contents</div>
    <a href="#" class="toc--entry">
        <div class="toc--badge">
            <span class="badge is-tag is-green">+2</span>
        </div>
        <div class="toc--badge">
            <span class="badge is-tag is-red">-2</span>
        </div>
        <div class="toc--full">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo voluptatem...</p>
            <p>2 days ago by luap42</p>
        </div>
    </a>
    <a href="#" class="toc--entry">
        <div class="toc--badge">
            <span class="badge is-tag is-green">+2</span>
        </div>
        <div class="toc--badge">
            <span class="badge is-tag is-red">-2</span>
        </div>
        <div class="toc--full">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo voluptatem...</p>
            <p>2 days ago by luap42</p>
        </div>
    </a>
</div>
{% endexample %}

This one can be toggled (defaults to: off). Note, that the JS for it is not included with Co-Design, but is only for this documentation.

{% example "toggleable" %}
<div class="toc" id="toc-example-toggle">
    <button class="toc--header" data-toggle="#toc-example-toggle" data-toggle-property="class" data-toggle-value="is-active">Table of Contents</button>
    <a href="#" class="toc--entry">
        <div class="toc--badge">
            <span class="badge is-tag is-green">+2</span>
        </div>
        <div class="toc--badge">
            <span class="badge is-tag is-red">-2</span>
        </div>
        <div class="toc--full">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo voluptatem...</p>
            <p>2 days ago by luap42</p>
        </div>
    </a>
    <a href="#" class="toc--entry">
        <div class="toc--badge">
            <span class="badge is-tag is-green">+2</span>
        </div>
        <div class="toc--badge">
            <span class="badge is-tag is-red">-2</span>
        </div>
        <div class="toc--full">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo voluptatem...</p>
            <p>2 days ago by luap42</p>
        </div>
    </a>
</div>
{% endexample %}

You can also use icons:

{% example "with-icon" %}
<div class="toc is-active" id="toc-example-icon">
    <button class="toc--header" data-toggle="#toc-example-icon" data-toggle-property="class" data-toggle-value="is-active">Table of Contents</button>
    <a href="#" class="toc--entry">
        <div class="toc--icon">
            <i class="fa fa-hashtag"></i>
        </div>
        <div class="toc--full">
            <p>Notices</p>
        </div>
    </a>
    <a href="#" class="toc--entry">
        <div class="toc--icon">
            <i class="fa fa-hashtag"></i>
        </div>
        <div class="toc--full">
            <p>Modals</p>
        </div>
        <div class="toc--badge">
            <span class="badge is-tag is-small is-red">new</span>
        </div>
    </a>
</div>
{% endexample %}