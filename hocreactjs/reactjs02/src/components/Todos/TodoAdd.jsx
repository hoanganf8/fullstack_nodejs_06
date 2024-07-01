import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { TodoContext } from "./Todos";

export default function TodoAdd() {
  const { dispatch } = useContext(TodoContext);
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    if (!name) {
      alert("Vui lòng nhập");
      return;
    }
    const todo = {
      id: uuid(),
      name,
    };
    dispatch({ type: "todos/add", payload: todo });
    e.target.reset(); //reset form
  };
  return (
    <div>
      <form action="" onSubmit={handleAdd}>
        <input type="text" placeholder="Name..." name="name" />
        <button>Add</button>
      </form>
    </div>
  );
}
