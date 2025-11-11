import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.category === "featured");
  return (
    <section className="py-12 bg-[#f3f5e7]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-center text-green-900 mb-8">
          Featured Product
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
