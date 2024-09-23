export default function PermissionCreatePage() {
  return (
    <div>
      <h2>Thêm vai trò</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="">Tên vai trò</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tên vai trò..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Danh sách quyền</label>
          <table className="table table-bordered">
            <tr>
              <th width="20%">Module</th>
              <th>Quyền</th>
            </tr>
            <tr>
              <th>Quản lý sản phẩm</th>
              <td>
                <div className="row">
                  <div className="col-3">
                    <label>
                      <input type="checkbox" value="products.read" /> Xem
                    </label>
                  </div>
                  <div className="col-3">
                    <label>
                      <input type="checkbox" value="products.add" /> Thêm
                    </label>
                  </div>
                  <div className="col-3">
                    <label>
                      <input type="checkbox" value="products.update" /> Sửa
                    </label>
                  </div>
                  <div className="col-3">
                    <label>
                      <input type="checkbox" value="products.delete" /> Xóa
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <button className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </div>
  );
}
