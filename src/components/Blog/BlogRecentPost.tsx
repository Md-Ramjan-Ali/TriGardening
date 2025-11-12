import { recentPostsData } from '@/data/blogs'
import Image from 'next/image'
import React from 'react'

export default function BlogRecentPost() {
  return (
    <aside>
      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPostsData.map((post) => (
            <div key={post.id} className="flex gap-3 cursor-pointer group">
              <Image
                src={post.image}
                alt={post.title}
                width={60}
                height={24}
                className="w-20 h-16 rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </aside>
  )
}
