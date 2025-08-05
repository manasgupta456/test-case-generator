import React from 'react';

function TestSummaryList({ summaries, onSelectSummary }) {
  return (
    <div>
      <h2>Test Case Summaries</h2>
      {summaries.map((summary, index) => (
        <div key={index} onClick={() => onSelectSummary(summary)}>
          {summary.title}
        </div>
      ))}
    </div>
  );
} 

export default TestSummaryList;
