export default function BlogSidebar() {
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-2">Search Blog</h3>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
        />
      </div>
    </aside>
  );
}
