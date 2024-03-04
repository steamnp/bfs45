function App() {
  // function in javascript
  // Function declaration -> Hoisting issue
  // console.log(add(2, 3))
  // function add(firstNumber, secondNuber) {
  //   return firstNumber + secondNuber
  // }

  // Function Expression -> ES6 -> Not hoisted
  // const add = function (firstNumber, secondNuber) {
  //   return firstNumber + secondNuber
  // }

  // Arrow Function -> ES6 -> Not hoisted
  // const add = (firstNumber, secondNumber) => firstNumber + secondNumber

  // console.log(myCountry)
  // var myCountry = 'Nepal' // var is also hoisted

  // const firstName = 'Gorakh'
  // const lastName = 'Joshi'

  // if (firstName) {
  //   const fullName = `${firstName} ${lastName}`
  // }

  // Find the sum of odd numbers from the list


  // const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  // const addOddNumbers = function (listOfNumbers){
  //   let sum = 0;
  //   for(let i = 0; i < listOfNumbers.length; i++){
  //     if(listOfNumbers[i] % 2 != 0){
  //       sum += listOfNumbers[i]
  //     }
  //   }
  //   return sum
  // }

  // let returnedSum = addOddNumbers(listOfNumbers)
  // console.log(returnedSum)


  // check if the number is prime or not

  const isPrime = 3

  const checkPrimeNumber = function(isPrime){
    if(isPrime < 1){
      return false
    }

    for(let i= 2; i < (isPrime/2) + 1; i ++){
      if( isPrime % i === 0){
        return false
      }
    }
    return true;
  }

  let trueOrFalse = checkPrimeNumber(isPrime)
  console.log(trueOrFalse)

  return <h1>Hello</h1>
}

export default App
