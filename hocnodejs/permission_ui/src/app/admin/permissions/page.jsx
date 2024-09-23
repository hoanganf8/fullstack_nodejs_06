import Link from "next/link";

export default function PermissionPage() {
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
          <tr>
            <td>1</td>
            <td>Admin</td>
            <td>
              <a href="#" className="btn btn-warning">
                Sửa
              </a>
            </td>
            <td>
              <a href="#" className="btn btn-danger">
                Xóa
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
