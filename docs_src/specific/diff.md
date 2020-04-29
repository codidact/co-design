---
layout: page
title: Diff
description: The diff component should be used to indicate, that some text has been changed.
---

There are two views, a diff component might have: split view and inline view. If your application supports more than one view, use gutterless button lists to switch between them.

## Split view

To create a split view diff, you need to have a `.diff` container, which contains `.diff-section`s. These group close changes, so that for example one paragraph would be one. This diff section contains exactly two children: one `.diff-old` and one `.diff-new`. These may or may not have changes (for example, an addition would only change `.diff-new`). If they have changes, then they get the class `.is-changed`. The changes can be denoted inline using `<del>` and `<ins>`.

Often, sections without any changes are not included by default. If you want to have them, you need to add a `.diff-load-more-button` button, preferably a muted default one.

{% example "split" %}
<div class="diff">
    <div class="diff-section">
        <div class="diff-old is-changed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <del>Lorem ipsum dolor sit amet</del>.
        </div>
        <div class="diff-new is-changed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <ins>optimus res</ins>.
        </div>
    </div>
    <button class="diff-load-more-button button is-muted">Load more</button>
</div>
{% endexample %}

## Inline view

To create an inline view diff, you need to have a `.diff` container, which contains `.diff-section`s. These group close changes, so that for example one paragraph would be one. This diff section contains exactly one child: a `.diff-inline`. This one may or may not have changes. If it has changes, then it gets the class `.is-changed`. The changes should be denoted inline using `<del>` and `<ins>`.

Often, sections without any changes are not included by default. If you want to have them, you need to add a `.diff-load-more-button` button, preferably a muted default one.

{% example "inline" %}
<div class="diff">
    <div class="diff-section">
        <div class="diff-inline is-changed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <del>Lorem ipsum dolor sit amet</del><ins>optimus res</ins>.
        </div>
    </div>
    <button class="diff-load-more-button button is-muted">Load more</button>
</div>
{% endexample %}