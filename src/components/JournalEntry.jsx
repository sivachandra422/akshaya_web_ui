import React, { useState } from 'react';
import axios from 'axios';

export default function JournalEntry() {
  const [entry, setEntry] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setError(null);

    if (!entry.trim()) {
      setError('Entry cannot be empty.');
      return;
    }

    try {
      const res = await axios.post('/journal/create', { entry });
      if (res.status === 200 || res.status === 201) {
        setStatus('Journal entry submitted successfully.');
        setEntry('');
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      setError('Failed to submit journal entry.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">New Journal Entry</h2>
      {status && <div className="alert alert-success">{status}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="journalText" className="form-label">Entry</label>
          <textarea
            id="journalText"
            className="form-control"
            rows="5"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write your thoughts, observations, or experiences here..."
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}