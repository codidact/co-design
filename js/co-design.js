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
                    value.split(" ").forEach(function (className) { return el.classList.toggle(className); });
                }
            }
        };
        var Toggle = (function () {
            function Toggle(element) {
                var _this = this;
                this.element = element;
                this.refersToElement = document.querySelector(element.getAttribute("data-toggle"));
                if (this.refersToElement == null) {
                    throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
                }
                this.refersToProperty = element.getAttribute("data-toggle-property") || "display";
                this.refersToValue = element.getAttribute("data-toggle-value") || "\\auto";
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
                if (this.refersToElement == null) {
                    throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
                }
                this.doesSoftDismiss = element.hasAttribute("data-dismiss-soft");
                element.addEventListener("click", function (e) { _this.dismiss(); e.preventDefault(); });
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
                        duration: Dismiss.softDismissDurationinMilliseconds
                    });
                    setTimeout(function () {
                        _this.refersToElement.remove();
                    }, Dismiss.softDismissDurationinMilliseconds);
                }
            };
            Dismiss.find = function (query) {
                var elements = document.querySelectorAll(query);
                var dismisses = [];
                for (var i = 0; i < elements.length; i++) {
                    dismisses.push(new Dismiss(elements[i]));
                }
                return dismisses;
            };
            Dismiss.softDismissDurationinMilliseconds = 250;
            return Dismiss;
        }());
        exports.default = Dismiss;
        ;
    });
    define("header", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var Header = (function () {
            function Header(element) {
                this.element = element;
                HeaderSlideToggle.find(element, "[data-header-slide]");
            }
            Header.apply = function () {
                var elements = document.querySelectorAll(".header");
                var headers = [];
                for (var i = 0; i < elements.length; i++) {
                    headers.push(new Header(elements[i]));
                }
                return headers;
            };
            return Header;
        }());
        exports.default = Header;
        ;
        var HeaderSlideToggle = (function () {
            function HeaderSlideToggle(element) {
                var _this = this;
                this.element = element;
                this.refersToElement = document.querySelector(element.getAttribute("data-header-slide"));
                if (this.refersToElement == null) {
                    throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
                }
                element.addEventListener("click", function (e) { _this.toggle(); e.preventDefault(); });
            }
            HeaderSlideToggle.prototype.toggle = function () {
                this.refersToElement.classList.toggle("is-active");
                this.element.classList.toggle("is-active");
                var rect = this.element.getBoundingClientRect();
                this.refersToElement.style.top = (window.scrollY + rect.top + rect.height) + "px";
                this.refersToElement.style.maxWidth = "";
                this.refersToElement.style.left = "";
                this.refersToElement.style.right = "";
                var isRight = (rect.left + rect.width / 2) > document.body.clientWidth / 2;
                var refersToElementWidth = this.refersToElement.getBoundingClientRect().width;
                var offset = 0;
                if (isRight) {
                    this.refersToElement.style.right = (document.body.clientWidth - rect.right) + "px";
                    offset = document.body.clientWidth - rect.right;
                }
                else {
                    this.refersToElement.style.left = (rect.left) + "px";
                    offset = rect.left;
                }
                if (document.body.clientWidth < (refersToElementWidth + offset)) {
                    this.refersToElement.style.left = "0px";
                    this.refersToElement.style.right = "0px";
                    this.refersToElement.style.maxWidth = "100%";
                }
            };
            HeaderSlideToggle.find = function (container, query) {
                var elements = container.querySelectorAll(query);
                var headerslidetoggles = [];
                for (var i = 0; i < elements.length; i++) {
                    headerslidetoggles.push(new HeaderSlideToggle(elements[i]));
                }
                return headerslidetoggles;
            };
            return HeaderSlideToggle;
        }());
        exports.HeaderSlideToggle = HeaderSlideToggle;
        ;
    });
    define("modal", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var Modal = (function () {
            function Modal(element) {
                this.element = element;
                this.isPositionedAbsolute = this.element.classList.contains("is-with-backdrop");
                this.isDanger = this.element.classList.contains("is-danger");
            }
            Modal.prototype.toggle = function () {
                if (!this.isPositionedAbsolute) {
                    this.element.style.top = document.scrollingElement.scrollTop + "px";
                }
                this.element.classList.toggle("is-active");
            };
            Modal.find = function (query) {
                var elements = document.querySelectorAll(query);
                var toggles = [];
                for (var i = 0; i < elements.length; i++) {
                    toggles.push(new Modal(elements[i]));
                }
                return toggles;
            };
            return Modal;
        }());
        exports.Modal = Modal;
        ;
        var ModalToggle = (function () {
            function ModalToggle(element) {
                var _this = this;
                this.element = element;
                this.modal = new Modal(document.querySelector(element.getAttribute("data-modal")));
                element.addEventListener("click", function (e) { _this.modal.toggle(); e.preventDefault(); });
            }
            ModalToggle.find = function (query) {
                var elements = document.querySelectorAll(query);
                var modaltoggles = [];
                for (var i = 0; i < elements.length; i++) {
                    modaltoggles.push(new ModalToggle(elements[i]));
                }
                return modaltoggles;
            };
            return ModalToggle;
        }());
        exports.ModalToggle = ModalToggle;
        ;
    });
    define("co-design", ["require", "exports", "toggle", "dismiss", "header", "modal"], function (require, exports, toggle_js_1, dismiss_js_1, header_js_1, modal_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        toggle_js_1.default.find("[data-toggle]");
        dismiss_js_1.default.find("[data-dismiss]");
        modal_js_1.ModalToggle.find("[data-modal]");
        header_js_1.default.apply();
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