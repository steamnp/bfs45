import style from "../../styles/components/app.module.scss";
import Button from "../button/button";

function App() {
  const oddSum = (listOfNumbers) => {
    let sum = 0;

    for (let n of listOfNumbers) {
      if (n % 2 !== 0) sum += n;
    }

    return sum;
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        The sum of odd numbers: {oddSum([1, 2, 3, 4, 5, 6, 7, 8, 9])}
      </div>
    </>
  );
}

// <></> -> React Fragment

export default App;
