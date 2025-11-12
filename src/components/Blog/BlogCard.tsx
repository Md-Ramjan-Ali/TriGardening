import Image from "next/image";

interface BlogCardProps {
  blog: {
    id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  category: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={300}
        className="w-full h-96 object-center"
      />
      <div className="p-5">
        <span className="text-xs font-medium text-green-600 uppercase">{blog.category}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-green-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </div>
  );
}
