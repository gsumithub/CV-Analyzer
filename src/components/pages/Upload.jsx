function Upload() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Resume</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">Upload new resumes and CVs for analysis</p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-gray-500 mb-2">Drag and drop your files here</p>
          <p className="text-gray-400 text-sm mb-4">or</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Browse Files
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload; 