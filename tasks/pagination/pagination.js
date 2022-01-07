var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var paginateArray = function (dataNumbers, entriesOnPage) {
    var result = dataNumbers.slice(entriesOnPage.actualPageIndex, entriesOnPage.entriesOnPage);
    console.log(result);
    return result;
};
var settings = {
    actualPageIndex: 0,
    entriesOnPage: 10
};
paginateArray(numbersArray, settings);
