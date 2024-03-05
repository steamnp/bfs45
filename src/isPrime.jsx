import React from 'react';

function isPrime() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let primes = [];

    for (let num of input) {
        let isPrime = true;

        if (num == 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        primes.push({ number: num, isPrime: isPrime });
        console.log(num +" is prime: " + isPrime);
    }

    return (
        <div>
            {primes.map((item, index) => (
                <div key={index}>{item.number} is prime: {item.isPrime.toString()}</div>
            ))}
        </div>
    );
}

export default isPrime;
