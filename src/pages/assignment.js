//add odd number
export const addOdd = (numArr) =>
  numArr.reduce((sum, number) => {
    if (number % 2 !== 0) {
      return sum + number;
    }

    return sum;
  }, 0);

// prime number. return true if prime, false otherwise.
export const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i !== 0) {
      return true;
    }

    return false;
  }
};

// export function isPrime(num) {
//   console.log(num);
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i < num / 2; i++) {
//     // O(sqrt(n))
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
