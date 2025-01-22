// src/components/ExternalJobSearch.js
import React, { useState } from 'react';
import { fetchJobListings } from '../api/jobsApi';

function ExternalJobSearch() {
  const [query, setQuery] = useState('developer');
  const [location, setLocation] = useState('New York');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchJobListings(query, location);
      // Adzuna returns data in data.results
      setResults(data.results || []);
    } catch (error) {
      alert('Error fetching external job data');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>External Job Search</h2>
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
        <div>
          <button type="submit">Search</button>
        </div>
      </form>

      <ul style={{ marginTop: '1rem' }}>
        {results.map((job) => (
          <li key={job.id} style={{ marginBottom: '1rem' }}>
            <strong>{job.title}</strong><br />
            <em>{job.location.display_name}</em><br />
            {job.description && job.description.substring(0, 100)}...
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalJobSearch;
