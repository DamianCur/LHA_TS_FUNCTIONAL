"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var forEachMethod = function (array, callback) {
    var arrayCopy = __spreadArray([], array, true);
    for (var i = 0; i < arrayCopy.length; i++) {
        arrayCopy[i].callback();
        //to chyba jest zly zapis??
    }
};
//czy można coś wstawić zamiast "any"
//MAP
var mapMethod = function (arrayElement, index, array, callback) {
    var arrayCopy = __spreadArray([], array, true);
    var arrayWithModyfiedElements = [];
    for (var i = 0; i < arrayCopy.length; i++) {
        var modyfiedElement = callback(arrayCopy[i]);
        arrayWithModyfiedElements.push(modyfiedElement);
    }
    return arrayWithModyfiedElements;
};
//entries
var entriesMethod = function (array) {
    var arrayCopy = __spreadArray([], array, true);
    var arrayOfEntries = [];
    for (var i = 0; i < arrayCopy.length; i++) {
        var singleEntry = [i, arrayCopy[i]];
        arrayOfEntries.push(singleEntry);
    }
    console.log(arrayOfEntries);
    return arrayOfEntries;
};
var test = ["asdas", "asdsad"];
entriesMethod(test);
