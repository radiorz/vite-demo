import { createSlice } from "@reduxjs/toolkit";

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
      const id = state.todos.length;
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
  },
});
// Action creators are generated for each case reducer function
export const { add, removeById, updateDone } = todoSlice.actions;

export default todoSlice.reducer;
