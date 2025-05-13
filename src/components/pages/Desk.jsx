import { Link } from 'react-router-dom';

function Desk() {
  // Sample workspace data
  const recentDocuments = [
    { id: 1, name: 'John Smith Resume', type: 'pdf', date: '2023-05-10' },
    { id: 2, name: 'Sarah Johnson CV', type: 'docx', date: '2023-05-12' },
    { id: 3, name: 'Michael Chen Resume', type: 'pdf', date: '2023-05-15' },
  ];
  
  const quickStats = {
    totalResumes: 124,
    analyzedToday: 12,
    pendingReview: 5,
    successRate: 87
  };
  
  const recentActivities = [
    { id: 1, action: 'Uploaded 3 new resumes', user: 'Emily D.', time: '2 hours ago' },
    { id: 2, action: 'Analyzed 5 resumes', user: 'Michael C.', time: '4 hours ago' },
    { id: 3, action: 'Updated matching criteria', user: 'Sarah J.', time: '1 day ago' },
    { id: 4, action: 'Added new job role', user: 'John S.', time: '2 days ago' },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Workspace</h2>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Link to="/upload" className="bg-white rounded-lg shadow p-6 flex items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Upload Resumes</h3>
            <p className="text-gray-500 text-sm">Add new documents to your collection</p>
          </div>
        </Link>
        
        <Link to="/dataset" className="bg-white rounded-lg shadow p-6 flex items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">View Dataset</h3>
            <p className="text-gray-500 text-sm">Review your resume database</p>
          </div>
        </Link>
        
        <Link to="/dashboard" className="bg-white rounded-lg shadow p-6 flex items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Analytics Dashboard</h3>
            <p className="text-gray-500 text-sm">View data insights and metrics</p>
          </div>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
          <div className="bg-indigo-50 p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Quick Stats</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded p-3">
                <div className="text-sm text-gray-500">Total Resumes</div>
                <div className="text-xl font-bold text-gray-800">{quickStats.totalResumes}</div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-500">Analyzed Today</div>
                <div className="text-xl font-bold text-gray-800">{quickStats.analyzedToday}</div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-500">Pending Review</div>
                <div className="text-xl font-bold text-gray-800">{quickStats.pendingReview}</div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-500">Success Rate</div>
                <div className="text-xl font-bold text-gray-800">{quickStats.successRate}%</div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Link to="/dashboard" className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                View Full Dashboard →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Documents */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
          <div className="bg-indigo-50 p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Documents</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recentDocuments.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-2 border-b last:border-0">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {doc.type === 'pdf' ? (
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">{doc.name}</div>
                      <div className="text-xs text-gray-500">Uploaded on {doc.date}</div>
                    </div>
                  </div>
                  <div>
                    <Link to={`/analysis?id=${doc.id}`} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <Link to="/dataset" className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                View All Documents →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
          <div className="bg-indigo-50 p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recentActivities.map(activity => (
                <div key={activity.id} className="p-2 border-b last:border-0">
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium text-gray-800">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  <div className="text-xs text-gray-500">by {activity.user}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800">
                View All Activity →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desk; 