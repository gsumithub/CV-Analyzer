function Admin() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">Manage users, settings and permissions</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px] border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Users</h3>
            <p className="text-gray-500">Manage user accounts and permissions</p>
          </div>
          <div className="flex-1 min-w-[200px] border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Settings</h3>
            <p className="text-gray-500">Configure system settings</p>
          </div>
          <div className="flex-1 min-w-[200px] border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Integration</h3>
            <p className="text-gray-500">Manage third-party integrations</p>
          </div>
        </div>
        <p className="text-gray-500 text-center">Admin panel content will be displayed here</p>
      </div>
    </>
  );
}

export default Admin; 