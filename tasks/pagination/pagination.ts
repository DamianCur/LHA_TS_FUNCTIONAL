const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

type paginateArrayReturn = number[];

interface ISettings { actualPageIndex: number; entriesOnPage: number } // kiedy masz obiekt = interfejsy

const settings = {
    actualPageIndex: 1,
    entriesOnPage: 5
}

const paginateArray = (dataNumbers: number[], settings: ISettings) => {

    const dataArrayCopy = [...dataNumbers]

    const { actualPageIndex, entriesOnPage } = settings

    const startIndex = actualPageIndex * entriesOnPage

    if (startIndex === 0 || startIndex >= dataArrayCopy.length) throw Error("Invalid values in settings");

    const endIndex = startIndex + entriesOnPage

    const entriesOnSelectedPage = dataArrayCopy.slice(startIndex, endIndex)

    return entriesOnSelectedPage
}



const test =  paginateArray(numbersArray, settings)

console.log(test);