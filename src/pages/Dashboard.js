import React, { useState } from 'react';
import './Dashboard.css';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import JobStats from '../components/JobStats';
import IndeedJobSearch from '../components/IndeedJobSearch';

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
    <div className="dashboard-wrapper">
      <header className="header-section">
        <h1>Job Application Tracker</h1>
      </header>

      <div className="grid-container">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <h2>Add Job</h2>
          <JobForm onAdd={addJob} />

          <div className="indeed-section">
            <h2>Indeed Job Search</h2>
            <IndeedJobSearch />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <h2>Stats</h2>
          <JobStats jobs={jobs} />

          <h2 style={{ marginTop: '2rem' }}>My Applications</h2>
          {/* Wrap JobList in a CSS class for styling */}
          <div className="job-list-container">
            <JobList jobs={jobs} onDelete={deleteJob} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
