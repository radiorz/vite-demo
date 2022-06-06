import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <div>count is: {count}</div>
    </div>
  );
}
