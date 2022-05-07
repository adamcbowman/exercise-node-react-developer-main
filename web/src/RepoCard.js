import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <li key={repo.id} className="Repo-item">
      <button>
        <div className="Repo-card">
          Repo Name: {repo.name}, Description: {repo.description}, Language:{' '}
          {repo.language}, Forks: {repo.forks}
        </div>
      </button>
    </li>
  );
};

export default RepoCard;
