import Link from "next/link";

// export const metadata = {
//   title: "Danh sách bài viết",
// };
export const generateMetadata = ({ searchParams }) => {
  const s = searchParams?.s || "";
  return {
    title: s ? `Tìm kiếm từ khóa: ${s}` : "Danh sách bài viết",
    robots: "noindex,nofollow",
  };
};
export default async function PostList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            <Link href={`/bai-viet/${post.id}.html`}>Chi tiết</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
