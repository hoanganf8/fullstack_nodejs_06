import Button from "./Button";
export default async function UsersPage() {
  let users = [];
  try {
    const response = await fetch(process.env.SERVER_API + "/users");
    if (!response.ok) {
      throw new Error("Server Error");
    }
    users = await response.json();
  } catch (e) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          <Button id={user.id} />
        </div>
      ))}
    </div>
  );
}

//Trong ServerComponent ==> Hỗ trợ async component
