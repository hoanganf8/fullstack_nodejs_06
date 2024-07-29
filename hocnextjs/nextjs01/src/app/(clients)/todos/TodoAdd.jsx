"use client";

import { clearCacheTag } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleChangeValue = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = async (todo) => {
    const response = await fetch(process.env.SERVER_API_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    return response.ok;
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!title) {
      return alert("Vui lòng nhập");
    }
    const status = await addTodo({ title });
    if (status) {
      //Call API clear cache
      //   clearCache("/todos");
      clearCacheTag("todos");
      setTitle("");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" onChange={handleChangeValue} value={title} />
      <button>Submit</button>
    </form>
  );
}
