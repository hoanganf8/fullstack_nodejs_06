import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container py-3">
      <div className="w-50 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
