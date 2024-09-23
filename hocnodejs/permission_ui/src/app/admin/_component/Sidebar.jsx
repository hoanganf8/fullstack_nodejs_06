export default function Sidebar() {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Tổng quan
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Sản phẩm
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Bài viết
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Người dùng
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/permissions" className="nav-link">
            Phân quyền
          </a>
        </li>
      </ul>
    </div>
  );
}
