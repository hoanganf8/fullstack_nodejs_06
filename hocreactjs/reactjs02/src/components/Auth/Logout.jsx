import { useDispatch } from "../../store/hook";

export default function Logout() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "auth/destroy_user",
    });
    localStorage.removeItem("login_token");
  };
  return (
    <a href="#" onClick={handleLogout}>
      Đăng xuất
    </a>
  );
}
