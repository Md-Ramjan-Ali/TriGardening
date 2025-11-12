import Image from "next/image";
import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    category: string;
    type: string;
    priceRange: string;
    rating: number;
    reviews: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="relative rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg cursor-pointer">
      {/* Image */}
      <div className="relative">
        <div className="">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={100}
            className="h-54 object-cover"
          />
        </div>

        {/* Hover overlay (blur + fade effect) */}
        <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Add to Cart Button (hover visible, moves up) */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2D5016] text-white px-4 py-2 font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-300" title="Add to Cart product">
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 relative z-10 group-hover:opacity-50 transition-opacity duration-300">
        <h3 className="text-xl text-[#2D5016] font-bold">{product.name}</h3>
        <p className="text-sm text-[#A7A7A7]">{product.type}</p>
        <p className="text-2xl text-[#CC7722] font-bold mt-1">
          ৳ {product.priceRange}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < Math.round(product.rating) ? "#facc15" : "#d1d5db"} // yellow-400 : gray-300
              className="w-5 h-5"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
        </div>
      </div>

      {/* View Details Button (only on hover bottom side) */}
      {/* Buttons */}
      <div className=" w-full">
        <button className="w-full bg-[#2D5016] text-white py-2 font-semibold group-hover:hidden">
          Add to Cart
        </button>
        <button className="hidden group-hover:block w-full bg-[#2D5016] text-white py-2 font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
