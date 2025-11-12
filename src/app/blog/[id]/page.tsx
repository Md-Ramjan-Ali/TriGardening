import BlogSidebar from "@/components/Blog/BlogSidebar";
import CommentSection from "@/components/Blog/CommentSection";
import { blogs } from "@/data/blogs";
import Image from "next/image";

export default function BlogDetails({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) return <div className="text-center mt-10">Blog not found.</div>;

  return (
    <div className="bg-[#F5F5F5] min-h-screen px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded-md mb-4"
          />
          <p className="text-green-700 text-sm font-medium">{blog.category}</p>
          <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
          <div className="text-gray-400 text-xs flex justify-between mb-4">
            <span>{blog.readTime}</span>
            <span>{blog.date}</span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
          <CommentSection />
        </div>

        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
