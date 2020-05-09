(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    define("toggle", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
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
        exports.default = Toggle;
        ;
    });
    define("dismiss", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var Dismiss = (function () {
            function Dismiss(element) {
                var _this = this;
                this.element = element;
                this.refersToElement = document.querySelector(element.getAttribute("data-dismiss"));
                this.doesSoftDismiss = element.hasAttribute("data-dismiss-soft");
                element.addEventListener("click", function () { _this.dismiss(); });
            }
            Dismiss.prototype.dismiss = function () {
                var _this = this;
                if (!this.doesSoftDismiss || !this.refersToElement.animate) {
                    this.refersToElement.remove();
                }
                else {
                    this.refersToElement.animate([
                        { opacity: 1.0 },
                        { opacity: 0 }
                    ], {
                        duration: Dismiss.softDismissDuration
                    });
                    setTimeout(function () {
                        _this.refersToElement.remove();
                    }, Dismiss.softDismissDuration);
                }
            };
            Dismiss.find = function (query) {
                var elements = document.querySelectorAll(query);
                var toggles = [];
                for (var i = 0; i < elements.length; i++) {
                    toggles.push(new Dismiss(elements[i]));
                }
                return toggles;
            };
            Dismiss.softDismissDuration = 250;
            return Dismiss;
        }());
        exports.default = Dismiss;
        ;
    });
    define("co-design", ["require", "exports", "toggle", "dismiss"], function (require, exports, toggle_js_1, dismiss_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        toggle_js_1.default.find("[data-toggle]");
        dismiss_js_1.default.find("[data-dismiss]");
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();