function App() {
  // function to add odd number of an array
  const addOddNum = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12];
    let addNum = 0;
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 != 0) {
        addNum = addNum + number[i];
      }
    }
    console.log(number);
    console.log("Addition of odd number from the array: " + addNum);
  };

  // function to check whether the number is prime or not
  const checkPrime = (input) => {
    console.log(input);
    let primeNumber = true;

    if (input == 0 || input == 1) {
      primeNumber = false;
    } else if (input > 1) {
      for (let j = 2; j < input; j++) {
        if (input % j == 0) {
          primeNumber = false;
          break;
        }
      }
    }
    console.log("Is number " + input + " a prime number: " + primeNumber);
  };
  return (
    <>
      <div>
        {addOddNum()}
        {checkPrime(8)}
      </div>
    </>
  );
}

export default App;
