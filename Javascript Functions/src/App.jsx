

function App() {
  function SumOfOdd(arr){
    const oddNum =arr.filter(num => num%2!==0);

    const add = oddNum.reduce((acc, num)=>acc+num,0);

    return add;
  }

const numbers = [1,2,3,4,5,6,7,8];
const result = SumOfOdd(numbers);
console.log(result);


}

export default App
