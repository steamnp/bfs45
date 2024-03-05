function sumOfOddNumbers(arr) {

    const oddNumbers = arr.filter(num => num % 2 !== 0);

    const sum = oddNumbers.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const result = sumOfOddNumbers(inputArray);
  
  console.log(result); 
  