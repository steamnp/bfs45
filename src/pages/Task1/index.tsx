import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../types";

import {
  decrement,
  increment,
  customIncrease,
  customDecrease,
} from "../../features/counter/counterSlice";

import Button from "../../components/Button";
import style from "./task.module.css";

function Task1() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={style.page}>
      <div className={style.counter}>{count}</div>
      <br />
      <div className={style.btnGroup}>
        <Button onClick={() => dispatch(increment())}>Increase</Button>
        <Button onClick={() => dispatch(decrement())}>Decrease</Button>
      </div>
      <div className={style.btnGroup}>
        <Button onClick={() => dispatch(customIncrease(5))}>
          Increase by 5
        </Button>
        <Button onClick={() => dispatch(customDecrease(5))}>
          Decrease by 5
        </Button>
      </div>
    </div>
  );
}

export default Task1;
