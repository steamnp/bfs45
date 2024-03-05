function App() {
  const oddSum = (listOfNumbers) => {
    let sum = 0;

    for (let n of listOfNumbers) {
      if (n % 2 !== 0) sum += n;
    }

    return sum;
  };

  const isPrime = (num) => {
    if (num < 2) return false;

    let i = 2;

    while (i < num - 1) {
      if (num % i === 0) return false;
      i++;
    }

    return true;
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        The sum of odd numbers: {oddSum([1, 2, 3, 4, 5, 6, 7, 8, 9])}
        <br />
        <br />
        Is it prime number?: {JSON.stringify(isPrime(8))}
      </div>
    </>
  );
}

// <></> -> React Fragment

export default App;
