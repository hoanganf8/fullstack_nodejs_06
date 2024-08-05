// export const metadata = {
//   title: "Ok chưa?",
// };
export default async function DemoServer() {
  console.log("DemoServer");
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await response.json();
  return (
    <div>
      <h1>DemoServer</h1>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}
