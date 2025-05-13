import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { isDarkMode } = useTheme();
  
  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Dataset', 
      path: '/dataset', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    { 
      name: 'Upload', 
      path: '/upload', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    { 
      name: 'Desk', 
      path: '/desk', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: 'Analysis', 
      path: '/analysis', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    { 
      name: 'Sort', 
      path: '/sort', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
        </svg>
      )
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      name: 'Admin', 
      path: '/admin', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-700'} text-white transition-all duration-300 ease-in-out h-screen fixed`}>
        <div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-indigo-800'}`}>
          {sidebarOpen ? (
            <Link to="/" className="text-xl font-bold text-white">CV Analyzer</Link>
          ) : (
            <Link to="/" className="text-xl font-bold text-white">CV</Link>
          )}
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              )}
            </svg>
          </button>
        </div>
        
        <nav className="mt-5">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? `${isDarkMode ? 'bg-gray-700' : 'bg-indigo-800'} text-white` 
                      : `text-indigo-100 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-indigo-600'}`
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {sidebarOpen && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={`absolute bottom-0 w-full p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-indigo-800'}`}>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-indigo-500'} flex items-center justify-center text-white font-semibold`}>
              UR
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">User Name</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-indigo-200'}`}>user@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 ease-in-out`}>
        <div className="p-6">
          <header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center`}>
            <div>
              <button onClick={toggleSidebar} className={`md:hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="relative">
                <button className="flex items-center focus:outline-none">
                  <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-indigo-100 text-indigo-600'} flex items-center justify-center font-semibold`}>
                    UR
                  </div>
                </button>
              </div>
            </div>
          </header>
          
          <main className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} rounded-lg shadow-sm p-6`}>
            <Outlet />
          </main>
        </div>
        
        <footer className={`${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'} p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} text-center text-sm`}>
          <p>&copy; {new Date().getFullYear()} CV Analyzer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout; 