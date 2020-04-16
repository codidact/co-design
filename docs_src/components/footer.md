---
layout: page
title: Footer
description: The footer is shown below every page and contains important links and legal information.
---

## Basic

The footer component is very flexible. You can do both simple and complex footers with Co-Design. Every footer is within a `.footer` element. This should be a `<footer>` for semantic reasons.

The footer element must contain a `.footer--container` element, which contains all the content.

You should consider applying layout container (max width and centered) formatting to the container by giving it the class `.container`

{% example "basic" %}
<footer class="footer">
    <div class="footer--container container">
        <p>&copy; 2020 Your fancy page</p>
    </div>
</footer>
{% endexample %}

Or take a look at this more complex example, which can be made by adding a grid within the footer:

{% example "complex" %}
<footer class="footer">
    <div class="footer--container container">
        <div class="grid">
            <div class="grid--cell is-6 is-12-md is-12-sm">
                <h3>Gibberish Community</h3>
                <ul>
                    <li><a href="#">Home page</a></li>
                    <li><a href="#">Main questions</a></li>
                    <li><a href="#">Main tags</a></li>
                    <li><a href="#">Meta questions</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div class="grid--cell is-6 is-12-md is-12-sm">
                <h3>The Codidact Project</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">See us on GitHub</a></li>
                    <li><a href="#">See us on Discord</a></li>
                </ul>
            </div>
        </div>
        <p>All content copyrighted under the Creative Commons BY SA 4.0 license. Software and design framework are <a href="#">available</a> under open-source licenses.</p>
        <p>Version 42.0.0</p>
    </div>
</footer>
{% endexample %}


## Inverted style

It's also possible to invert the style of a footer, giving it a background instead of a border. This may be a better choice for some designs. To do so, give the footer the class `.is-inverted`.

{% example "inverted" %}
<footer class="footer is-inverted">
    <div class="footer--container container">
        <p>&copy; 2020 Your fancy page</p>
    </div>
</footer>
{% endexample %}