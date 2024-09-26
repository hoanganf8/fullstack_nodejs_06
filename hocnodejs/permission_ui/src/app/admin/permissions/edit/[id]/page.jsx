import { notFound } from "next/navigation";
import Form from "./Form";
const getRole = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/admin/roles/${id}`, {
    next: {
      tags: `role-${id}`,
    },
  });
  return response.json();
};
export default async function EditPermissionPage({ params }) {
  const { id } = params;
  const role = await getRole(id);
  if (!role) {
    return notFound();
  }

  return (
    <div>
      <h2>Cập nhật vai trò</h2>
      <Form role={role.data} />
    </div>
  );
}
