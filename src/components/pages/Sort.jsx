function Sort() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sort & View</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">Sort and filter candidates by skills and experience</p>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Filter by:</span>
              <select className="border border-gray-300 rounded px-3 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>All Candidates</option>
                <option>Software Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Management</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded px-3 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Relevance</option>
                <option>Experience (High to Low)</option>
                <option>Experience (Low to High)</option>
                <option>Name (A-Z)</option>
                <option>Date Applied</option>
              </select>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center">Sort & View content will be displayed here</p>
      </div>
    </>
  );
}

export default Sort; 