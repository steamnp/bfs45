import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { decrement, increment, incrementByFive } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByFive())}>+5</button>
    </div>
  );
}
