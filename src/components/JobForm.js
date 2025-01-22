import React, { useState } from 'react';

function JobForm({ onAdd }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ company, position, status });
    setCompany('');
    setPosition('');
    setStatus('Applied');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
