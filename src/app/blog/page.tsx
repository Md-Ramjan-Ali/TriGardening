import BlogCard from "@/components/Blog/BlogCard";
import BlogCategories from "@/components/Blog/BlogCategories";
import BlogRecentPost from "@/components/Blog/BlogRecentPost";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import { blogs } from "@/data/blogs";
import Image from "next/image";



export default function BlogPage() {
  const featuredBlog = blogs[0];
  return (
    <div className="bg-[#F3F3F3] px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            The TriGardening Journal
          </h1>
          <p className="text-gray-500 text-center mb-10">Your slogan goes here</p>
        </div>
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* 1st blog */}
            <div
              className="relative rounded-2xl overflow-hidden mb-8 cursor-pointer group"

            >
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                width={500}
                height={500}
                className="w-full h-96 object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{featuredBlog.title}</h2>
                <p className="text-sm mb-4">{featuredBlog.excerpt}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <Image src={featuredBlog.author.avatar} alt={featuredBlog.author.name} width={32} height={32} className="w-full h-full object-cover" />
                    </div>
                    <span>{featuredBlog.author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredBlog.date}</span>
                </div>
              </div>
            </div>

            {/* other blog */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogs.slice(1).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-[#2D5016] text-white px-6 py-2 rounded-md font-medium hover:bg-[#3b6a20]">
              Load More Articles
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <BlogCategories />
          <BlogRecentPost />
        </div>
      </div>
    </div>
  );
}
