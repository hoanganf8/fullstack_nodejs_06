import "./Menu.css";
import NavLink from "./NavLink";

export default function Menu() {
  // const activeMenu = ({ isActive }) => {
  //   // return isActive ? "current" : "";
  //   return isActive
  //     ? {
  //         color: "#fff",
  //         background: "red",
  //       }
  //     : {};
  // };
  return (
    <ul className="nav flex-column">
      <NavLink href="/">Trang chủ</NavLink>
      <NavLink href="/gioi-thieu">Giới thiệu</NavLink>
      <NavLink href="/san-pham">Sản phẩm</NavLink>
      <NavLink href="/lien-he">Liên hệ</NavLink>
    </ul>
  );
}
