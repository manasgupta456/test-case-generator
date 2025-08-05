import React from 'react';

function TestCaseCodeView({ code }) {
  return (
    <div>
      <h2>Generated Test Case Code</h2>
      <pre>{code}</pre>
    </div>
  );
}
 
export default TestCaseCodeView;
