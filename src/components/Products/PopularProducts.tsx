import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { LuCircleChevronRight } from "react-icons/lu";

const PopularProducts = () => {
   const popularProducts = products.filter(
     (product) => product.category === "popular"
    );
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center text-[#2D5016] mb-2">
          Popular Products
        </h2>
        <p className="text-[#2D5016] text-center mb-8">
          Discover our most popular gardening essentials
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute top-1/2 -right-15 transform -translate-y-1/2  
                     transition duration-300 cursor-pointer"
          aria-label="Next Products"
        >
          <LuCircleChevronRight className="w-7 h-7 text-[#2D5016]" />
        </button>
      </div>
    </section>
  );
};

export default PopularProducts;
