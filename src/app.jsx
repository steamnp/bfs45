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
  const add = (firstNumber, secondNumber) => firstNumber + secondNumber

  // console.log(myCountry)
  // var myCountry = 'Nepal' // var is also hoisted

  const firstName = 'Gorakh'
  const lastName = 'Joshi'

  if (firstName) {
    const fullName = `${firstName} ${lastName}`
  }

  return <h1>{add(1.2, 3.2)}</h1>
}

export default App
