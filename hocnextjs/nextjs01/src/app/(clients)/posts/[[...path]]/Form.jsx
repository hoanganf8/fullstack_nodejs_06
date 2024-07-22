"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const query = new URLSearchParams(formData).toString();
    router.push(`${pathname}?${query}`);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <select name="status">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input type="search" name="q" placeholder="Từ khóa..." />
      <button>Search</button>
    </form>
  );
}
