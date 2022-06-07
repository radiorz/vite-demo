import {
  add,
  removeById,
  updateDone,
  updateEditing,
  updateMessage,
} from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(add(todo));
    setTodo("");
  };
  const onTodoInputChange = (todo, message) => {
    dispatch(updateMessage({ id: todo.id, message }));
  };
  const todoInputRef = useRef();
  const onTodoClick = (id) => {
    dispatch(updateEditing(id));
    console.log(todoInputRef);
    // TODO 如何focus 到新的 ref中
    todoInputRef.current?.focus();
  };
  return (
    <div>
      <ul>
        {(todos || []).map((value, index) => (
          <li key={index}>
            <span>{value.id}</span>
            {!value.editing ? null : (
              <input
                ref={todoInputRef}
                value={value.message}
                onChange={(e) => onTodoInputChange(value, e.target.value)}
                onBlur={() => dispatch(updateEditing(value.id))}
              />
            )}
            {value.editing ? null : (
              <span onClick={() => onTodoClick(value.id)}>{value.message}</span>
            )}
            <button onClick={() => dispatch(updateDone(value.id))}>
              {value.done.toString()}
            </button>
            <button onClick={() => dispatch(removeById(value.id))}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <input
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      ></input>
      <button onClick={addTodo}>添加</button>
    </div>
  );
}
