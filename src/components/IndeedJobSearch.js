import React, { useState } from 'react';
import { fetchIndeedJobs } from '../api/indeedApi';

function IndeedJobSearch() {
  const [query, setQuery] = useState('manager');
  const [location, setLocation] = useState('Chicago');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const data = await fetchIndeedJobs(query, location);
      console.log('API Response:', data);
      // NOTE: If the API returns data.hits, adapt accordingly:
      if (data && data.hits) {
        setResults(data.hits);
      } else {
        setResults([]);
      }
    } catch (err) {
      setErrorMessage('Could not fetch jobs. Check console for details.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="indeed-form">
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
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}

      <div className="indeed-results">
        <ul>
          {results.map((job) => (
            <li key={job.jobkey || job.id}>
              <strong>{job.title}</strong> <br />
              <em>{job.company_name}</em> – {job.location} <br />
              {job.snippet && job.snippet.substring(0, 100)}...
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndeedJobSearch;
