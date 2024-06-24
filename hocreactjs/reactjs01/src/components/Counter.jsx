import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmouting");
    };
  }, []);
  useEffect(() => {
    console.log("Updating: ", count);
    //Cleanup
    return () => {
      console.log("Cleanup: ", count);
    };
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

//useState: Làm việc với state trong ReactJS
//Cú pháp: const [tenState, tenHamState] = useState(giatriMacDinh)
