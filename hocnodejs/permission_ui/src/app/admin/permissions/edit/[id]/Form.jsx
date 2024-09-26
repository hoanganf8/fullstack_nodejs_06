"use client";
import modules from "@/app/admin/data/module.json";

export default function Form({ role }) {
  const isPermission = (value) => {
    return role.permissions.find((permission) => value === permission.value);
  };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="">Tên vai trò</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tên vai trò..."
          name="name"
          value={role.name}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Danh sách quyền</label>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="20%">Module</th>
              <th>Quyền</th>
            </tr>
          </thead>
          <tbody>
            {modules.map(({ name, title }) => (
              <tr key={name}>
                <th>{title}</th>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <label>
                        <input
                          type="checkbox"
                          name="permissions"
                          value={`${name}.read`}
                          checked={isPermission(`${name}.read`)}
                        />{" "}
                        Xem
                      </label>
                    </div>
                    <div className="col-3">
                      <label>
                        <input
                          type="checkbox"
                          name="permissions"
                          value={`${name}.add`}
                          checked={isPermission(`${name}.add`)}
                        />{" "}
                        Thêm
                      </label>
                    </div>
                    <div className="col-3">
                      <label>
                        <input
                          type="checkbox"
                          name="permissions"
                          value={`${name}.update`}
                          checked={isPermission(`${name}.update`)}
                        />{" "}
                        Sửa
                      </label>
                    </div>
                    <div className="col-3">
                      <label>
                        <input
                          type="checkbox"
                          name="permissions"
                          value={`${name}.delete`}
                          checked={isPermission(`${name}.delete`)}
                        />{" "}
                        Xóa
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary">Lưu thay đổi</button>
    </form>
  );
}
