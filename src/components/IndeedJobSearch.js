import React, { useState } from 'react';
import { fetchIndeedJobs } from '../api/indeedApi';

function IndeedJobSearch() {
  const [query, setQuery] = useState('developer');
  const [location, setLocation] = useState('New York');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const data = await fetchIndeedJobs(query, location);
      if (data && data.results) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    } catch (err) {
      setErrorMessage('Could not fetch jobs. Check console for details.');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Indeed Job Search</h2>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
        <div>
          <label>Query:</label><br />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label><br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {errorMessage && (
        <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>
      )}

      <ul style={{ marginTop: '1rem' }}>
        {results.map((job) => (
          <li key={job.jobkey || job.id} style={{ marginBottom: '1rem' }}>
            <strong>{job.title}</strong><br />
            <em>{job.company_name}</em> – {job.location}<br />
            {job.snippet && job.snippet.substring(0, 100)}...
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndeedJobSearch;
