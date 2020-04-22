---
layout: page
title: Color utilities
description: Co-Design provides a powerful and functional color system. All colors can be overriden in the "_child.scss" file.
---

## Primary color

Every site has a primary color. That one is part of a sites identity and brand.

Co-Design defaults to Codidacts brand color <span class="has-color-white has-background-color-primary has-font-weight-bold">#4B68FF</span>, however you should change it to your sites brand color.

You can access the primary color with these classes:

- `.has-color-primary` for <span class="has-color-primary">foreground</span>.
- `.has-background-color-primary` for <span class="has-background-color-primary has-color-white">background</span>.
- `.has-border-color-primary` for <span class="has-border-width-1 has-border-style-solid has-border-color-primary">border</span>.


You can also append these classes with `-X`, where X is any of these numbers, to get these shades:

<div class="widget">
    <div class="widget--header">Primary color set</div>
    <div class="widget--body has-background-color-primary-050">050</div>
    <div class="widget--body has-background-color-primary-100">100</div>
    <div class="widget--body has-background-color-primary-200">200</div>
    <div class="widget--body has-background-color-primary-300 has-color-white">300</div>
    <div class="widget--body has-background-color-primary-400 has-color-white">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-primary-500 has-color-white">500</div>
    <div class="widget--body has-background-color-primary-600 has-color-white">600</div>
    <div class="widget--body has-background-color-primary-700 has-color-white">700</div>
    <div class="widget--body has-background-color-primary-800 has-color-white">800</div>
</div>

## Secondary colors

Secondary colors represent a "mood" of your site. Something worked, failed, needs your attention, ... Co-Design has four secondary colors:

<div class="widget">
    <div class="widget--header">
        Red color set
        <div class="has-font-size-caption">Use red, when something is wrong, is urgent, dangerous or deleted.</div>
    </div>
    <div class="widget--body has-background-color-red-050">050</div>
    <div class="widget--body has-background-color-red-100">100</div>
    <div class="widget--body has-background-color-red-200">200</div>
    <div class="widget--body has-background-color-red-300 has-color-white">300</div>
    <div class="widget--body has-background-color-red-400 has-color-white">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-red-500 has-color-white">500</div>
    <div class="widget--body has-background-color-red-600 has-color-white">600</div>
    <div class="widget--body has-background-color-red-700 has-color-white">700</div>
    <div class="widget--body has-background-color-red-800 has-color-white">800</div>
</div>

<div class="widget">
    <div class="widget--header">
        Green color set
        <div class="has-font-size-caption">Use green, when something is successful or no action is needed.</div>
    </div>
    <div class="widget--body has-background-color-green-050">050</div>
    <div class="widget--body has-background-color-green-100">100</div>
    <div class="widget--body has-background-color-green-200">200</div>
    <div class="widget--body has-background-color-green-300 has-color-white">300</div>
    <div class="widget--body has-background-color-green-400 has-color-white">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-green-500 has-color-white">500</div>
    <div class="widget--body has-background-color-green-600 has-color-white">600</div>
    <div class="widget--body has-background-color-green-700 has-color-white">700</div>
    <div class="widget--body has-background-color-green-800 has-color-white">800</div>
</div>

<div class="widget">
    <div class="widget--header">
        Yellow color set
        <div class="has-font-size-caption">Use yellow, when something might be wrong, needs your attention or requires action.</div>
    </div>
    <div class="widget--body has-background-color-yellow-050">050</div>
    <div class="widget--body has-background-color-yellow-100">100</div>
    <div class="widget--body has-background-color-yellow-200">200</div>
    <div class="widget--body has-background-color-yellow-300">300</div>
    <div class="widget--body has-background-color-yellow-400">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-yellow-500">500</div>
    <div class="widget--body has-background-color-yellow-600 has-color-white">600</div>
    <div class="widget--body has-background-color-yellow-700 has-color-white">700</div>
    <div class="widget--body has-background-color-yellow-800 has-color-white">800</div>
</div>

<div class="widget">
    <div class="widget--header">
        Teal color set
        <div class="has-font-size-caption">Use teal for neutral information, where your attention or action may or may not be required.</div>
    </div>
    <div class="widget--body has-background-color-teal-050">050</div>
    <div class="widget--body has-background-color-teal-100">100</div>
    <div class="widget--body has-background-color-teal-200">200</div>
    <div class="widget--body has-background-color-teal-300 has-color-white">300</div>
    <div class="widget--body has-background-color-teal-400 has-color-white">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-teal-500 has-color-white">500</div>
    <div class="widget--body has-background-color-teal-600 has-color-white">600</div>
    <div class="widget--body has-background-color-teal-700 has-color-white">700</div>
    <div class="widget--body has-background-color-teal-800 has-color-white">800</div>
</div>


## Tertiary colors

The tertiary colors are black, gray and white.

You can access the tertiary colors with these classes:

- `.has-color-black` for <span class="has-color-black">foreground</span>.
- `.has-background-color-black` for <span class="has-background-color-black has-color-white">background</span>.
- `.has-border-color-black` for <span class="has-border-width-1 has-border-style-solid has-border-color-black">border</span>.

- `.has-color-tertiary` for <span class="has-color-tertiary">foreground</span>.
- `.has-background-color-tertiary` for <span class="has-background-color-tertiary has-color-white">background</span>.
- `.has-border-color-tertiary` for <span class="has-border-width-1 has-border-style-solid has-border-color-tertiary">border</span>.

- `.has-color-white` for <span class="has-color-tertiary-050">foreground</span>. (using gray here for visibility)
- `.has-background-color-white` for <span class="has-background-color-tertiary-050 has-color-white">background</span>. (using gray here for visibility)
- `.has-border-color-white` for <span class="has-border-width-1 has-border-style-solid has-border-color-tertiary-050">border</span>. (using gray here for visibility)

<p>For "tertiary" (but not "black" and "white"), you can also append the classes with `-X`, where X is any of these numbers, to get these shades:</p>

<div class="widget">
    <div class="widget--header">
        Tertiary color set
    </div>
    <div class="widget--body has-background-color-tertiary-050">050</div>
    <div class="widget--body has-background-color-tertiary-100">100</div>
    <div class="widget--body has-background-color-tertiary-200">200</div>
    <div class="widget--body has-background-color-tertiary-300 has-color-white">300</div>
    <div class="widget--body has-background-color-tertiary-400 has-color-white">400 (equivalent to no suffix)</div>
    <div class="widget--body has-background-color-tertiary-500 has-color-white">500</div>
    <div class="widget--body has-background-color-tertiary-600 has-color-white">600</div>
    <div class="widget--body has-background-color-tertiary-700 has-color-white">700</div>
    <div class="widget--body has-background-color-tertiary-800 has-color-white">800</div>
</div>
</main>