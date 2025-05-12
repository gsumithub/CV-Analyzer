import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">CV Analyzer</h3>
              <p className="text-gray-400 mt-1">Making recruitment smarter and faster</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Help</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CV Analyzer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 