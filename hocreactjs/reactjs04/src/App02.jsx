import { useState, useDeferredValue } from "react";
import Students from "./components/Students";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const countDefer = useDeferredValue(count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Count Defer: {countDefer}</h2>
      <button onClick={handleIncrement}>+</button>
      <Students />
    </div>
  );
}
