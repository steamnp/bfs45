function Home() {
  // Primitive values
  const myName = 'Gorakh'
  const favNum = 7.5
  const isPrime = false
  let myCountry
  const anotherCountry = null

  console.log(typeof anotherCountry)

  // Non-primitive values -> Object
  // 2,3,5
  const primeNumbers = [2, 3, 5]
  // Alex, 35, 7
  const person = ['Alex', 35, 7]
  // firstName -> Alex, age -> 35, favNumm -> 7
  const newPerson = {
    firstName: 'Alex',
    age: 35,
    favNum: 7,
  }

  // console.log(typeof myCountry)

  // Falsy value
  // null, 0, undefined, NaN, '', false

  return <div>Hello</div>
}

export default Home
