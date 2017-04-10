(function (global) {
    "use strict";
    var App = global.App || {};
    var mathRand = App.MathRand;

    function ColorObject() {
        this.redValue = mathRand(50, 256);
        this.greenValue = mathRand(50, 256);
        this.blueValue = mathRand(50, 256);
    }
    ColorObject.prototype.getValues = function () {
        return {
            redValue: this.redValue,
            greenValue: this.greenValue,
            blueValue: this.blueValue,
        };
    };
    ColorObject.prototype.setNewValue = function () {
        this.redValue = mathRand(50, 256);
        this.greenValue = mathRand(50, 256);
        this.blueValue = mathRand(50, 256);
    };

    App.ColorObject = new ColorObject();
    global.App = App;

})(window);