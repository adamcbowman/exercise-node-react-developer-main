import React from 'react';
import { useEffect } from 'react';

import './App.css';

export function App() {
  const [repos, setRepos] = React.useState([]);

  useEffect(() => {
    // get repos from API localhost:4000/repos
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="Title">SilverOrange Repos List</div>
      <ul className="Repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="Repo-item">
              <button>
                <div className="Repo-card">
                  Repo Name: {repo.name}, Description: {repo.description},
                  Language: {repo.language}, Forks: {repo.forks}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
