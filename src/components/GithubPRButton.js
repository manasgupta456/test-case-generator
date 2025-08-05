import React from 'react';

function GithubPRButton({ onCreatePR }) {
  return (
    <button onClick={onCreatePR}>Create Pull Request</button>
  );
}
 
export default GithubPRButton;
