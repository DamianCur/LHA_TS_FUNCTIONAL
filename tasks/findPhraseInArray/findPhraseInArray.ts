export { }

const arrayOfRandomStrings = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "TUTAJ", "jabułko", "gruszka", "arbuz"]

type elementTuple = [number, string];

const findPhraseInArray = (array: string[], phrase: string) => {

    const arrOfFoundPhrases: elementTuple[] = []

    array.forEach((stringElement: string, index: number) /*czy powinno sie tutaj deklarować też typy zwracanego arraya? */  => {
        if (stringElement.toUpperCase().includes(phrase.toUpperCase())) {
            // 
            const foundElement: elementTuple = [index, stringElement]
            arrOfFoundPhrases.push(foundElement)
        }
    })

    console.log(arrOfFoundPhrases);
    return arrOfFoundPhrases
}

findPhraseInArray(arrayOfRandomStrings, "tut")