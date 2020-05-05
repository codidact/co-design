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
export default Dismiss;
;
