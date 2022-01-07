
//FOR EACH
export { }

type forEachCallback<T> = (element: T, index: number, array: T[]) => void;
type mapMethodCallback<T, G> = (element: T, index: number, array: T[]) => G;
type filterMethodCallback<T> = (element: T, index: number, array: T[]) => T[];
type everyMethodCallback<T> = (element: T, index: number, array: T[]) => boolean
type someMethodCallback<T> = (element: T, index: number, array: T[]) => boolean
type reduceMethodCallback<T, G> = (accumulator: (T | G), element: T, index: number, array: T[]) => G;

const forEachMethod = <T>(array: T[], callback: forEachCallback<T>) => {

    const arrayCopy = [...array]

    for (let i = 0; i < arrayCopy.length; i++) {
        callback(arrayCopy[i], i, arrayCopy)
    }
}


//MAP


const mapMethod = <T, G>(array: T[], callback: mapMethodCallback<T, G>) => {

    const arrayCopy = [...array]
    const arrayWithModyfiedElements: G[] = []

    for (let i = 0; i < arrayCopy.length; i++) {
        const modyfiedElement = callback(arrayCopy[i], i, arrayCopy)
        arrayWithModyfiedElements.push(modyfiedElement)
    }

    return arrayWithModyfiedElements
}

//entries

type elementTuple<T> = [number, T];

const entriesMethod = <T>(array: T[]) => {

    const arrayCopy = [...array]
    const arrayOfEntries: elementTuple<T>[] = []

    for (let i = 0; i < arrayCopy.length; i++) {
        const singleEntry: elementTuple<T> = [i, arrayCopy[i]]
        arrayOfEntries.push(singleEntry)
    }

    return arrayOfEntries
}


//FILTER



const filterMethod = <T>(array: T[], callback: filterMethodCallback<T>) => {

    const arrayCopy = [...array]
    const filteredItems: T[] = []

    for (let i = 0; i < arrayCopy.length; i++) {
        const condition = callback(arrayCopy[i], i, arrayCopy)
        if (condition) {
            filteredItems.push(arrayCopy[i])
        }
    }
    return filteredItems
}
//EVERY

const everyMethod = <T>(array: T[], callback: everyMethodCallback<T>) => {
    const arrayCopy = [...array]
    let result: boolean = true

    for (let i = 0; i < arrayCopy.length; i++) {
        if (!callback(arrayCopy[i], i, arrayCopy)) {
            result = false;
            return;
        }
        result = true
    }
    return result
}

//SOME 

const someMethod = <T>(array: T[], callback: someMethodCallback<T>) => {
    const arrayCopy = [...array]
    let result: boolean = true

    for (let i = 0; i < arrayCopy.length; i++) {
        if (callback(arrayCopy[i], i, arrayCopy)) {
            result = true;
            return;
        }
        result = false
    }
    return result
}

const reduceMethod = <T, G>(array: T[], callback: reduceMethodCallback<T, G>, initialValue: G) => {

    const arrayCopy = [...array]

    let accumulator: (T | G) = initialValue
    let startingIndex = 0

    if (typeof initialValue === undefined) {
        accumulator = arrayCopy[1]
        startingIndex = 1
    }

    for (let startingIndex = 0; startingIndex < arrayCopy.length; startingIndex++) {
        const result = callback(accumulator, arrayCopy[startingIndex], startingIndex, arrayCopy)
    }

    return
}
// reduce - akumulator
// initialValue G
// array T[]

// G | T

// jeżeli nie mamy - akumulator array[0], jeżeli mamy initalValue - akumulator initalValue
// jeżeli nie mamy - index 1, jeżeli mamy - index 0

// [1,2,3].reduce((acc,el) => acc + el) // 7

