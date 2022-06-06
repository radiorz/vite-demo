import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "~/test/views/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
