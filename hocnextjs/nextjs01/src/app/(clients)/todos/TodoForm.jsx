"use client";
import { useRef, useState } from "react";
import { handleAction } from "./action";
export default function TodoForm() {
  const [msg, setMsg] = useState("");
  const formRef = useRef();
  return (
    <form
      ref={formRef}
      action={async (form) => {
        const response = await handleAction(form);
        if (!response.status) {
          setMsg("Đã có lỗi xảy ra");
        } else {
          formRef.current.reset();
          setMsg("");
        }
      }}
    >
      <input type="text" name="title" />
      <button>Submit</button>
      {msg && <span className="d-block text-danger">{msg}</span>}
    </form>
  );
}
