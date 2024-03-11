import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import style from "./counter.module.css";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={style.container}>
      <div>
        <div className={style.content}>
          <span className={style.value}>{count}</span>
        </div>
        <button
          className={`${style.button} ${style.increment}`}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className={`${style.button} ${style.decrement}`}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className={`${style.button} ${style.incrementBy5}`}
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
