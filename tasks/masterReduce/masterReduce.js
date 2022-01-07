var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var dataArray = [1, 2, 3, 4, 5, 6, 78, 9, 89];
var mapFn = function (array, callback) {
    var arrayClone = __spreadArray([], array, true);
    var result = arrayClone.reduce(function (total, el, i, arr) {
        // jak pozbyć się tego błędu, czemu akumulator ma typ never
        var mapedElement = callback(el, i, arr);
        return __spreadArray(__spreadArray([], total, true), [mapedElement], false);
    }, []);
    return result;
};
var filterFn = function (array, callback) {
    var arrayClone = __spreadArray([], array, true);
    var result = arrayClone.reduce(function (accumulator, el, i, array) {
        var filteredElement = callback(el, i, array);
        if (filteredElement) {
            return __spreadArray(__spreadArray([], accumulator, true), [el], false);
        }
        return __spreadArray([], accumulator, true);
    }, []);
    return result;
};
