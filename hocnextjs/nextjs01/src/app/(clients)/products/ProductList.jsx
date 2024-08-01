"use client";
import useSWR from "swr";
import { fetcher } from "@/utils/fetch";
import { useState } from "react";
export default function ProductList() {
  const [productId, setProductId] = useState();
  const {
    data: products,
    error,
    isLoading,
    mutate,
  } = useSWR({
    url: `${process.env.SERVER_API_LOCAL}/products`,
  });

  const {
    data: [productDetail],
  } = useSWR(
    productId
      ? {
          url: `${process.env.SERVER_API_LOCAL}/product-detail?productId=${productId}`,
        }
      : null,
    fetcher,
    {
      fallbackData: [],
    }
  );

  const handleRemoveProduct = async (id) => {
    const status = await removeProduct(id);
    if (status) {
      mutate(
        products.filter((product) => product.id !== id),
        {
          revalidate: false,
        }
      );
    }
  };

  const removeProduct = async (id) => {
    const response = await fetch(
      `${process.env.SERVER_API_LOCAL}/products/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.ok;
  };

  const handleOpenDetail = (id) => {
    setProductId(id);
  };

  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }

  return (
    <div className="product-list">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>
              {product.name}{" "}
              <button onClick={() => handleRemoveProduct(product.id)}>
                &times;
              </button>
              <button onClick={() => handleOpenDetail(product.id)}>Mở</button>
            </h2>
            {productDetail && productDetail.id === product.id && (
              <p>{productDetail.content}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
