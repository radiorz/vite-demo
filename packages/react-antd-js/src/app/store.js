import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "~/test/views/counter/counterSlice";
import todoReducer from "~/test/views/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
