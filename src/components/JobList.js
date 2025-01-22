import React from 'react';

function JobList({ jobs, onDelete }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <strong>{job.company}</strong> - {job.position} ({job.status})
          {' '}
          <button onClick={() => onDelete(job.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default JobList;
