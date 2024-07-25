"use client";
import { useRouter } from "next/navigation";
export default function Button({ id }) {
  const { push } = useRouter();
  const handleClick = () => {
    push(`/users/${id}`);
  };
  return <button onClick={handleClick}>Xem chi tiết</button>;
}
