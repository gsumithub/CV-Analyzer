import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoAnalysisEnabled, setAutoAnalysisEnabled] = useState(true);
  const [languagePreference, setLanguagePreference] = useState('english');
  
  // Use theme context instead of local state
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Settings</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-indigo-50 dark:bg-indigo-900 p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Application Settings</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Configure your CV Analyzer experience</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {/* Display Settings */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3">Display</h4>
              <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Dark Mode</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Enable dark mode for the interface</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                    <input
                      type="checkbox"
                      id="darkMode"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                    />
                    <label
                      htmlFor="darkMode"
                      className={`block h-6 overflow-hidden rounded-full transition-colors cursor-pointer ${
                        isDarkMode ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full transition-transform transform bg-white border border-gray-200 ${
                          isDarkMode ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">Language</p>
                  <select
                    value={languagePreference}
                    onChange={(e) => setLanguagePreference(e.target.value)}
                    className="w-full md:w-1/3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Notification Settings */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3">Notifications</h4>
              <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Email Notifications</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Receive resume upload and analysis notifications</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                    <input
                      type="checkbox"
                      id="notifications"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={notificationsEnabled}
                      onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                    />
                    <label
                      htmlFor="notifications"
                      className={`block h-6 overflow-hidden rounded-full transition-colors cursor-pointer ${
                        notificationsEnabled ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full transition-transform transform bg-white border border-gray-200 ${
                          notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analysis Settings */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3">Analysis</h4>
              <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Auto Analysis</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Automatically analyze new resume uploads</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                    <input
                      type="checkbox"
                      id="autoAnalysis"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={autoAnalysisEnabled}
                      onChange={() => setAutoAnalysisEnabled(!autoAnalysisEnabled)}
                    />
                    <label
                      htmlFor="autoAnalysis"
                      className={`block h-6 overflow-hidden rounded-full transition-colors cursor-pointer ${
                        autoAnalysisEnabled ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full transition-transform transform bg-white border border-gray-200 ${
                          autoAnalysisEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* User Administration */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3">Administration</h4>
              <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200">Manage user accounts and permissions</p>
                <div className="flex space-x-3">
                  <Link 
                    to="/admin" 
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors"
                  >
                    Go to Admin Panel
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t dark:border-gray-700 flex justify-end">
            <div className="space-x-3">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings; 