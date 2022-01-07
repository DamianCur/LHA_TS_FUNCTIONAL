var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var randomiseChunkLength = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getArrayOfChunksNumber = function (arr) {
    var arrayLength = arr.length; // 20
    var result = []; // [5,4,6,5]
    while (true) {
        var randomNumber = randomiseChunkLength(4, 7);
        arrayLength -= randomNumber;
        result.push(randomNumber);
        if (arrayLength <= -1)
            return getArrayOfChunksNumber(arr);
        if (arrayLength === 0)
            return result;
    }
};
var aggregateIntoChunks = function (array) {
    var arrayClone = __spreadArray([], array, true);
    var chunks = getArrayOfChunksNumber(arrayClone); // [5,4,6,5]
    var arrayOfChunks = chunks.map(function (el) {
        var randomnumber = el; // {min: 4, max: 7}
        if (arrayClone.length > randomnumber) {
            return arrayClone.splice(0, randomnumber);
        }
        else {
            return arrayClone;
        }
    });
    return arrayOfChunks;
};
var test2 = aggregateIntoChunks(alphabet);
console.log(test2);
