---
layout: page
title: Bar
description: The bar is a flexible component shown at the bottom of the screen.
---

You can use the bar for many purposes, for example you can show annotations for the current page, add controls for the whole page, that should be permanently visible or add a [Table of Contents](/specific/toc) into it.

It can contain any content you want. It's not going to become larger than 35% of the screen height, but if it needs less space, it will take less.

A bar can be created by giving it the class `.bar` and adding a `.bar--container` (should be centered with `.container`) into it. A close button can also be added and will be positioned correctly.

{% example "simple" %}
<div class="bar">
    <div class="bar--container container">
        <div class="h-f-r">
            <button class="button is-filled is-large">Save</button>
        </div>
        <p class="h-fw-bold h-c-red-600">You have unsaved changes</p>
    </div>
</div>
{% endexample %}

You can also add more complex contents:

{% example "simple" %}
<div class="bar">
    <button class="button is-close-button">&times;</button>
    <div class="bar--container container">
        <h2>Table of Contents</h2>
        <div class="toc h-bg-white">
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
    </div>
</div>
{% endexample %}

<button class="button is-outlined is-muted" data-toggle="#example-bar" data-toggle-property="class" data-toggle-value="hide">Open an example bar</button>

<div class="bar hide" id="example-bar">
    <button class="button is-close-button" data-toggle="#example-bar" data-toggle-property="class" data-toggle-value="hide">&times;</button>
    <div class="bar--container container">
        <h2>Table of Contents</h2>
        <div class="toc h-bg-white">
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
    </div>
</div>