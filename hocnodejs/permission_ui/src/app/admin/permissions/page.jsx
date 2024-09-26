import Link from "next/link";
const getRoles = async () => {
  const response = await fetch(`${process.env.SERVER_API}/admin/roles`, {
    next: {
      tags: ["roles"],
    },
  });
  const data = await response.json();
  return data;
};
export default async function PermissionPage() {
  const roles = await getRoles();
  return (
    <div>
      <h2>Danh sách vai trò</h2>
      <Link href="/admin/permissions/create" className="btn btn-primary mb-3">
        Thêm vai trò
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Tên vai trò</th>
            <th width="5%">Sửa</th>
            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {roles.data.map(({ id, name }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>
                <Link
                  href={`/admin/permissions/edit/${id}`}
                  className="btn btn-warning"
                >
                  Sửa
                </Link>
              </td>
              <td>
                <a href="#" className="btn btn-danger">
                  Xóa
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
