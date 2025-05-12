import { Link } from 'react-router-dom';

const navigationCards = [
  {
    id: 1,
    title: 'Upload',
    description: 'Upload new resumes and CVs for analysis',
    path: '/upload',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Dashboard',
    description: 'View your recruitment dashboard with insights',
    path: '/dashboard',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Analysis',
    description: 'Detailed analysis of candidate profiles',
    path: '/analysis',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Admin Panel',
    description: 'Manage users, settings and permissions',
    path: '/admin',
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Sort & View',
    description: 'Sort and filter candidates by skills and experience',
    path: '/sort',
    color: 'bg-yellow-500',
    hoverColor: 'hover:bg-yellow-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'View hiring metrics and recruitment analytics',
    path: '/analytics',
    color: 'bg-teal-500',
    hoverColor: 'hover:bg-teal-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'User Roles',
    description: 'Switch between Uploader and Analyzer roles',
    path: '/roles',
    color: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome to CV Analyzer</h2>
      
      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {navigationCards.map((card) => (
          <Link 
            key={card.id} 
            to={card.path} 
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`p-6 ${card.color} text-white`}>
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{card.description}</p>
              <div className={`mt-4 w-full ${card.color} text-white px-4 py-2 rounded-md ${card.hoverColor} transition-colors text-center`}>
                {card.title === 'Upload' ? 'Start Upload' : 
                 card.title === 'Dashboard' ? 'Go to Dashboard' : 
                 card.title === 'Analysis' ? 'View Analysis' :
                 card.title === 'Admin Panel' ? 'Access Admin' :
                 card.title === 'Sort & View' ? 'Sort Candidates' : 
                 card.title === 'Analytics' ? 'View Analytics' :
                 'Switch Roles'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home; 