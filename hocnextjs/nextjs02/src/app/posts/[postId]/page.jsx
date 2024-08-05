export const generateMetadata = async ({ params: { postId } }) => {
  const post = await getPostById(postId);
  return {
    title: post?.title,
  };
};
const getPostById = async (postId) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  const post = await response.json();
  return post;
};
export default async function PostDetail({ params: { postId } }) {
  const post = await getPostById(postId);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
