import React, { useState } from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import JobStats from '../components/JobStats';

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    // Add an ID so we can delete by ID, etc.
    const jobWithId = { ...newJob, id: Date.now() };
    setJobs([...jobs, jobWithId]);
  };

  const deleteJob = (idToRemove) => {
    setJobs(jobs.filter((job) => job.id !== idToRemove));
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={addJob} />
      <JobList jobs={jobs} onDelete={deleteJob} />
      <JobStats jobs={jobs} />
    </div>
  );
}

export default Dashboard;
