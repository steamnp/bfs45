import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
