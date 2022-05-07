import React from 'react';
import { useState } from 'react';
import CommitDetails from './CommitDetails';

const RepoCard = ({ repo }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li key={repo.id} className="Repo-item">
      <button onClick={toggleDetails}>
        <div className="Repo-card">
          Repo Name: {repo.name}, Description: {repo.description}, Language:{' '}
          {repo.language}, Forks: {repo.forks}
        </div>
        {showDetails && (
          <CommitDetails url={repo.commits_url} full_name={repo.full_name} />
        )}
      </button>
    </li>
  );
};

export default RepoCard;
