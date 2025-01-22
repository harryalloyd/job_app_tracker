import React, { useState } from 'react';
import './Dashboard.css'; // <-- NEW IMPORT
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import JobStats from '../components/JobStats';

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    const jobWithId = { ...newJob, id: Date.now() };
    setJobs([...jobs, jobWithId]);
  };

  const deleteJob = (idToRemove) => {
    setJobs(jobs.filter((job) => job.id !== idToRemove));
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Job Application Tracker</h1>

      <div className="job-form-container">
        <JobForm onAdd={addJob} />
      </div>

      <div className="job-list-container">
        <JobList jobs={jobs} onDelete={deleteJob} />
      </div>

      <div className="job-stats-container">
        <h2>Stats</h2>
        <JobStats jobs={jobs} />
      </div>
    </div>
  );
}

export default Dashboard;
