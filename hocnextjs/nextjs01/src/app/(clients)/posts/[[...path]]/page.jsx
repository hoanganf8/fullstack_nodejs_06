import Form from "./Form";

export default function PostsPage({ params, searchParams }) {
  const { path } = params;
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
