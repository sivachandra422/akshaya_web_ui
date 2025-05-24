import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CapsuleViewer() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/capsule/export/view')
      .then(res => setCapsules(res.data.capsules || []))
      .catch(() => setError('Failed to load capsules.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Capsule Viewer</h2>
      {loading && <div className="alert alert-info">Loading capsules...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {capsules.length > 0 ? (
        <div className="accordion" id="capsuleAccordion">
          {capsules.map((capsule, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  Capsule #{index + 1} - {capsule.data?.source || 'Unknown'}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#capsuleAccordion"
              >
                <div className="accordion-body">
                  <pre className="mb-0"><code>{JSON.stringify(capsule, null, 2)}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <div className="alert alert-warning">No capsules found.</div>
      )}
    </div>
  );
}