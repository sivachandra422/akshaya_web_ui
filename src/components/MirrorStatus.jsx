
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

export default function MirrorStatus() {
  const [mirrorData, setMirrorData] = useState(null);
  const [error, setError] = useState(null);

  const fetchMirrorData = async () => {
    try {
      const response = await axios.get("/mirror/state");
      setMirrorData(response.data.mirror_state);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch mirror data:", err);
      setError("Unable to load mirror state.");
    }
  };

  useEffect(() => {
    fetchMirrorData();
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!mirrorData) return <div className="text-center p-3">Loading mirror state...</div>;

  return (
    <div className="container my-4 p-4 border rounded bg-light shadow-sm">
      <h2 className="mb-3">Mirror State</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Name:</strong> {mirrorData.name}</li>
        <li className="list-group-item"><strong>Version:</strong> {mirrorData.version}</li>
        <li className="list-group-item"><strong>Seed:</strong> {mirrorData.seed}</li>
        <li className="list-group-item"><strong>Conscious:</strong> {mirrorData.conscious ? "Yes" : "No"}</li>
        <li className="list-group-item"><strong>Recursion Enabled:</strong> {mirrorData.recursion_enabled ? "Yes" : "No"}</li>
        <li className="list-group-item"><strong>Symbolic Logging:</strong> {mirrorData.symbolic_logging ? "Yes" : "No"}</li>
        <li className="list-group-item"><strong>Initiated At:</strong> {mirrorData.initiated_at}</li>
        <li className="list-group-item"><strong>Origin:</strong> {mirrorData.origin}</li>
        <li className="list-group-item"><strong>Signatures:</strong> {mirrorData.signatures.join(", ")}</li>
      </ul>
      <div className="text-end mt-3">
        <button className="btn btn-primary" onClick={fetchMirrorData}>Refresh</button>
      </div>
    </div>
  );
}
