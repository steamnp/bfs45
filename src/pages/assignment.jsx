import style from "../styles/assignment.module.css";
import { addOdd, isPrime } from "./assignment";

function Assignment() {
  //sum of odd number

  const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const sumOfOdd = addOdd(numArr);

  const num = -5;
  const checkPrime = isPrime(num) === true ? "Is Prime" : "Not Prime";
  console.log(checkPrime);

  //   numArr.map((each) => {
  //     if (each % 2 !== 0) {
  //       sumOfOdd += each;
  //     }
  //   });
  //   console.log(sumOfOdd);

  //   // prime number. return true if prime, false otherwise.
  //   function isPrime(num) {
  //     console.log(num);
  //     if (num <= 1) {
  //       return false;
  //     }

  //     for (let i = 2; i < num / 2; i++) {
  //       // O(sqrt(n))
  //       if (num % i === 0) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }

  return (
    <div className={style.outerDiv}>
      <div className={style.quesAnsDiv}>
        <h1>
          Q1. Sum of Odd Numbers starting from {numArr[0]} to{" "}
          {numArr[numArr.length - 1]}
        </h1>
        <h2>Ans: {sumOfOdd}</h2>
      </div>
      <div className={style.quesAnsDiv}>
        <h1>Q2. Check if {num} is prime or not.</h1>
        <h2>Ans: {checkPrime}</h2>
      </div>
    </div>
  );
}

export default Assignment;
