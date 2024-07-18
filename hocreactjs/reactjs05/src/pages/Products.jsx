import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  const q = searchParams.get("q");
  // const categories = searchParams.getAll("category");
  const params = {};
  Array.from(searchParams).forEach(([key, value]) => {
    if (!params[key]) {
      params[key] = value;
    } else {
      if (typeof params[key] === "string") {
        params[key] = [params[key]];
      }
      params[key].push(value);
    }
  });

  const handleClick = () => {
    setSearchParams({ ...params, status: "pending", q: "abc" });
  };
  return (
    <div>
      <h1>Products</h1>
      <h2>Status: {status}</h2>
      <h2>Query: {q}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
