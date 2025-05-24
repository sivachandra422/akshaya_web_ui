import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function VitalsMonitor() {
  const [vitals, setVitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/capsule/export/filter?source=Ajingsa,Shruti,ShaktiBodhi')
      .then(res => setVitals(res.data.filtered_capsules || []))
      .catch(() => setError('Failed to load vitals data.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Vitals Monitor</h2>
      {loading && <div className="alert alert-info">Loading vitals data...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {vitals.length > 0 ? (
        <ul className="list-group">
          {vitals.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.data.source}</strong> — {item.data.type}
              <div className="text-muted small">
                {item.data.message && <div>Message: {item.data.message}</div>}
                <div>Timestamp: {item.timestamp}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div className="alert alert-warning">No vitals data found.</div>
      )}
    </div>
  );
}