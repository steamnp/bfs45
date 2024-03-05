const sumOfOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0).reduce((acc, num) => acc + num, 0)

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
const result = sumOfOddNumbers(inputArray)

console.log(result)
