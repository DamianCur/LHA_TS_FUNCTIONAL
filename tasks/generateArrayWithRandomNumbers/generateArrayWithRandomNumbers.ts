export { };

const generateArrayWithRandomNumbers = (howManyNumbers: number, min: number, max: number): number[] => {

	const arrayWithRandomNumbers: number[] = []

	for (let i = 0; i < howManyNumbers; i++) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		arrayWithRandomNumbers.push(randomNumber)
	}
	return arrayWithRandomNumbers
};


const generateArrayOfArrays = (howManyArrays: number, howManyNumbers: number, min: number, max: number): number[][] => {

	const arrayOfArrays: number[][] = [] // new Array(10).fill(0)

	for (let i = 0; i < howManyArrays; i++) {
		arrayOfArrays.push(generateArrayWithRandomNumbers(howManyNumbers, min, max))
	}
	console.log(arrayOfArrays);
	return arrayOfArrays

}
generateArrayOfArrays(5, 10, 0, 10)