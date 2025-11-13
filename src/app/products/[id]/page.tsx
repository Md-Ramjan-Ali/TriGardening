"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/Products/ProductCard";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;
  const product = products.find((b) => b.id === Number(id));
  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id)
    : [];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizeOptions?.[0] ?? null);
  const [selectedPot, setSelectedPot] = useState(product?.includePot?.[0] ?? null);
  const [selectedColor, setSelectedColor] = useState(product?.potColors?.[0] ?? "");
  const [mainImage, setMainImage] = useState<string | undefined>(product?.images?.[0]);

  if (!product) return <p>Product not found (check console for Route ID and product IDs)</p>;

  return (
    <section className="bg-[#F5F5DC] min-h-screen">
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
          <span className=" font-medium">Plants</span>
           <span className="mx-2">{">"}</span> <span className="text-[#2D5016] font-medium">{product.name}</span>

        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10">
        {/* Left Image Section */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow">
            <Image
              src={mainImage!}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setMainImage(img)}>
                <Image
                  src={img}
                  alt="thumb"
                  width={80}
                  height={80}
                  className={`rounded-lg h-20 border ${mainImage === img ? "border-green-700" : "border-gray-200"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Details Section */}
        <div>
          <h1 className="text-2xl font-semibold text-green-900">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 my-2">
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
              <span className="text-gray-500 text-sm ml-1">({product.reviews} reviews)</span>
            </div>
            <p className="text-green-700 font-medium ml-2">{product.stock}</p>
          </div>

          <p className="text-gray-600 mb-4">{product.type}</p>

          {/* Size Options */}
          <div className="mb-4">
            <p className="font-medium text-green-900 mb-1">Size</p>
            <div className="flex gap-3">
              {product.sizeOptions.map((size) => (
                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${selectedSize?.label === size.label
                    ? "bg-white text-gray-800"
                    : "bg-transparent text-gray-700 border-gray-400"
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <p>{size.label}</p>
                    <p>৳{size.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Include Pot */}
          <div className="mb-4">
            <p className="font-medium text-green-900 mb-1">Include Pot</p>
            <div className="flex gap-3">
              {product.includePot.map((pot) => (
                <button
                  key={pot.label}
                  onClick={() => setSelectedPot(pot)}
                  className={`px-4 py-2 border rounded-lg ${selectedPot?.label === pot.label
                    ? "bg-white text-gray-800"
                    : "bg-transparent text-gray-700 border-gray-400"
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <p>{pot.label}</p>
                    <p>৳{pot.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pot Color */}
          <div className="mb-4">
            <p className="font-medium text-green-900 mb-1">Pot Color</p>
            <div className="flex gap-3">
              {product.potColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color
                    ? "border-green-700"
                    : "border-gray-300"
                    }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Short Description */}
          <div className="border-t pt-4 border-gray-200 border-b pb-4">
            <p className="mt-4 text-gray-600 leading-relaxed line-clamp-3">
              {product.shortDescription}
            </p>
          </div>

          {/* Price & Quantity */}
          <div className="flex items-center gap-6 mt-6">
            <p className="text-2xl font-bold text-orange-600">
              ৳ {product.price}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-1 border rounded"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="p-1 border rounded"
              >
                <Plus size={16} />
              </button>
            </div>
            <button className="p-2 border rounded-full">
              <Heart />
            </button>
          </div>

          <button className="mt-6 bg-[#2D5016] text-white px-6 py-3 rounded-lg w-full">
            Add to Cart
          </button>
        </div>

        {/* Full Description */}
        <div className="col-span-2 mt-12 bg-[#f3f5e7] p-6 rounded-xl">
          <h3 className="text-[#2D5016] font-bold text-xl mb-3">Descriptions</h3>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#2D5016] max-w-7xl mx-auto px-6 mb-6 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
