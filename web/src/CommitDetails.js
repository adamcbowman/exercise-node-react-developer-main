import React from 'react';
import { useState, useEffect } from 'react';

const CommitDetails = ({ url, full_name }) => {
  const [loading, setLoading] = useState(true);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // get commits from url
    // remove {/sha} from url
    const newUrl = url.replace('{/sha}', '');
    fetch(newUrl)
      .then((res) => res.json())
      .then((data) => {
        setCommits(data);
        setLoading(false);
      });
  }, [url]);

  // sort commits by date
  const sortedCommits = commits.sort((a, b) => {
    return (
      new Date(b.commit.committer.date) - new Date(a.commit.committer.date)
    );
  });

  return (
    <div className="Commit-details">
      {loading && <div>Loading Commits...</div>}
      {!loading && commits.length > 0 && (
        <>
          <h1>Most Recent Commit Details</h1>
          {sortedCommits[0].commit.author.date}
          <br />
          {sortedCommits[0].commit.author.name}
          <br />
          {sortedCommits[0].commit.message}
        </>
      )}
      <p>https://raw.githubusercontent.com/${full_name}/master/README.md</p>
    </div>
  );
};

export default CommitDetails;
