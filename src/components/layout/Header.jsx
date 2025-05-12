import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Upload', path: '/upload' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'Sort & View', path: '/sort' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Roles', path: '/roles' },
    { name: 'Admin', path: '/admin' },
  ];
  
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-indigo-600">CV Analyzer</Link>
            <button className="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm hover:text-indigo-600 transition-colors ${
                  location.pathname === item.path
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium transition-colors">
              Help
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
              UR
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 