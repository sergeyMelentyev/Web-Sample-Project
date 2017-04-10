(function (global) {
    "use strict";

    var App = global.App;
    var colorObj = App.ColorObject;

    var headerTarget = document.querySelector('header');
    headerTarget.appendChild(createHeader());

    function createHeader() {
        var fragment = document.createDocumentFragment();

        var firstName = document.createElement('h2');
        firstName.setAttribute('class', 'gameName');
        firstName.textContent = "the great".toUpperCase();
        var lastName = document.createElement('h2');
        lastName.setAttribute('class', 'gameName');
        lastName.textContent = "guessing game".toUpperCase();

        var colorTarget = document.createElement('h1');
        colorTarget.setAttribute('id', 'colorTarget');
        colorTarget.textContent = (
            "rgb" + "(" + colorObj.redValue + ","
                        + " " + colorObj.greenValue + ","
                        + " " + colorObj.blueValue + ")").toUpperCase();

        fragment.appendChild(firstName);
        fragment.appendChild(colorTarget);
        fragment.appendChild(lastName);
        return fragment;
    }

    document.querySelector('header').style.backgroundColor = 'rgb(' +
        colorObj.redValue + ',' + colorObj.greenValue + ',' + colorObj.blueValue + ')';

})(window);