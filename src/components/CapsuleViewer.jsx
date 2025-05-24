
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

export default function CapsuleViewer() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCapsules = async () => {
    try {
      const response = await axios.get("/capsule");
      setCapsules(response.data || []);
      setError(null);
    } catch (err) {
      console.error("Failed to load capsules:", err);
      setError("Failed to load capsules.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  return (
    <div className="container my-4 p-4 border bg-white rounded shadow-sm">
      <h2 className="mb-3">Capsule Viewer</h2>
      {loading && <div className="alert alert-info">Loading capsules...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && capsules.length === 0 && <p>No capsules available.</p>}

      <div className="accordion" id="capsuleAccordion">
        {capsules.map((capsule, index) => (
          <div className="accordion-item" key={capsule.id || index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {capsule.type?.toUpperCase() || "CAPSULE"} — {capsule.timestamp}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#capsuleAccordion"
            >
              <div className="accordion-body">
                {capsule.content || JSON.stringify(capsule)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
