import Image from "next/image";
// import { FC } from "react";

interface Category {
  id: number;
  image: string;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    image: "/images/image1.png",
    title: "Plants",
    description: "Indoor & Outdoor Plants for every space",
  },
  {
    id: 2,
    image: "/images/image2.png",
    title: "Medicine",
    description: "Natural Plant Care Solutions",
  },
  {
    id: 3,
    image: "/images/image3.png",
    title: "Equipment",
    description: "Professional Gardening tools",
  },
  {
    id: 4,
    image: "/images/image4.png",
    title: "Fertilizers",
    description: "Safe & effective plant protection",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#F5F5DC] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer "
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Image src={cat.image} alt={cat.title} width={40} height={40} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {cat.title}
              </h3>
              <p className="text-[#000000] text-sm">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
