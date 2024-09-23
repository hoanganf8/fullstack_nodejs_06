import Sidebar from "./_component/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <hr />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
