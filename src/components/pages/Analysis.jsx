import { useState } from 'react';

function Analysis() {
  // Sample data - in a real app, this would come from an API
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'John Smith',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB'],
      experience: '5 years',
      education: 'Bachelor of Computer Science',
      eligibility: 'Eligible',
      score: 85,
      matchedRoles: ['Frontend Developer', 'Full Stack Developer', 'JavaScript Developer']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      skills: ['Marketing', 'Data Analysis', 'Project Management', 'SQL'],
      experience: '3 years',
      education: 'Master of Business Administration',
      eligibility: 'Eligible',
      score: 78,
      matchedRoles: ['Marketing Analyst', 'Product Manager']
    },
    {
      id: 3,
      name: 'Michael Chen',
      skills: ['Python', 'Machine Learning', 'AI', 'Data Science', 'TensorFlow'],
      experience: '7 years',
      education: 'PhD in Computer Engineering',
      eligibility: 'Eligible',
      score: 92,
      matchedRoles: ['Data Scientist', 'ML Engineer', 'AI Researcher']
    },
    {
      id: 4,
      name: 'Emily Davies',
      skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma', 'Sketch'],
      experience: '2 years',
      education: 'Bachelor of Graphic Design',
      eligibility: 'On Hold',
      score: 65,
      matchedRoles: ['UI Designer', 'Graphic Designer']
    },
    {
      id: 5,
      name: 'Alex Turner',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
      experience: '4 years',
      education: 'Bachelor of Information Technology',
      eligibility: 'Not Eligible',
      score: 55,
      matchedRoles: ['Backend Developer', 'Java Developer']
    }
  ]);

  const [filterType, setFilterType] = useState('skills');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedEligibility, setSelectedEligibility] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [scoreThreshold, setScoreThreshold] = useState(50);
  
  // Get all unique skills, roles and eligibility statuses
  const allSkills = [...new Set(candidates.flatMap(candidate => candidate.skills))].sort();
  const allRoles = [...new Set(candidates.flatMap(candidate => candidate.matchedRoles))].sort();
  const eligibilityStatuses = [...new Set(candidates.map(candidate => candidate.eligibility))];
  
  // Filter candidates based on selected criteria
  const filteredCandidates = candidates.filter(candidate => {
    // First, filter by score threshold
    if (candidate.score < scoreThreshold) return false;
    
    // Then apply the specific filter type
    if (filterType === 'skills' && selectedSkill) {
      return candidate.skills.includes(selectedSkill);
    } else if (filterType === 'eligibility' && selectedEligibility) {
      return candidate.eligibility === selectedEligibility;
    } else if (filterType === 'roles' && selectedRole) {
      return candidate.matchedRoles.includes(selectedRole);
    }
    
    // If no specific filter is selected, show all candidates above score threshold
    return true;
  });

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Resume Analysis</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-indigo-50 p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Filter Candidates</h3>
          <p className="text-gray-600 text-sm">Find the right candidates based on specific criteria</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter By</label>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filterType === 'skills' 
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => setFilterType('skills')}
                >
                  Skills
                </button>
                <button 
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filterType === 'eligibility' 
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => setFilterType('eligibility')}
                >
                  Eligibility
                </button>
                <button 
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filterType === 'roles' 
                      ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => setFilterType('roles')}
                >
                  Job Roles
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {filterType === 'skills' ? 'Select Skill' : 
                 filterType === 'eligibility' ? 'Select Eligibility Status' : 
                 'Select Job Role'}
              </label>
              {filterType === 'skills' && (
                <select 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedSkill}
                  onChange={e => setSelectedSkill(e.target.value)}
                >
                  <option value="">All Skills</option>
                  {allSkills.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              )}
              
              {filterType === 'eligibility' && (
                <select 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedEligibility}
                  onChange={e => setSelectedEligibility(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  {eligibilityStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              )}
              
              {filterType === 'roles' && (
                <select 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedRole}
                  onChange={e => setSelectedRole(e.target.value)}
                >
                  <option value="">All Roles</option>
                  {allRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Score ({scoreThreshold})
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={scoreThreshold}
                onChange={e => setScoreThreshold(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-md font-medium text-gray-800">Results ({filteredCandidates.length})</h4>
              <button 
                className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200"
                onClick={() => {
                  setSelectedSkill('');
                  setSelectedEligibility('');
                  setSelectedRole('');
                  setScoreThreshold(50);
                }}
              >
                Reset Filters
              </button>
            </div>
            
            {filteredCandidates.length > 0 ? (
              <div className="space-y-4">
                {filteredCandidates.map(candidate => (
                  <div key={candidate.id} className="border rounded-md p-4 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-lg font-medium text-gray-800">{candidate.name}</h5>
                        <p className="text-gray-600 text-sm">{candidate.education} • {candidate.experience}</p>
                      </div>
                      <div className="flex items-center">
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          candidate.eligibility === 'Eligible' 
                            ? 'bg-green-100 text-green-800' 
                            : candidate.eligibility === 'On Hold'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {candidate.eligibility}
                        </div>
                        <div className="ml-3 flex items-center">
                          <span className="text-gray-700 font-semibold">{candidate.score}</span>
                          <span className="text-gray-500 text-sm ml-1">/100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="text-sm text-gray-600 mb-1">Skills</div>
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="text-sm text-gray-600 mb-1">Matched Job Roles</div>
                      <div className="flex flex-wrap gap-1">
                        {candidate.matchedRoles.map(role => (
                          <span key={role} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No candidates match the selected criteria
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Analysis; 