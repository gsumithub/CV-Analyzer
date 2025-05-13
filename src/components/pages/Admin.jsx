import { useState } from 'react';

function Admin() {
  // Sample users data - in a real app, this would come from an API
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john.smith@example.com', 
      roles: ['Uploader'], 
      lastActive: '2023-05-10', 
      status: 'Active' 
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      email: 'sarah.j@example.com', 
      roles: ['Analyser'], 
      lastActive: '2023-05-15', 
      status: 'Active' 
    },
    { 
      id: 3, 
      name: 'Michael Chen', 
      email: 'michael.c@example.com', 
      roles: ['Uploader', 'Analyser'], 
      lastActive: '2023-05-18', 
      status: 'Active' 
    },
    { 
      id: 4, 
      name: 'Emily Davies', 
      email: 'e.davies@example.com', 
      roles: ['Uploader'], 
      lastActive: '2023-05-08', 
      status: 'Inactive' 
    },
    { 
      id: 5, 
      name: 'David Wilson', 
      email: 'd.wilson@example.com', 
      roles: ['Analyser'], 
      lastActive: '2023-05-17', 
      status: 'Active' 
    },
  ]);

  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle a role for a user
  const toggleRole = (userId, role) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        // If user already has the role, remove it
        if (user.roles.includes(role)) {
          // Don't allow removing the last role
          if (user.roles.length > 1) {
            return {
              ...user,
              roles: user.roles.filter(r => r !== role)
            };
          }
          return user;
        } else {
          // Add the role
          return {
            ...user,
            roles: [...user.roles, role]
          };
        }
      }
      return user;
    }));
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-indigo-50 p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Administration</h3>
          <p className="text-gray-600 text-sm">Manage users, roles and system settings</p>
        </div>
        
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('users')}
            >
              Users & Roles
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'logs'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('logs')}
            >
              Activity Logs
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'users' && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm text-sm">
                  Add New User
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Roles
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-indigo-800 font-medium text-sm">{user.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.lastActive}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button
                              className={`px-2 py-1 rounded-md text-xs font-medium ${
                                user.roles.includes('Uploader')
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                              onClick={() => toggleRole(user.id, 'Uploader')}
                            >
                              Uploader
                            </button>
                            <button
                              className={`px-2 py-1 rounded-md text-xs font-medium ${
                                user.roles.includes('Analyser')
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                              onClick={() => toggleRole(user.id, 'Analyser')}
                            >
                              Analyser
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No users found matching your search
                </div>
              )}
            </>
          )}
          
          {activeTab === 'settings' && (
            <div className="text-center py-6 text-gray-500">
              System settings content will be displayed here
            </div>
          )}
          
          {activeTab === 'logs' && (
            <div className="text-center py-6 text-gray-500">
              Activity logs will be displayed here
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin; 