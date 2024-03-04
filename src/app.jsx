function App() {
  // write a function which will add all the odd numbers and give sum of odd numbers.
  const arr = [1, 2, 3, 4, 5, 6, 7];
  let sum = 0;
  arr.map((item) => {
    if (item % 2 !== 0) {
      sum += item;
    }
  });
  console.log(sum);

  // prime number. return true if prime, false otherwise.
  let flag = false;
  function isPrime(num) {
    if (num <= 1) {
      return flag;
    }

    for (let i = 2; i < num / 2; i++) {
      // O(sqrt(n))
      if (num % i === 0) {
        return flag;
      }
    }
    return true;
  }

  const result = isPrime(6) === true ? "true" : "false";
  console.log(result);

  return (
    <div>
      <h1>{sum}</h1>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
