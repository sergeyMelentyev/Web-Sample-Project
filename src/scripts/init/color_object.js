(function (global) {
    "use strict";
    var App = global.App || {};
    var mathRand = App.MathRand;

    function ColorObject() {
        this.redValue = mathRand(0, 256);
        this.greenValue = mathRand(0, 256);
        this.blueValue = mathRand(0, 256);
    }
    ColorObject.prototype.getValues = function () {
        return {
            redValue: this.redValue,
            greenValue: this.greenValue,
            blueValue: this.blueValue,
        };
    };
    ColorObject.prototype.setNewValue = function () {
        this.redValue = mathRand(0, 256);
        this.greenValue = mathRand(0, 256);
        this.blueValue = mathRand(0, 256);
    };

    App.ColorObject = new ColorObject();
    global.App = App;

})(window);