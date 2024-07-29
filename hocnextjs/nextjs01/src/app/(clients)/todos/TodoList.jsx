const getTodos = async () => {
  const response = await fetch(process.env.SERVER_API_TODO, {
    cache: "force-cache",
    next: {
      tags: ["todos"],
    },
  });
  if (!response.ok) {
    throw new Error("Server Error");
  }
  return response.json();
};
export default async function TodoList() {
  const todoList = await getTodos();
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
