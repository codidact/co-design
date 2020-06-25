---
layout: page
title: Meter
description: The meter component allows you to visualise some progress or score.
---

Every Meter consists of a `.meter` and a `.meter--bar` within that. There may be other type-specific children. The meter-bar has a `.is-X%` option, which needs to be set to the percentage of the current meter's value. In most cases, you should add the percentage into the `.meter--bar` for accessibility reasons.

## Progress Meter

The progress meter is the most basic meter you can have. It indicates % of completion or progress. Use `.meter.is-progress` for this variant:

{% example "progress" %}
<div class="meter is-progress">
    <div class="meter--bar is-72%">72%</div>
</div>
{% endexample %}

You can also add a label, by adding a `.meter--label` element.

{% example "progress" %}
<div class="meter is-progress" style="max-width: 400px;">
    <div class="meter--bar is-48%"></div>
    <div class="meter--label">48%</div>
</div>
{% endexample %}

## Question Score Meter

There is supposed to be a meter component indicating the relative question score. The value of this meter is going to be influenced by such things as votes, close/lock status and answers. Use `.meter.is-question-score` for this component:

{% example "question-score" %}
<div class="meter is-question-score">
    <div class="meter--bar is-72%">72%</div>
</div>
{% endexample %}