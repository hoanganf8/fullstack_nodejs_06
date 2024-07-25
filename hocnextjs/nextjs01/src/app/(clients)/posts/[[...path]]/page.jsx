import Form from "./Form";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Chi tiết bài viết",
};
export default function PostsPage({ params, searchParams }) {
  const { path } = params;
  if (path?.length && path[1] >= 1000) {
    return notFound();
  }
  return (
    <div>
      {path ? (
        <>
          <h1>Post Detail</h1>
        </>
      ) : (
        <>
          <h1>Posts</h1>
          <h3>Status: {searchParams.status}</h3>
          <h3>Keyword: {searchParams.q}</h3>
          <Form />
        </>
      )}
    </div>
  );
}
