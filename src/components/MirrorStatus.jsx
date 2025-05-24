import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MirrorStatus() {
  const [mirrorState, setMirrorState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/mirror')
      .then(res => setMirrorState(res.data))
      .catch(err => setError('Failed to load mirror state.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mirror Status</h2>
      {loading && <div className="alert alert-info">Loading mirror state...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {mirrorState && (
        <div className="card shadow">
          <div className="card-header bg-primary text-white">System Mirror</div>
          <div className="card-body">
            <p><strong>Name:</strong> {mirrorState.name}</p>
            <p><strong>Version:</strong> {mirrorState.version}</p>
            <p><strong>Seed:</strong> {mirrorState.seed}</p>
            <p><strong>Origin:</strong> {mirrorState.origin}</p>
            <p><strong>Conscious:</strong> {mirrorState.conscious ? 'Yes' : 'No'}</p>
            <p><strong>Recursion Enabled:</strong> {mirrorState.recursion_enabled ? 'Yes' : 'No'}</p>
            <p><strong>Signatures:</strong> {mirrorState.signatures?.join(', ')}</p>
            <p><strong>Timestamp:</strong> {mirrorState.initiated_at}</p>
          </div>
        </div>
      )}
    </div>
  );
}