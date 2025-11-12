import { categoriesData } from '@/data/blogs'
import React from 'react'

export default function BlogCategories() {
  return (
    <aside>
      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Blog Categories</h3>
        <div className="space-y-3">
          {categoriesData.map((category) => (
            <div key={category.name} className="flex items-center justify-between text-sm">
              <span className="text-gray-700 hover:text-green-600 cursor-pointer transition-colors">
                {category.name}
              </span>
              <span className="text-gray-500">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
