import { isPrime, sumOfOddNumbers } from "./utils";

function App() {
  const sum = sumOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div>
      <h1>Sum of odd number: {sum}</h1>
      <h1>This is {isPrime(-3) ? "a" : "not a"} prime number.</h1>
    </div>
  );
}

export default App;
