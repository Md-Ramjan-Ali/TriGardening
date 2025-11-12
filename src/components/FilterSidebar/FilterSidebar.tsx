export default function FilterSidebar() {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-64">
      <h3 className="font-semibold text-gray-800 mb-4">Filter Products</h3>

      <div className="mb-4">
        <p className="font-medium mb-2">Category</p>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Indoor Plants (32)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Outdoor Plants (18)</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Price Range</p>
        <input type="range" min="0" max="10000" className="w-full" />
      </div>

      <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition">
        Apply Filters
      </button>
    </div>
  );
}
