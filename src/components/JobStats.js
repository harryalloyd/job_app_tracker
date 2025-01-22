import React from 'react';

function JobStats({ jobs }) {
  const total = jobs.length;
  const interviews = jobs.filter((j) => j.status === 'Interview').length;
  const offers = jobs.filter((j) => j.status === 'Offer').length;
  const rejects = jobs.filter((j) => j.status === 'Rejected').length;

  return (
    <div>
      <div className="stats-item">Total Applications: {total}</div>
      <div className="stats-item">Interviews: {interviews}</div>
      <div className="stats-item">Offers: {offers}</div>
      <div className="stats-item">Rejections: {rejects}</div>
    </div>
  );
}

export default JobStats;
