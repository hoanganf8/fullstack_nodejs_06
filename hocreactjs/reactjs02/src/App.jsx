import { decrement, increment } from "./store/actions/counterActions";
import { useDispatch, useSelector } from "./store/hook";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncrement = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(2));
  };
  return (
    <div>
      <h1>Hello anh em F8</h1>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
/*
Vấn đề
*/
