define("toggle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Toggle = (function () {
        function Toggle(element) {
            this.element = element;
            this.refersToElement = document.querySelectorAll(element.getAttribute("data-toggle"));
            if (element.hasAttribute("data-toggle-property"))
                this.refersToProperty = element.getAttribute("data-toggle-property");
            else
                this.refersToProperty = "display";
            if (element.hasAttribute("data-toggle-value"))
                this.refersToValue = element.getAttribute("data-toggle-value");
            else
                this.refersToValue = "\\auto";
            this.defaultValue = this.getCurrentValue();
            element.addEventListener("click", this.toggleValue);
        }
        Toggle.prototype.getCurrentValue = function () {
            return null;
        };
        Toggle.prototype.toggleValue = function () {
            return null;
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
    exports.default = Toggle;
    ;
});
define("co-design", ["require", "exports", "toggle"], function (require, exports, toggle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    toggle_1.default.find("[data-toggle]");
});
