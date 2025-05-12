import UploaderRole from '../roles/UploaderRole';
import AnalyzerRole from '../roles/AnalyzerRole';

function RolesPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">User Roles</h2>
      <p className="mb-6 text-gray-600">Select a role to access different features of the CV Analyzer</p>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        <UploaderRole />
        <AnalyzerRole />
      </div>
    </>
  );
}

export default RolesPage; 