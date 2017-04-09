(function (global) {
    "use strict";
    var App = global.App || {};

    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    App.MathRand = getRandomInt;
    global.App = App;

})(window);