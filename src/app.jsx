import { addOdd, isPrime } from './utils'

const App = () => {
  const result = addOdd([1, 2, 3, 4, 5, 7, 3, 5])
  const primeResult = isPrime(13)

  console.log(primeResult)
  return (
    <div>
      <div>Sum of odd elements: {result}</div>
      <div>The number is {primeResult ? 'a' : 'not'} prime number</div>
    </div>
  )
}

export default App
