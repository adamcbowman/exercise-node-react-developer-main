import React from 'react';
import { useState, useEffect } from 'react';

const CommitDetails = (url) => {
  const [loading, setLoading] = useState(true);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // get commits from url
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCommits(data);
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="Commit-details">
      {loading && <div>Loading Commits...</div>}
      <h1>Commit details</h1>
      <p>
        {commits.map((commit) => {
          return (
            <div key={commit.id}>
              <h2>{commit.commit.message}</h2>

              <p>{commit.commit.author.date}</p>
              <p>{commit.commit.author.name}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default CommitDetails;
