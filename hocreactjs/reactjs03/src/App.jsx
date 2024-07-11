import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { useEffect } from "react";
import { fetchTodos } from "./redux-toolkit/slices/todoSlice";
// import Todo from "./components/Todo";

export default function App() {
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === "failed") {
    return <h3>Failed to load data</h3>;
  }
  return (
    <>
      <Counter />
      {/* <Todo /> */}
      {status === "pending" ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map((item, index) => <h2 key={index}>{item.title}</h2>)
      )}
    </>
  );
}
