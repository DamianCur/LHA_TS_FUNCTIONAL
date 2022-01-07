"use strict";
exports.__esModule = true;
var generateArrayWithRandomNumbers = function (howManyNumbers, min, max) {
    var arrayWithRandomNumbers = new Array();
    for (var i = 0; i < howManyNumbers; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        arrayWithRandomNumbers.push(randomNumber);
    }
    return arrayWithRandomNumbers;
};
var generateArrayOfArrays = function (howManyArrays, howManyNumbers, min, max) {
    var arrayOfArrays = new Array();
    for (var i = 0; i < howManyArrays; i++) {
        arrayOfArrays.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
    }
    console.log(arrayOfArrays);
    return arrayOfArrays;
};
generateArrayOfArrays(5, 10, 0, 10);
