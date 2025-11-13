export interface Product {
  id: number;
  name: string;
  category: "featured" | "popular";
  type: string;
  priceRange: string;
  rating: number;
  reviews: number;
  stock: string;
  price: number;
  sizeOptions: { label: string; price: number }[];
  includePot: { label: string; price: number }[];
  potColors: string[];
  images: string[];
  shortDescription: string;
  description: string;
  related: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "featured",
    type: "Indoor Plant",
    priceRange: "2000 - 3400",
    rating: 5,
    reviews: 24,
    stock: "In Stock",
    price: 350,
    sizeOptions: [
      { label: "Small", price: 240 },
      { label: "Medium", price: 350 },
      { label: "Large", price: 450 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Medium", price: 130 },
      { label: "Large", price: 170 },
    ],
    potColors: ["#ffffff", "#a67c52"],
    images: [
      "/images/featured (1).jpg",
      "/images/featured (2).jpg",
      "/images/featured (3).jpg",
      "/images/featured (4).jpg",
    ],
    shortDescription:
      "Monstera Deliciosa একটি সুন্দর ট্রপিক্যাল ইনডোর প্ল্যান্ট যার বড় ছিদ্রযুক্ত পাতা ঘরের শোভা বাড়ায়।",
    description:
      "Monstera Deliciosa শুধু দৃষ্টিনন্দন নয়, এটি ঘরের বাতাস পরিশুদ্ধ রাখতেও সাহায্য করে। সহজে যত্ন নেওয়া যায়, এবং কম আলোতেও টিকে থাকে।",
    related: [5, 6, 7, 8],
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "featured",
    type: "Fertilizer",
    priceRange: "60 - 440",
    rating: 4,
    reviews: 12,
    stock: "In Stock",
    price: 120,
    sizeOptions: [
      { label: "1kg", price: 60 },
      { label: "2kg", price: 120 },
      { label: "5kg", price: 440 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Large", price: 150 },
    ],
    potColors: ["#2e2e2e", "#a67c52"],
    images: [
      "/images/featured (2).jpg",
      "/images/featured (3).jpg",
      "/images/featured (4).jpg",
    ],
    shortDescription:
      "অর্গানিক কম্পোস্ট সার মাটির উর্বরতা বাড়ায় ও গাছের বৃদ্ধি ত্বরান্বিত করে।",
    description:
      "এই অর্গানিক সারটি সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে তৈরি যা গাছের জন্য প্রয়োজনীয় পুষ্টি সরবরাহ করে এবং মাটিকে স্বাস্থ্যকর রাখে।",
    related: [1, 4, 8],
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "featured",
    type: "Equipment",
    priceRange: "180 - 450",
    rating: 4,
    reviews: 34,
    stock: "In Stock",
    price: 280,
    sizeOptions: [
      { label: "Standard", price: 180 },
      { label: "Premium", price: 450 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Large", price: 150 },
    ],
    potColors: ["#2e2e2e", "#a67c52"],
    images: [
      "/images/featured (3).jpg",
      "/images/featured (1).jpg",
      "/images/featured (4).jpg",
    ],
    shortDescription: "গাছের শাখা ছাঁটার জন্য টেকসই ও ধারালো প্রুনিং শিয়ার্স।",
    description:
      "এই প্রুনিং শিয়ার্স হালকা, আরামদায়ক হ্যান্ডেলযুক্ত এবং নির্ভুলভাবে গাছের ডালপালা ছাঁটতে উপযোগী। দীর্ঘস্থায়ী এবং মরিচা প্রতিরোধী স্টিল দিয়ে তৈরি।",
    related: [6, 7],
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "featured",
    type: "Indoor Plant",
    priceRange: "150 - 500",
    rating: 5,
    reviews: 35,
    stock: "In Stock",
    price: 300,
    sizeOptions: [
      { label: "Small", price: 150 },
      { label: "Medium", price: 300 },
      { label: "Large", price: 500 },
    ],
    includePot: [
      { label: "Plastic Pot", price: 80 },
      { label: "Ceramic Pot", price: 150 },
    ],
    potColors: ["#ffffff", "#2e2e2e"],
    images: [
      "/images/featured (4).jpg",
      "/images/featured (3).jpg",
      "/images/featured (1).jpg",
    ],
    shortDescription:
      "স্নেক প্ল্যান্ট একটি বায়ু পরিশোধক গাছ যা সহজ যত্নে বাড়ে।",
    description:
      "এই গাছটি ঘরের বাতাস বিশুদ্ধ রাখে এবং এর সোজা লম্বা পাতা ঘরের সৌন্দর্য বৃদ্ধি করে। নবীন উদ্ভিদপ্রেমীদের জন্য এটি উপযুক্ত।",
    related: [5, 6, 7],
  },

  // 🌿 Popular Products
  {
    id: 5,
    name: "Peace Lily",
    category: "popular",
    type: "Indoor Plant",
    priceRange: "800 - 1800",
    rating: 5,
    reviews: 29,
    stock: "In Stock",
    price: 1200,
    sizeOptions: [
      { label: "Small", price: 800 },
      { label: "Medium", price: 1200 },
      { label: "Large", price: 1800 },
    ],
    includePot: [
      { label: "Plastic", price: 100 },
      { label: "Ceramic", price: 180 },
    ],
    potColors: ["#ffffff", "#a67c52"],
    images: [
      "/images/popular (1).jpg",
      "/images/popular (2).jpg",
      "/images/popular (3).jpg",
    ],
    shortDescription: "Peace Lily ঘরের বায়ু পরিশোধন ও শোভা বৃদ্ধিতে কার্যকর।",
    description:
      "এই গাছটি ঘরে স্বচ্ছতা এনে দেয় এবং সুন্দর সাদা ফুল ফোটায়। যত্ন নেওয়া সহজ এবং কম আলোতেও বেঁচে থাকে।",
    related: [1, 4, 7],
  },
  {
    id: 6,
    name: "Gardening Gloves",
    category: "popular",
    type: "Equipment",
    priceRange: "200 - 350",
    rating: 4,
    reviews: 15,
    stock: "In Stock",
    price: 250,
    sizeOptions: [
      { label: "Medium", price: 200 },
      { label: "Large", price: 350 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Large", price: 150 },
    ],
    potColors: ["#2e2e2e", "#a67c52"],
    images: [
      "/images/popular (2).jpg",
      "/images/popular (3).jpg",
      "/images/popular (4).jpg",
    ],
    shortDescription: "নরম ও টেকসই গ্লাভস যা বাগান করার সময় হাত সুরক্ষিত রাখে।",
    description:
      "এই গ্লাভস আরামদায়ক ও ফ্লেক্সিবল, যা দীর্ঘ সময় বাগান করার সময় হাতকে সুরক্ষিত ও আরামদায়ক রাখে।",
    related: [3, 4],
  },
  {
    id: 7,
    name: "Aloe Vera Plant",
    category: "popular",
    type: "Indoor Plant",
    priceRange: "250 - 650",
    rating: 5,
    reviews: 40,
    stock: "In Stock",
    price: 400,
    sizeOptions: [
      { label: "Small", price: 250 },
      { label: "Medium", price: 400 },
      { label: "Large", price: 650 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Large", price: 150 },
    ],
    potColors: ["#2e2e2e", "#a67c52"],
    images: [
      "/images/popular (3).jpg",
      "/images/popular (4).jpg",
      "/images/popular (1).jpg",
    ],
    shortDescription: "অ্যালোভেরা গাছটি ঔষধি গুণে ভরপুর এবং ঘরের শোভা বাড়ায়।",
    description:
      "এই সাকুলেন্ট গাছটি সহজ যত্নে বড় হয় এবং স্কিনকেয়ারসহ বিভিন্ন কাজে ব্যবহৃত হয়। এটি ঘরের বাতাস পরিশুদ্ধ রাখে।",
    related: [1, 5, 8],
  },
  {
    id: 8,
    name: "Organic Pot Mix",
    category: "popular",
    type: "Fertilizer",
    priceRange: "120 - 400",
    rating: 4,
    reviews: 22,
    stock: "In Stock",
    price: 250,
    sizeOptions: [
      { label: "1kg", price: 120 },
      { label: "2kg", price: 250 },
      { label: "5kg", price: 400 },
    ],
    includePot: [
      { label: "Small", price: 100 },
      { label: "Large", price: 150 },
    ],
    potColors: ["#2e2e2e", "#a67c52"],
    images: [
      "/images/popular (4).jpg",
      "/images/popular (2).jpg",
      "/images/popular (3).jpg",
    ],
    shortDescription:
      "অর্গানিক পট মিক্স মাটির উর্বরতা বৃদ্ধি করে ও গাছের শিকড় মজবুত করে।",
    description:
      "এই পট মিক্স প্রাকৃতিক উপাদান দিয়ে তৈরি যা গাছের প্রয়োজনীয় পুষ্টি সরবরাহ করে এবং স্বাস্থ্যকর বৃদ্ধি নিশ্চিত করে।",
    related: [2, 7],
  },
];
