import { useState } from 'react';

function Sort() {
  // Sample resume data - in a real app, this would come from an API
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      experience: '5 years',
      education: 'Bachelor of Computer Science',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB'],
      uploadDate: '2023-05-10',
      relevance: 85,
      eligibility: 'Eligible',
      compatibility: 'High',
      skillsetMatch: 92
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      experience: '3 years',
      education: 'Master of Business Administration',
      skills: ['Marketing', 'Data Analysis', 'Project Management', 'SQL'],
      uploadDate: '2023-05-12',
      relevance: 78,
      eligibility: 'Eligible',
      compatibility: 'Medium',
      skillsetMatch: 74
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      experience: '7 years',
      education: 'PhD in Computer Engineering',
      skills: ['Python', 'Machine Learning', 'AI', 'Data Science', 'TensorFlow'],
      uploadDate: '2023-05-15',
      relevance: 92,
      eligibility: 'Eligible',
      compatibility: 'High',
      skillsetMatch: 96
    },
    {
      id: 4,
      name: 'Emily Davies',
      email: 'e.davies@example.com',
      experience: '2 years',
      education: 'Bachelor of Graphic Design',
      skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma', 'Sketch'],
      uploadDate: '2023-05-18',
      relevance: 65,
      eligibility: 'On Hold',
      compatibility: 'Low',
      skillsetMatch: 68
    },
    {
      id: 5,
      name: 'Alex Turner',
      email: 'a.turner@example.com',
      experience: '4 years',
      education: 'Bachelor of Information Technology',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
      uploadDate: '2023-05-19',
      relevance: 55,
      eligibility: 'Not Eligible',
      compatibility: 'Medium',
      skillsetMatch: 62
    }
  ]);

  const [sortCriteria, setSortCriteria] = useState('relevance');
  const [sortOrder, setSortOrder] = useState('desc');
  const [eligibilityFilter, setEligibilityFilter] = useState('All');
  const [compatibilityFilter, setCompatibilityFilter] = useState('All');
  const [skillThreshold, setSkillThreshold] = useState(50);

  // Filter candidates based on selected criteria
  const filteredCandidates = candidates.filter(candidate => {
    // Apply eligibility filter
    if (eligibilityFilter !== 'All' && candidate.eligibility !== eligibilityFilter) {
      return false;
    }
    
    // Apply compatibility filter
    if (compatibilityFilter !== 'All' && candidate.compatibility !== compatibilityFilter) {
      return false;
    }
    
    // Apply skill threshold filter
    if (candidate.skillsetMatch < skillThreshold) {
      return false;
    }
    
    return true;
  });

  // Sort candidates based on selected criteria
  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    let valueA = a[sortCriteria];
    let valueB = b[sortCriteria];
    
    // Handle string comparisons
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    }
    
    // Handle numeric comparisons
    if (sortOrder === 'asc') {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sort Candidates</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-gray-600 mb-6">
          Sort candidates based on relevance, eligibility, skillset match, and compatibility
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="skillsetMatch">Skillset Match</option>
              <option value="compatibility">Compatibility</option>
              <option value="name">Name</option>
              <option value="uploadDate">Upload Date</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort Order</label>
            <div className="flex space-x-2">
              <button 
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-md ${
                  sortOrder === 'desc' 
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
                onClick={() => setSortOrder('desc')}
              >
                Highest First
              </button>
              <button 
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-md ${
                  sortOrder === 'asc' 
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
                onClick={() => setSortOrder('asc')}
              >
                Lowest First
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Eligibility</label>
            <select 
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={eligibilityFilter}
              onChange={(e) => setEligibilityFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Eligible">Eligible</option>
              <option value="On Hold">On Hold</option>
              <option value="Not Eligible">Not Eligible</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Compatibility</label>
            <select 
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={compatibilityFilter}
              onChange={(e) => setCompatibilityFilter(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Skillset Match: {skillThreshold}%
          </label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={skillThreshold}
            onChange={(e) => setSkillThreshold(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="border-t pt-4 mb-4 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">Results ({sortedCandidates.length})</h3>
          <button 
            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-200 text-sm"
            onClick={() => {
              setSortCriteria('relevance');
              setSortOrder('desc');
              setEligibilityFilter('All');
              setCompatibilityFilter('All');
              setSkillThreshold(50);
            }}
          >
            Reset Filters
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Relevance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Eligibility
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skills Match
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compatibility
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedCandidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                        <div className="text-sm text-gray-500">{candidate.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${candidate.relevance}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-900">{candidate.relevance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      candidate.eligibility === 'Eligible'
                        ? 'bg-green-100 text-green-800'
                        : candidate.eligibility === 'On Hold'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {candidate.eligibility}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${candidate.skillsetMatch}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-900">{candidate.skillsetMatch}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      candidate.compatibility === 'High'
                        ? 'bg-blue-100 text-blue-800'
                        : candidate.compatibility === 'Medium'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {candidate.compatibility}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {sortedCandidates.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No candidates match the selected criteria
          </div>
        )}
      </div>
    </>
  );
}

export default Sort; 