import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">CV Analyzer</Link>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors font-medium">
              Sign In
            </button>
            <button className="text-white hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Using Outlet for nested routes */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
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
  )
}

export default App 