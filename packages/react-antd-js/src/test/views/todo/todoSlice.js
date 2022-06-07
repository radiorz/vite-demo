import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
/**
 * 初始state
 */
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      const id = nanoid();
      state.todos.push({ id, message: action.payload, done: false });
    },
    removeById: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // 需要类型判断还是ts方便
    updateDone(state, action) {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });
    },
    updateEditing(state, action) {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, editing: !todo.editing };
        return todo;
      });
    },
    updateMessage(state, action) {
      const id = action.payload.id;
      const message = action.payload.message;
      if (typeof message !== "string") return;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, message };
        return todo;
      });
    },
    clearDone(state, action) {},
  },
});
// Action creators are generated for each case reducer function
export const { add, removeById, updateDone, updateEditing, updateMessage } =
  todoSlice.actions;

export default todoSlice.reducer;
