import { useState } from 'react';
import { Link } from 'react-router-dom';

function AnalyzerRole() {
  const [activeTab, setActiveTab] = useState('results');
  
  // Sample data for the bar chart
  const skillData = [
    { skill: 'JavaScript', count: 85, color: 'bg-blue-500' },
    { skill: 'React', count: 72, color: 'bg-blue-600' },
    { skill: 'Node.js', count: 65, color: 'bg-blue-700' },
    { skill: 'Python', count: 58, color: 'bg-indigo-500' },
    { skill: 'SQL', count: 50, color: 'bg-indigo-600' },
    { skill: 'AWS', count: 35, color: 'bg-indigo-700' },
  ];
  
  // Sample candidate data
  const candidates = [
    { id: 1, name: 'Alex Johnson', score: 92, skills: ['JavaScript', 'React', 'Node.js'], experience: '5 years', matched: true },
    { id: 2, name: 'Maria Garcia', score: 88, skills: ['Python', 'SQL', 'AWS'], experience: '3 years', matched: true },
    { id: 3, name: 'Sam Taylor', score: 76, skills: ['JavaScript', 'React', 'MongoDB'], experience: '2 years', matched: false },
    { id: 4, name: 'Lee Wong', score: 95, skills: ['Python', 'Data Science', 'ML'], experience: '7 years', matched: true },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 px-6 py-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analyzer Role
        </h3>
        <p className="text-purple-200 mt-1">View analysis, results, and visualizations</p>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-6 py-3 text-sm font-medium ${activeTab === 'results' 
            ? 'text-purple-600 border-b-2 border-purple-600' 
            : 'text-gray-500 hover:text-purple-500'}`}
          onClick={() => setActiveTab('results')}
        >
          Candidate Results
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${activeTab === 'graphs' 
            ? 'text-purple-600 border-b-2 border-purple-600' 
            : 'text-gray-500 hover:text-purple-500'}`}
          onClick={() => setActiveTab('graphs')}
        >
          Visualizations
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${activeTab === 'insights' 
            ? 'text-purple-600 border-b-2 border-purple-600' 
            : 'text-gray-500 hover:text-purple-500'}`}
          onClick={() => setActiveTab('insights')}
        >
          Insights
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {activeTab === 'results' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800">Candidate Results</h4>
                <p className="text-gray-500 text-sm">Showing top candidates based on skills match</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span>Match Score</span>
                  <button className="ml-1 text-purple-500 hover:text-purple-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span>Filters</span>
                  <button className="ml-1 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Match Score
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Skills
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{candidate.score}%</div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${candidate.score > 80 ? 'bg-green-500' : 'bg-yellow-500'}`}
                            style={{ width: `${candidate.score}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.map((skill, index) => (
                            <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {candidate.experience}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          candidate.matched 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {candidate.matched ? 'Matched' : 'Reviewing'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                        <button className="text-indigo-600 hover:text-indigo-900">Contact</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center">
              <button className="text-sm text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Results
              </button>
              
              <div className="flex items-center space-x-2">
                <button className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-gray-600">Page 1 of 1</span>
                <button className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'graphs' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800">Skills Analysis</h4>
                <p className="text-gray-500 text-sm">Distribution of skills across candidates</p>
              </div>
              
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded-md text-sm px-3 py-1 text-gray-600">
                  <option>All Skills</option>
                  <option>Technical Skills</option>
                  <option>Soft Skills</option>
                </select>
                <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-sm font-medium">
                  Refresh
                </button>
              </div>
            </div>
            
            {/* Skills Bar Chart */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
              <div className="mb-4">
                <h5 className="text-md font-medium text-gray-700 mb-3">Top Skills</h5>
                <div className="space-y-4">
                  {skillData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{item.skill}</span>
                        <span>{item.count} candidates</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${item.color}`}
                          style={{ width: `${(item.count / 85) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Experience Pie Chart Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="text-md font-medium text-gray-700 mb-3">Experience Levels</h5>
                <div className="h-64 flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    {/* Placeholder for a pie chart */}
                    <div className="absolute inset-0 rounded-full bg-blue-100 border-8 border-blue-500"></div>
                    <div className="absolute top-0 right-0 bottom-0 left-1/2 rounded-r-full bg-indigo-100 border-r-8 border-t-8 border-b-8 border-indigo-500 origin-center transform -rotate-45"></div>
                    <div className="absolute top-0 right-1/2 bottom-1/2 left-0 rounded-tl-full bg-purple-100 border-l-8 border-t-8 border-purple-500"></div>
                    <div className="absolute top-1/2 right-1/2 bottom-0 left-0 rounded-bl-full bg-pink-100 border-l-8 border-b-8 border-pink-500"></div>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-800 font-semibold">42</div>
                        <div className="text-xs text-gray-500">Total</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                    <span className="text-gray-600">Senior (45%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
                    <span className="text-gray-600">Mid-level (30%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                    <span className="text-gray-600">Junior (15%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-1"></div>
                    <span className="text-gray-600">Intern (10%)</span>
                  </div>
                </div>
              </div>
              
              {/* Education Distribution */}
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="text-md font-medium text-gray-700 mb-3">Education Background</h5>
                <div className="h-64 flex flex-col justify-center">
                  {/* Stacked bar chart placeholder */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Computer Science</div>
                    <div className="flex h-5">
                      <div className="bg-blue-600 w-1/2"></div>
                      <div className="bg-blue-400 w-1/4"></div>
                      <div className="bg-blue-300 w-1/8"></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Engineering</div>
                    <div className="flex h-5">
                      <div className="bg-purple-600 w-1/3"></div>
                      <div className="bg-purple-400 w-1/4"></div>
                      <div className="bg-purple-300 w-1/6"></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Business/Economics</div>
                    <div className="flex h-5">
                      <div className="bg-green-600 w-1/6"></div>
                      <div className="bg-green-400 w-1/4"></div>
                      <div className="bg-green-300 w-1/12"></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Other</div>
                    <div className="flex h-5">
                      <div className="bg-yellow-600 w-1/12"></div>
                      <div className="bg-yellow-400 w-1/8"></div>
                      <div className="bg-yellow-300 w-1/6"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div>
                    <span className="text-gray-600">PhD</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-1"></div>
                    <span className="text-gray-600">Masters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-300 rounded-full mr-1"></div>
                    <span className="text-gray-600">Bachelors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'insights' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800">Recruiting Insights</h4>
                <p className="text-gray-500 text-sm">AI-generated insights from candidate analysis</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="text-md font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Findings
                </h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>78% of candidates have experience with modern JavaScript frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Candidates with cloud certifications are in shorter supply than demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Machine learning specialists typically demand 15-20% higher compensation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Only 35% of candidates have significant backend experience</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="text-md font-medium text-gray-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Recommendations
                </h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Consider including AWS experience as a preferred qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Look for candidates with TypeScript experience for frontend roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Broaden geographic search to increase backend talent pool</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Consider junior developers with strong GitHub portfolios</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
              <h5 className="text-md font-medium text-purple-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI-Generated Insight
              </h5>
              <p className="text-sm text-purple-800 mb-3">
                Based on the current candidate pool, there appears to be an opportunity to target candidates with both front-end and cloud experience. Only 23% of candidates have both skill sets, yet job descriptions increasingly mention both.
              </p>
              <div className="flex space-x-2">
                <button className="text-sm text-purple-700 border border-purple-300 rounded-md px-3 py-1 hover:bg-purple-100">
                  Generate More Insights
                </button>
                <button className="text-sm text-purple-700 border border-purple-300 rounded-md px-3 py-1 hover:bg-purple-100">
                  Save to Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Last updated:</span> Today at 11:42 AM
          </div>
          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
            Export Analysis
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnalyzerRole; 