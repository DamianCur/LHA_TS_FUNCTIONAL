const dataArray = [1, 2, 3, 4, 5, 6, 78, 9, 89]


type arrayInputData<T> = T[];
type mapCallback<T, G> = (element: T, index: number, array: T[]) => G;


const mapFn = <T, G>(array: arrayInputData<T>, callback: mapCallback<T, G>) => {

    const arrayClone = [...array];

    const result = arrayClone.reduce((total, el, i, arr) => {
        /* jak pozbyć się tego błędu, 
        czemu akumulator ma typ never,
        użyć enuma do otypowania akumulatora?
        
        */
        const mapedElement = callback(el, i, arr)
        return [...total, mapedElement]
    }, [] as G[])
    return result
}

type filterCallback<T> = (element: T, index: number, array: T[]) => T;

const filterFn = <T>(array: arrayInputData<T>, callback: filterCallback<T>) => {

    const arrayClone = [...array]

    const result = arrayClone.reduce((accumulator: T[], el, i, array) => {
        const filteredElement = callback(el, i, array);
        return filteredElement ? [...accumulator, el] : accumulator
    }, [])
    return result
}

type everyCallback<T> = (element: T, index: number, array: T[]) => boolean

const everyFn = <T>(array: arrayInputData<T>, callback: everyCallback<T>) => {
    const arrayClone = [...array];

    // [1,2,3,4,5]

    const isInArray = arrayClone.reduce((_, currentValue, i, arr) => {
        const everyMach = callback(currentValue, i, arr)
        if (!everyMach) arr.splice(i, arr.length)
        return everyMach
    }, true)

    return isInArray
}


type someCallback<T> = (element: T, index: number, array: T[]) => boolean

const someFn = <T>(array: arrayInputData<T>, callback: someCallback<T>) => {
    const arrayClone = [...array];

    const someMatch = arrayClone.reduce((accumulator, currentValue, i, array) => {
        const isOnlyOneIn = callback(currentValue, i, array)
        if (isOnlyOneIn) {
            return true

        }
        return accumulator
    }, false)
    return someMatch
}