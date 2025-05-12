function Analysis() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Analysis</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">Detailed analysis of candidate profiles</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="py-2 px-4 bg-purple-100 rounded-md text-purple-700 font-medium">
            <span>Skills Match</span>
          </div>
          <div className="py-2 px-4 bg-purple-100 rounded-md text-purple-700 font-medium">
            <span>Experience Levels</span>
          </div>
          <div className="py-2 px-4 bg-purple-100 rounded-md text-purple-700 font-medium">
            <span>Education</span>
          </div>
          <div className="py-2 px-4 bg-purple-100 rounded-md text-purple-700 font-medium">
            <span>Certifications</span>
          </div>
        </div>
        <p className="text-gray-500 text-center">Analysis content will be displayed here</p>
      </div>
    </>
  );
}

export default Analysis; 