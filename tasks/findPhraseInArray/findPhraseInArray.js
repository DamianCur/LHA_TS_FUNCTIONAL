"use strict";
exports.__esModule = true;
var arrayOfRandomStrings = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "TUTAJ", "jabułko", "gruszka", "arbuz"];
var findPhraseInArray = function (array, phrase) {
    var arrOfFoundPhrases = [];
    array.map(function (stringElement, index) {
        if (stringElement.toUpperCase().includes(phrase.toUpperCase())) {
            var foundElement = [index, stringElement];
            arrOfFoundPhrases.push(foundElement);
        }
    });
    console.log(arrOfFoundPhrases);
    return arrOfFoundPhrases;
};
findPhraseInArray(arrayOfRandomStrings, "tut");
