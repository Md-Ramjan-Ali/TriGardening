"use client";
import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/Products/ProductCard";

export default function ProductsPage() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            {["Home", "Plants", "Tools", "Fertilizers", "Seeds", "Medicine", "Equipments"].map(
              (item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${item === "Plants"
                      ? "text-[#2D5016] border-b-2 border-[#2D5016] pb-1"
                      : "hover:text-[#2D5016]"
                    }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
          <span>Home</span> <span className="mx-2">{">"}</span>
          <span>Products</span> <span className="mx-2">{">"}</span>
          <span className="text-[#2D5016] font-medium">Plants</span>
        </div>
      </nav>

     

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-10">
        {/* Sidebar Filter */}
        <aside className="w-64 bg-white rounded-xl shadow p-5 h-fit">
          <h2 className="text-lg font-semibold text-[#2D5016] mb-4">
            Filter Products
          </h2>

          {/* Category */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Category</p>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Indoor Plants (32)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Outdoor Plants (16)</span>
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Price Range</p>
            <input
              type="range"
              min="0"
              max="10000"
              className="w-full accent-[#7BAE45]"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>৳ 0</span>
              <span>৳ 10,000+</span>
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Size</p>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Small (20)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Medium (27)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Large (16)</span>
              </label>
            </div>
          </div>

          {/* Light Requirements */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">
              Light Requirements
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Low Light (16)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Medium Light (16)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Bright Light (16)</span>
              </label>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-[#7BAE45] text-white py-2 font-semibold rounded-md hover:bg-[#6C9C3D] transition">
            Apply Filters
          </button>
        </aside>

        {/* Products Section */}
        <main className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="">
              <h2 className="text-2xl font-bold text-[#404040]">
                Plants 
              </h2>
              <p className="text-[#404040]">Showing 10 of 40 products</p>
            </div>

            <select className="border rounded-md px-3 py-2 text-sm text-[#404040] focus:outline-none">
              <option>Sort By: Popular</option>
              <option>Sort By: Featured</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#2D5016] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#244012] transition">
              Load More Products
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
