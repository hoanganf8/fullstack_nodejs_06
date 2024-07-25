import { notFound } from "next/navigation";
export default async function UserPage({ params: { id } }) {
  let user = {};
  try {
    const response = await fetch(process.env.SERVER_API + "/users/" + id);
    if (!response.ok) {
      throw new Error("Server Error");
    }
    user = await response.json();
  } catch (e) {
    return notFound();
  }
  return (
    <div>
      <h1>Thông tin chi tiết</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
