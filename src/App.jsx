import React from 'react'

function App() {
//    const myArray = [1, 3, 5, 7, 9];

//    let oddSum = 0;

//    for(let i=0; i<myArray.length; i++){
//     if(myArray[i] % 2 != 0)
//     {
//         oddSum += myArray[i];
//     }
//    }

//    console.log(oddSum);
const num = 4

const checkPrime = function(num){
    if(num < 1)
    {
        return false;
    }

    for(let i = 2; i <num/2 + 1; i++)
if(num % i === 0)
{
    return false;
}
return true;

}





console.log(checkPrime(num))
  return (
    <div>Hello</div>
  )
}

export default App