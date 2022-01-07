
const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const randomiseChunkLength = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getArrayOfChunksNumber = (arr: string[]): number[] => {
    let arrayLength = arr.length // 20
    const result: number[] = [] // [5,4,6,5]

    while (true) {
        const randomNumber = randomiseChunkLength(4, 7);
        arrayLength -= randomNumber
        result.push(randomNumber)

        if (arrayLength <= -1) return getArrayOfChunksNumber(arr)

        if (arrayLength === 0) return result
    }
}

const aggregateIntoChunks = (array: string[]) => {
   
    const arrayClone = [...array]


    const chunks = getArrayOfChunksNumber(arrayClone) // [5,4,6,5]

    const arrayOfChunks = chunks.map((el) => {
        const randomnumber = el; // {min: 4, max: 7}
        const isArrayBiggerThanElement = arrayClone.length > randomnumber;
        return isArrayBiggerThanElement ? arrayClone.splice(0, randomnumber) : arrayClone;
        // if (arrayClone.length > randomnumber) {
        //     return arrayClone.splice(0, randomnumber)
        // } else {
        //     return arrayClone
        // }
    });
    return arrayOfChunks
};


const test2 = aggregateIntoChunks(alphabet)
console.log(test2);

