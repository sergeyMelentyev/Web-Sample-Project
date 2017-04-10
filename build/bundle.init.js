(function (global) {
    "use strict";
    var App = global.App || {};

    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    App.MathRand = getRandomInt;
    global.App = App;

})(window);
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
(function (global) {
    "use strict";

    var App = global.App || {};
    var mathRand = App.MathRand;

    function Game() {
        this.game_bixes = [];
    }
    Game.prototype.newLevel = function(level) {
        if (level === "hard")
            this.game_bixes = createGame(6);
        else
            this.game_bixes = createGame(3);
    };
    function createGame(boxes) {
        var arr = [];
        var temp_color_obj = App.ColorObject;
        for (var i = 0; i < boxes; i++) {
            (function (j) {
                temp_color_obj.setNewValue();
                arr[j] = temp_color_obj.getValues();
            })(i);
        }
        var tempIndex = mathRand(0, boxes);
        arr[tempIndex] = App.ColorObject;
        return arr;
    }

    var game = new Game();
    game.newLevel("hard");

    App.Game = game;
    global.App = App;

})(window);