import { RootState } from "@reduxjs/toolkit/query";
import { increment, decrement, incrementByAmount } from "./feature/CounterSlice"
import { UseSelector, useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>



    </div>)
}

export default App
