import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// // Define the initial state using that type
// const initialState: CounterState = {
//   value: 0,
// };
// Workaround: cast state instead of declaring variable type
const initialState = {
  value: 0,
} satisfies CounterState as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByFive: (state) => {
      state.value += 5;
    },
  },
});

export const { increment, decrement, incrementByFive } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
