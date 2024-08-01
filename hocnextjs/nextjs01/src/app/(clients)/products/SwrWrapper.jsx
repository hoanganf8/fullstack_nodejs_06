"use client";

import { SWRConfig } from "swr";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
import { fetcher } from "@/utils/fetch";

export default function SwrWrapper() {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 2000,
        fetcher,
        fallbackData: [],
      }}
    >
      <ProductList />
      <ProductAdd />
    </SWRConfig>
  );
}
