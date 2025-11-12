import BlogCategories from "@/components/Blog/BlogCategories";
import BlogRecentPost from "@/components/Blog/BlogRecentPost";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import CommentSection from "@/components/Blog/CommentSection";
import { blogs } from "@/data/blogs";
import Image from "next/image";

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div className="min-h-[29vh] text-center my-10">Blog not found.</div>;

  return (
    <div className="bg-[#F5F5F5] px-4 lg:px-0 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Blog Content */}
          <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-md mb-4 object-cover w-full"
            />
            <p className="text-green-700 text-sm font-medium mb-1">{blog.category}</p>
            <h1 className="text-3xl font-bold text-[#2D5016] mb-3">{blog.title}</h1>
            <div className="text-gray-400 text-xs flex justify-between mb-4">
              <span>{blog.readTime}</span>
              <span>{blog.date}</span>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
            <div className="mt-10">
              <CommentSection />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <BlogSidebar />
            <BlogCategories />
            <BlogRecentPost />
          </div>
        </div>
      </div>
    </div>
  );
}
