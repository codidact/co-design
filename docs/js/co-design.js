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
                this.slideTriggerNode = element;
                this.refersToElement = document.querySelector(element.getAttribute("data-header-slide"));
                if (this.refersToElement == null) {
                    throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
                }
                this.closeSlideOnClickOutside();
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
            HeaderSlideToggle.prototype.closeSlide = function () {
                this.refersToElement.classList.remove("is-active");
                this.element.classList.remove("is-active");
            };
            HeaderSlideToggle.prototype.closeSlideOnClickOutside = function () {
                var _this = this;
                var slideSelector = this.slideTriggerNode.getAttribute("data-header-slide");
                document.addEventListener("click", function (e) {
                    var target = e.target;
                    var parentSlide = target.closest(slideSelector);
                    if (parentSlide !== _this.refersToElement && _this.slideTriggerNode !== target) {
                        _this.closeSlide();
                        e.preventDefault();
                    }
                });
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
    define("droppanel", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var DropPanel = (function () {
            function DropPanel(element) {
                var _this = this;
                this.element = element;
                this.panelTriggerNode = element;
                this.refersToElement = document.querySelector(element.getAttribute("data-drop"));
                if (this.refersToElement == null) {
                    throw "Missing target for DropPanel: " + element.getAttribute("data-drop");
                }
                this.elementActiveClass = element.hasAttribute("data-drop-self-class-toggle") ? element.getAttribute("data-drop-self-class-toggle") : null;
                this.forcedDirection = element.hasAttribute("data-drop-force-dir") ? element.getAttribute("data-drop-force-dir") : null;
                this.closePanelOnClickOutside();
                element.addEventListener("click", function (e) { _this.toggleDropPanel(); e.preventDefault(); });
            }
            DropPanel.prototype.toggleDropPanel = function () {
                this.refersToElement.classList.toggle("is-active");
                if (this.elementActiveClass) {
                    this.element.classList.toggle(this.elementActiveClass);
                }
                if (this.refersToElement.classList.contains("is-active")) {
                    this.refersToElement.style.top = null;
                    this.refersToElement.style.bottom = null;
                    this.refersToElement.style.left = null;
                    this.refersToElement.style.right = null;
                    var rect = this.element.getBoundingClientRect();
                    var isRight = (rect.left + rect.width / 2) > document.body.clientWidth / 2;
                    var refersToElementWidth = this.refersToElement.getBoundingClientRect().width;
                    var refersToElementHeight = this.refersToElement.getBoundingClientRect().width;
                    var offset = 0;
                    if (isRight) {
                        this.refersToElement.style.right = (document.body.clientWidth - rect.right) + "px";
                    }
                    else {
                        this.refersToElement.style.left = (rect.left) + "px";
                    }
                    if (document.body.clientWidth < (refersToElementWidth + offset)) {
                        this.refersToElement.style.left = "0px";
                        this.refersToElement.style.right = "0px";
                        this.refersToElement.style.maxWidth = "100%";
                    }
                    var isTop = void 0;
                    if (this.forcedDirection == "up") {
                        isTop = false;
                    }
                    else if (this.forcedDirection == "down") {
                        isTop = true;
                    }
                    else {
                        isTop = (rect.top + rect.height / 2) <= (window.innerHeight) / 2;
                    }
                    if (isTop) {
                        this.refersToElement.style.top = (rect.bottom + window.scrollY + DropPanel.offsetInPixel) + "px";
                    }
                    else {
                        this.refersToElement.style.bottom = (window.innerHeight - window.scrollY - rect.top + DropPanel.offsetInPixel) + "px";
                    }
                }
            };
            DropPanel.prototype.closePanelOnClickOutside = function () {
                var _this = this;
                var dropPanelSelector = this.panelTriggerNode.getAttribute("data-drop");
                document.addEventListener("click", function (e) {
                    var target = e.target;
                    var parentDropdown = target.closest(dropPanelSelector);
                    if (parentDropdown !== _this.refersToElement && _this.panelTriggerNode !== target) {
                        _this.closeDropPanel();
                        e.preventDefault();
                    }
                });
            };
            DropPanel.prototype.closeDropPanel = function () {
                this.refersToElement.classList.remove("is-active");
                if (this.elementActiveClass) {
                    this.element.classList.remove(this.elementActiveClass);
                }
            };
            DropPanel.find = function (query) {
                var elements = document.querySelectorAll(query);
                var DropPanels = [];
                for (var i = 0; i < elements.length; i++) {
                    DropPanels.push(new DropPanel(elements[i]));
                }
                return DropPanels;
            };
            DropPanel.offsetInPixel = 2;
            return DropPanel;
        }());
        exports.default = DropPanel;
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
    define("co-design", ["require", "exports", "toggle", "dismiss", "header", "droppanel", "modal"], function (require, exports, toggle_js_1, dismiss_js_1, header_js_1, droppanel_js_1, modal_js_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        toggle_js_1.default.find("[data-toggle]");
        dismiss_js_1.default.find("[data-dismiss]");
        modal_js_1.ModalToggle.find("[data-modal]");
        droppanel_js_1.default.find("[data-drop]");
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