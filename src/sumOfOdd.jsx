import React from 'react';

function SumOfOdd() {
   const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let sum = 0; 
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) { 
            sum += input[i]; 
        }
    }
    console.log("Sum of odd numbers:", sum);
    return (
        <div>{sum}</div>
    );
}

export default SumOfOdd;