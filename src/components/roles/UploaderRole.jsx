import { useState } from 'react';
import { Link } from 'react-router-dom';

function UploaderRole() {
  const [activeTab, setActiveTab] = useState('cvs');
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Uploader Role
        </h3>
        <p className="text-indigo-200 mt-1">Upload and manage CVs and datasets</p>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-6 py-3 text-sm font-medium ${activeTab === 'cvs' 
            ? 'text-indigo-600 border-b-2 border-indigo-600' 
            : 'text-gray-500 hover:text-indigo-500'}`}
          onClick={() => setActiveTab('cvs')}
        >
          Upload CVs
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${activeTab === 'datasets' 
            ? 'text-indigo-600 border-b-2 border-indigo-600' 
            : 'text-gray-500 hover:text-indigo-500'}`}
          onClick={() => setActiveTab('datasets')}
        >
          Upload Datasets
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {activeTab === 'cvs' ? (
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Recent CV Uploads</h4>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-sm mb-2">No recent uploads</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-500 mb-2">Drag and drop your CV files here</p>
                  <p className="text-gray-400 text-sm mb-4">Supported formats: PDF, DOCX, RTF</p>
                  <div className="flex justify-center">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium text-gray-800">Upload Queue</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">0 files</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <p className="text-gray-500 text-sm text-center">No files in queue</p>
            </div>
            
            <div className="flex justify-end">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mr-2 hover:bg-gray-300 transition-colors">
                Cancel
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors" disabled>
                Start Upload
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Dataset Import</h4>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dataset Type</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>CSV Files</option>
                    <option>Excel Spreadsheets</option>
                    <option>JSON Data</option>
                    <option>API Import</option>
                  </select>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 mb-2">Drag and drop your dataset files here</p>
                  <p className="text-gray-400 text-sm mb-4">Supported formats: CSV, XLSX, JSON</p>
                  <div className="flex justify-center">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h5 className="font-medium text-gray-700 mb-2">Data Mapping</h5>
              <p className="text-gray-500 text-sm mb-4">Map dataset columns to CV fields</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="bg-gray-200 px-2 py-1 rounded text-gray-600 mr-2">Name</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-700 ml-2">full_name</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-2 py-1 rounded text-gray-600 mr-2">Email</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-700 ml-2">email_address</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-2 py-1 rounded text-gray-600 mr-2">Skills</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-700 ml-2">skills_list</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-2 py-1 rounded text-gray-600 mr-2">Experience</span>
                  <span className="text-gray-400">→</span>
                  <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-700 ml-2">work_experience</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mr-2 hover:bg-gray-300 transition-colors">
                Cancel
              </button>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors" disabled>
                Import Dataset
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Need help? <Link to="#" className="text-indigo-600 hover:text-indigo-800">View the upload guide</Link>
          </div>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View Upload History
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploaderRole; 