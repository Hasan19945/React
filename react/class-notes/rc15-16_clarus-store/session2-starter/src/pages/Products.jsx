import React from "react";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <SearchInput />
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      <div>
        <ProductCard/>
      </div>
    </div>
  );
};

export default Products;
