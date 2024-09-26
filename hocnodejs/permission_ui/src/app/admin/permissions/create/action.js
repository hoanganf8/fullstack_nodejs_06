"use server";

import { revalidateTag } from "next/cache";

export const handleCreate = async (formData) => {
  const name = formData.get("name");
  const permissions = formData.getAll("permissions");
  const response = await fetch(`${process.env.SERVER_API}/admin/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, permissions }),
  });
  revalidateTag("roles");
  return response.ok;
};
