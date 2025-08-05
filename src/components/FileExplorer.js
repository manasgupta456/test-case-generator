import React from 'react';

function FileExplorer({ files, onSelectFiles }) {
  return (
    <div>
      <h2>Select Files</h2>
      {files.map((file, i) => (
        <div key={i}>
          <input type="checkbox" onChange={() => onSelectFiles(file)} />
          {file}
        </div>
      ))}
    </div>
  ); 
}

export default FileExplorer;
