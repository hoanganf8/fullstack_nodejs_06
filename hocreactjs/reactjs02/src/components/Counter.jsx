import { useReducer } from "react";
import { initialState, reducer } from "../utils/reducer";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
