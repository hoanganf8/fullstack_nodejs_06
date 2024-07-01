import { useContext } from "react";
import { TodoContext } from "./Todos";

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const { todoList } = state;
  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc?")) {
      dispatch({ type: "todos/remove", payload: id });
    }
  };
  return (
    <div>
      <ul>
        {todoList.map(({ id, name }) => (
          <li key={id}>
            {name} <button onClick={() => handleRemove(id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
