import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

function Dataset() {
  const { isDarkMode } = useTheme();
  
  // Sample resume data - in a real app, this would come from an API
  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      experience: '5 years',
      education: 'Bachelor of Computer Science',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB'],
      fileName: 'john_smith_resume.pdf',
      uploadDate: '2023-05-10'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 987-6543',
      experience: '3 years',
      education: 'Master of Business Administration',
      skills: ['Marketing', 'Data Analysis', 'Project Management', 'SQL'],
      fileName: 'sarah_johnson_cv.pdf',
      uploadDate: '2023-05-12'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '+1 (555) 456-7890',
      experience: '7 years',
      education: 'PhD in Computer Engineering',
      skills: ['Python', 'Machine Learning', 'AI', 'Data Science', 'TensorFlow'],
      fileName: 'michael_chen_resume.pdf',
      uploadDate: '2023-05-15'
    },
    {
      id: 4,
      name: 'Emily Davies',
      email: 'e.davies@example.com',
      phone: '+1 (555) 234-5678',
      experience: '2 years',
      education: 'Bachelor of Graphic Design',
      skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma', 'Sketch'],
      fileName: 'emily_davies_portfolio.pdf',
      uploadDate: '2023-05-18'
    }
  ]);

  return (
    <>
      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-6`}>Resume Dataset</h2>
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-6`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 md:mb-0`}>
            Manage all uploaded resumes and CVs in one place
          </p>
          <div className="flex space-x-3">
            <Link 
              to="/upload" 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Upload New
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Name
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Contact
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Document
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Upload Date
                </th>
                <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {resumes.map(resume => (
                <tr key={resume.id} className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{resume.name}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resume.experience} experience</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{resume.email}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resume.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{resume.fileName}</span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {resume.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/analysis?id=${resume.id}`} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3">
                      Analyze
                    </Link>
                    <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Showing <span className="font-medium">{resumes.length}</span> of <span className="font-medium">{resumes.length}</span> resumes
          </div>
          <div className="flex space-x-2">
            <Link to="/upload" className={`px-3 py-1 border ${isDarkMode ? 'border-indigo-500 bg-gray-700 text-indigo-300' : 'border-indigo-300 bg-white text-indigo-500'} rounded-md ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-indigo-50'}`}>
              Upload More
            </Link>
            <Link to="/analysis" className={`px-3 py-1 ${isDarkMode ? 'bg-indigo-900 text-indigo-300 border-indigo-700' : 'bg-indigo-50 text-indigo-600 border-indigo-200'} rounded-md border`}>
              Analyze All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dataset; 