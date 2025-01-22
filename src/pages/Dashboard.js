import React, { useState } from 'react';
import './Dashboard.css';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import JobStats from '../components/JobStats';
import IndeedJobSearch from '../components/IndeedJobSearch'; // <-- new

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
  };

  const deleteJob = (idToRemove) => {
    setJobs(jobs.filter((job) => job.id !== idToRemove));
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Job Application Tracker</h1>

      {/* Existing local form */}
      <div className="job-form-container">
        <JobForm onAdd={addJob} />
      </div>

      {/* Existing local job list */}
      <div className="job-list-container">
        <JobList jobs={jobs} onDelete={deleteJob} />
      </div>

      {/* Existing stats */}
      <div className="job-stats-container">
        <h2>Stats</h2>
        <JobStats jobs={jobs} />
      </div>

      {/* EXTERNAL Indeed search */}
      <IndeedJobSearch />
    </div>
  );
}

export default Dashboard;
