import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Counter } from "../../types";

const initialState: Counter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    customIncrease: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    customDecrease: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, customIncrease, customDecrease } =
  counterSlice.actions;

export default counterSlice.reducer;
