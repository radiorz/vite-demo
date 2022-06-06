import { add, removeById, updateDone } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(add(todo));
    setTodo("");
  };
  return (
    <div>
      <ul>
        {(todos || []).map((value, index) => (
          <li key={index}>
            {value.id} 
            <span>{value.message}</span>
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
