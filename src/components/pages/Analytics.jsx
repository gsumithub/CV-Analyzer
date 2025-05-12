function Analytics() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Analytics</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">View hiring metrics and recruitment analytics</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Applicant Sources</h3>
            <div className="h-40 bg-teal-50 rounded flex items-center justify-center">
              <p className="text-gray-400">Chart: Applicant Sources</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hiring Funnel</h3>
            <div className="h-40 bg-teal-50 rounded flex items-center justify-center">
              <p className="text-gray-400">Chart: Hiring Funnel</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Time to Hire</h3>
            <div className="h-40 bg-teal-50 rounded flex items-center justify-center">
              <p className="text-gray-400">Chart: Time to Hire</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills Distribution</h3>
            <div className="h-40 bg-teal-50 rounded flex items-center justify-center">
              <p className="text-gray-400">Chart: Skills Distribution</p>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center">Analytics content will be displayed here</p>
      </div>
    </>
  );
}

export default Analytics; 