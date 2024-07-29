// import TodoAdd from "./TodoAdd";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodosPage() {
  return (
    <div>
      <h1>TodoList App</h1>
      <TodoList />
      {/* <TodoAdd /> */}
      <TodoForm />
    </div>
  );
}
