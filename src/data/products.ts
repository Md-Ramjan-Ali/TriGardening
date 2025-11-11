export interface Product {
  id: number;
  name: string;
  category: "featured" | "popular";
  type: string;
  priceRange: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "featured",
    type: "Indoor Plant",
    priceRange: " 2000 - 3400",
    rating: 5,
    reviews: 24,
    image: "/images/featured (1).jpg",
    description:
      "Monstera Deliciosa is a beautiful tropical indoor plant with large perforated leaves. Perfect for home and office decor.",
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "featured",
    type: "Fertilizer",
    priceRange: " 60 - 440",
    rating: 4,
    reviews: 12,
    image: "/images/featured (2).jpg",
    description:
      "A natural compost fertilizer made from organic materials that improve soil health and plant growth.",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "featured",
    type: "Equipment",
    priceRange: " 180 - 450",
    rating: 4,
    reviews: 34,
    image: "/images/featured (3).jpg",
    description:
      "Durable pruning shears ideal for trimming plants and small branches with precision and comfort.",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "featured",
    type: "Indoor Plant",
    priceRange: " 150 - 500",
    rating: 5,
    reviews: 35,
    image: "/images/featured (4).jpg",
    description:
      "Snake Plant is an air-purifying indoor plant known for its upright leaves and easy maintenance.",
  },

  // 🌿 Popular Products
  {
    id: 5,
    name: "Peace Lily",
    category: "popular",
    type: "Indoor Plant",
    priceRange: " 800 - 1800",
    rating: 5,
    reviews: 29,
    image: "/images/popular (1).jpg",
    description:
      "Peace Lily is an elegant indoor plant that purifies air and produces beautiful white blooms.",
  },
  {
    id: 6,
    name: "Gardening Gloves",
    category: "popular",
    type: "Equipment",
    priceRange: " 200 - 350",
    rating: 4,
    reviews: 15,
    image: "/images/popular (2).jpg",
    description:
      "Soft and durable gloves designed to protect your hands while gardening. Comfortable and flexible.",
  },
  {
    id: 7,
    name: "Aloe Vera Plant",
    category: "popular",
    type: "Indoor Plant",
    priceRange: " 250 - 650",
    rating: 5,
    reviews: 40,
    image: "/images/popular (3).jpg",
    description:
      "Aloe Vera is a popular succulent plant with healing properties, ideal for both skincare and home decor.",
  },
  {
    id: 8,
    name: "Organic Pot Mix",
    category: "popular",
    type: "Fertilizer",
    priceRange: " 120 - 400",
    rating: 4,
    reviews: 22,
    image: "/images/popular (4).jpg",
    description:
      "A nutrient-rich potting mix designed to provide essential minerals and promote healthy plant growth.",
  },
];
