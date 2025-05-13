import { useState } from 'react';

function Upload() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => {
      const fileType = file.type;
      return fileType === 'application/pdf' || 
             fileType === 'application/msword' || 
             fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    });
    
    setFiles(prev => [...prev, ...validFiles]);
  };
  
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => {
      const fileType = file.type;
      return fileType === 'application/pdf' || 
             fileType === 'application/msword' || 
             fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    });
    
    setFiles(prev => [...prev, ...validFiles]);
  };
  
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Resumes</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">Upload resumes and CVs (PDF, DOC, DOCX) for analysis</p>
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 ${
            isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-gray-500 mb-2">Drag and drop your resumes here</p>
          <p className="text-gray-400 text-sm mb-4">Supported formats: PDF, DOC, DOCX</p>
          <label className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors cursor-pointer">
            Browse Files
            <input 
              type="file" 
              className="hidden" 
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
              multiple
              onChange={handleFileChange}
            />
          </label>
        </div>
        
        {files.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Files ({files.length})</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700">{file.name}</span>
                    <span className="text-gray-400 text-sm ml-2">({(file.size / 1024).toFixed(2)} KB)</span>
                  </div>
                  <button 
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors">
                Upload All Files
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Upload; 