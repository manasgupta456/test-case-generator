import React, { useState } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
import TestSummaryList from './components/TestSummaryList';
import TestCaseCodeView from './components/TestCaseCodeView';
import GithubPRButton from './components/GithubPRButton';

function App() {
  const [files] = useState(['App.js', 'index.js', 'Button.js', 'LoginForm.js']);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [selectedSummary, setSelectedSummary] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');

  // Dummy test summaries
  const dummySummaries = [
    { title: 'Test Login Form Submit' },
    { title: 'Test Button Click' },
    { title: 'Test Component Mount' }
  ];

  const handleFileSelect = (file) => {
    setSelectedFiles((prev) =>
      prev.includes(file) ? prev.filter((f) => f !== file) : [...prev, file]
    );
  };

  const handleGenerateSummaries = () => {
    setSummaries(dummySummaries);
  };

  const handleSelectSummary = (summary) => {
    setSelectedSummary(summary);
    // Dummy test case code
    setGeneratedCode(`// Auto-generated test case for:\n// ${summary.title}\n\ntest('...', () => {...});`);
  };

  const handleCreatePR = () => {
    alert('🔃 Pull request creation simulated.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🧪 Test Case Generator</h1>
      </header>
      <div className="dashboard">
        <div className="panel left">
          <FileExplorer files={files} onSelectFiles={handleFileSelect} />
          <button className="generate-btn" onClick={handleGenerateSummaries}>
            Generate Test Cases
          </button>
        </div>
        <div className="panel middle">
          <TestSummaryList summaries={summaries} onSelectSummary={handleSelectSummary} />
        </div>
        <div className="panel right">
          {selectedSummary && <TestCaseCodeView code={generatedCode} />}
          {selectedSummary && <GithubPRButton onCreatePR={handleCreatePR} />}
        </div>
      </div>
    </div>
  );
}

export default App;
