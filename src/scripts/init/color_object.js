(function (global) {
    "use strict";
    var App = global.App || {};

    function ColorObject() {
        this.redValue = getRandomInt(0, 256);
        this.greenValue = getRandomInt(0, 256);
        this.blueValue = getRandomInt(0, 256);
    }

    ColorObject.prototype.getValues = function () {
        return {
            redValue: this.redValue,
            greenValue: this.greenValue,
            blueValue: this.blueValue,
        };
    };

    ColorObject.prototype.setNewValue = function () {
        this.redValue = getRandomInt(0, 256);
        this.greenValue = getRandomInt(0, 256);
        this.blueValue = getRandomInt(0, 256);
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    App.ColorObject = new ColorObject();
    global.App = App;

})(window);