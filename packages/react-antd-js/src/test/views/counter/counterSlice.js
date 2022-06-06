import { createSlice } from "@reduxjs/toolkit";

/**
 * 初始state
 */
const initialState = {
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
    // 需要类型判断还是ts方便
    incrementByAmount(state, action) {
      if (typeof action.payload !== "number") return;
      state.value += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
