export default function ProductDetailPage({ params }) {
  const {
    path: [productId, productSlug],
  } = params;
  return (
    <div>
      <h1>Product Detail</h1>
      <h2>
        ID: {productId} - Slug: {productSlug}
      </h2>
    </div>
  );
}
