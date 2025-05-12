function Dashboard() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">View your recruitment dashboard with insights</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">42</h3>
            <p className="text-green-600">New applications</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800">18</h3>
            <p className="text-blue-600">Interviews scheduled</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800">7</h3>
            <p className="text-purple-600">Positions filled</p>
          </div>
        </div>
        <p className="text-gray-500 text-center">Dashboard content will be displayed here</p>
      </div>
    </>
  );
}

export default Dashboard; 