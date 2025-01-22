import React from 'react';

function JobStats({ jobs }) {
  const total = jobs.length;
  const interviews = jobs.filter((job) => job.status === 'Interview').length;
  const offers = jobs.filter((job) => job.status === 'Offer').length;
  const rejections = jobs.filter((job) => job.status === 'Rejected').length;

  return (
    <div>
      <h2>Stats</h2>
      <p>Total Applications: {total}</p>
      <p>Interviews: {interviews}</p>
      <p>Offers: {offers}</p>
      <p>Rejections: {rejections}</p>
    </div>
  );
}

export default JobStats;
