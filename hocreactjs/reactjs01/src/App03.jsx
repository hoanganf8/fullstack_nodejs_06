import { useEffect } from "react";
import { useState } from "react";
// let a = 0;
export default function App() {
  const [count, setCount] = useState(0);
  //   if (a < 5) {
  //     a++;
  //   }
  //   useEffect(() => {
  //     console.log("Counter Re-render", count);
  //     console.log(`a = ${a}`);
  //   }, [a]);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setTodoList(data);
    setLoading(false);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {console.log("Counter Update UI")}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Todo List</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
}

/*
Hook useEffect(callback, dependencies?)
- Callback: Hàm thực thi
- dependencies: Điều kiện để callback thực thi
+ [] ==> Callback chỉ thực thi sau lần re-render đầu tiên
+ null | undefined ==> Re-render ==> Thực thi
+ [var1, var2, var3,...] ==> 1 trong các biến thay đổi ==> Thực thi

- Lifecycle
- Mounting
- Unmounting
- Cleanup
- Lifing State Up
*/
