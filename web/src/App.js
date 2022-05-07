import React from 'react';
import { useEffect } from 'react';
import RepoCard from './RepoCard';
import './App.css';

export function App() {
  const [loading, setLoading] = React.useState(true);
  const [repos, setRepos] = React.useState([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    // get repos from API localhost:4000/repos and set error if error

    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="Title">SilverOrange Repos List</div>
      {loading && <div>Loading Repos...</div>}
      {!loading && repos.length > 0 && (
        <ul className="Repo-list">
          {repos.map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
        </ul>
      )}
      {!loading && !repos.length && <div>Error Loading repos: {error}</div>}
    </div>
  );
}
