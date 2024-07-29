import { revalidatePath, revalidateTag } from "next/cache";
export async function POST(request) {
  const { type, value } = await request.json();
  if (type === "path") {
    revalidatePath(value);
  } else if (type === "tag") {
    revalidateTag(value);
  }
  return Response.json({
    status: true,
  });
}
