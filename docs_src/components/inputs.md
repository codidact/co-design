---
layout: page
title: Form Inputs
---

## Inputs (Text boxes)
Input elements are for single-value or single-line contents. They are created by the `<input>` HTML tag in combination with the `.form-element` CSS class.

When you have form validation that failed for this input, you can mark it as such with the `.is-danger` modifier class.

{% example "inputs" %}
<p>Normal form input:</p>
<input class="form-element">

<p>Date input:</p>
<input class="form-element" type="date">

<p>Form input with failed validation:</p>
<input class="form-element is-danger">
{% endexample %}


## Text areas

Text areas are multiline inputs. They are created by the `textarea` HTML tag in combination with the `.form-element` CSS class.

When you have form validation that failed for this text area, you can mark it as such with the `.is-danger` modifier class.

It's also possible to change the size of the text area. There are two modifiers for this: `.is-large` and `.is-small`.

{% example "textarea" %}
<p>Normal text area:</p>
<textarea class="form-element"></textarea>

<p>Small textarea:</p>
<textarea class="form-element is-small"></textarea>

<p>Large textarea:</p>
<textarea class="form-element is-large"></textarea>

<p>Text area with failed validation:</p>
<textarea class="form-element is-danger"></textarea>
{% endexample %}

## Labels

Labels are important for accessibility. They should describe the form element in a way, that allows everyone to understand, what should be written into it, regardless of any limitations.

They are created by the `label` HTML tag in combination with the `.form-element` CSS class.

You can add a `.form-caption` directly below it for small explanations.

{% example "labels" %}
<label for="labels-example--input" class="form-element">Label for an input</label>
<div class="form-caption">with an explanatory caption</div>
<input class="form-element" id="labels-example--input">

<label for="labels-example--textarea" class="form-element">Label for an textarea</label>
<textarea class="form-element" id="labels-example--textarea"></textarea>
{% endexample %}


## Radio buttons and Checkboxes

Radio buttons and checkboxes are special types of inputs. However the normal input presentation would not be appropriate for them. Therefore you need to give them the class `.form-radio-element` or `.form-checkbox-element` for radio buttons or checkboxes, respectively.

{% example "radio-checkbox" %}
<input type="radio" class="form-radio-element">
<input type="checkbox" class="form-checkbox-element">
{% endexample %}

## Select elements

Select elements allow the user to choose one or many from a set of options. They are created by the `<select>` HTML tag in combination with the `.form-element` CSS class (with the options using the `<option>` tag).

When you have form validation that failed for this select, you can mark it as such with the `.is-danger` modifier class.

{% example "selects" %}
<p>Normal select:</p>
<select class="form-element">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
</select>
<p>Select with [multiple]:</p>
<select class="form-element" multiple>
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
</select>
<p>Select with failed validation:</p>
<select class="form-element is-danger">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
</select>
{% endexample %}