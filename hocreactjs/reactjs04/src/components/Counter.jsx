import { useState } from "react";
import Content from "./Content";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter Render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Content />
    </div>
  );
}
