import React from 'react'

const App = () => {
  let data = ''
  const addOdd = (array) => {
    let total = 0
    array.map((element) => {
      if(element % 2 !== 0){
        total += element
      }
    })
    console.log(total)
    data += 'Add Odd = ' + total + ', '
  } 

  const isPrime = (number) => {
    let count = 0
    for(let i=1; i<=number; i++){
      if(number % i === 0){
        count++
      }
    }
    if(count === 2){
      console.log("Is Prime!")
      data += number + ' Is Prime!'
    } else {
      console.log("Is not Prime!")
      data += number + ' Is not Prime!'
    }
  }

  addOdd([1,2,3,4,5,7])
  isPrime(13)
  return (
    <div>{data}</div>
  )
}

export default App