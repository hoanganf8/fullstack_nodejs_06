"use server";

import { revalidateTag } from "next/cache";

export const handleAction = async (form) => {
  const title = form.get("title");
  if (!title) {
    return { status: false };
  }
  //Call API
  const response = await fetch(process.env.SERVER_API_TODO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  //Clear Cache
  if (response.ok) {
    revalidateTag("todos");
    return { status: true };
  }
  return { status: false };
};
