import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = true;
  //   const isLoading = true;
  //   if (isLoading) {
  //     return <h2>Loading...</h2>;
  //   }
  return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} />;
}
