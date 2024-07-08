import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux-toolkit/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(10));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
