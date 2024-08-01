"use client";

import { useState } from "react";
import { useSWRConfig } from "swr";
// import { mutate } from "swr";
export default function ProductAdd() {
  const [name, setName] = useState("");
  const { mutate } = useSWRConfig();
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Vui lòng nhập tên");
    }
    const status = await addProduct();
    if (status) {
      mutate({ url: process.env.SERVER_API_LOCAL + "/products" });
      setName("");
    }
  };
  const addProduct = async () => {
    const response = await fetch(process.env.SERVER_API_LOCAL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    return response.ok;
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmitForm}>
        <input type="text" onChange={handleChangeValue} value={name} />
        <button>Submit</button>
      </form>
    </div>
  );
}
