import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { path } = useParams();
  const match = path.match(/(.+)-(\d+)$/);
  if (!match) {
    return <h2>Not found</h2>;
  }
  const slug = match[1];
  const id = match[2];
  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>{slug}</h2>
      <h2>{id}</h2>
    </div>
  );
}
