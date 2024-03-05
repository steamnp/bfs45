// write a function which will add all the odd numbers and give sum of odd numbers.
export function sumOfOddNumbers(arr) {
  const sum = arr
    .filter((item) => item % 2 !== 0)
    .reduce((total, item) => total + item, 0);
  return sum;
}

// prime number. return true if prime, false otherwise.
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
