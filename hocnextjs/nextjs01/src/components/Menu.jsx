"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Menu.css";
import clsx from "clsx";
export default function Menu() {
  const pathname = usePathname();
  const activeMenu = (path) => {
    return pathname === path ? "active" : "";
  };
  return (
    <ul>
      <li>
        <Link href="/" className={clsx(activeMenu("/"))}>
          Trang chủ
        </Link>
      </li>
      <li>
        <Link href="/about" className={clsx(activeMenu("/about"))}>
          Giới thiệu
        </Link>
      </li>
      <li>
        <Link href="/products" className={clsx(activeMenu("/products"))}>
          Sản phẩm
        </Link>
      </li>
      <li>
        <Link href="/contact" className={clsx(activeMenu("/contact"))}>
          Liên hệ
        </Link>
      </li>
    </ul>
  );
}
