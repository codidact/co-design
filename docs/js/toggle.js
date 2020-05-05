var toggleProperties = {
    display: {
        getValue: function (el, value) { return el.style.display; },
        toggle: function (el, value, defaultValue) {
            el.style.display = (el.style.display == "none") ? defaultValue : "none";
        }
    },
    class: {
        getValue: function (el, value) { value.split(" ").map(function (i) { return [i, el.classList.contains(i)]; }); },
        toggle: function (el, value, defaultValue) {
            value.split(" ").forEach(function (i) { return el.classList.toggle(i); });
        }
    }
};
var Toggle = (function () {
    function Toggle(element) {
        var _this = this;
        this.element = element;
        this.refersToElement = document.querySelector(element.getAttribute("data-toggle"));
        if (element.hasAttribute("data-toggle-property"))
            this.refersToProperty = element.getAttribute("data-toggle-property");
        else
            this.refersToProperty = "display";
        if (element.hasAttribute("data-toggle-value"))
            this.refersToValue = element.getAttribute("data-toggle-value");
        else
            this.refersToValue = "\\auto";
        this.defaultValue = this.getCurrentValue();
        element.addEventListener("click", function () { _this.toggleValue(); });
    }
    Toggle.prototype.getCurrentValue = function () {
        return toggleProperties[this.refersToProperty].getValue(this.refersToElement, this.refersToValue);
    };
    Toggle.prototype.toggleValue = function () {
        toggleProperties[this.refersToProperty].toggle(this.refersToElement, this.refersToValue, this.defaultValue);
    };
    Toggle.find = function (query) {
        var elements = document.querySelectorAll(query);
        var toggles = [];
        for (var i = 0; i < elements.length; i++) {
            toggles.push(new Toggle(elements[i]));
        }
        return toggles;
    };
    return Toggle;
}());
export default Toggle;
;
