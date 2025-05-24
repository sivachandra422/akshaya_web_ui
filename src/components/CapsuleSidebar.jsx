// CapsuleSidebar.jsx
import { useEffect, useState } from "react";

export default function CapsuleSidebar({ capsules, selectedSource, setSelectedSource }) {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const uniqueSources = [...new Set(capsules.map(c => c.data.source))];
    setSources(uniqueSources);
  }, [capsules]);

  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4 space-y-2 text-sm overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-700 mb-3">Filter by Source</h2>
      <button
        className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-200 ${selectedSource === 'all' ? 'bg-gray-100 font-semibold' : ''}`}
        onClick={() => setSelectedSource('all')}
      >
        All Sources
      </button>
      {sources.map((source, idx) => (
        <button
          key={idx}
          className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-200 ${selectedSource === source ? 'bg-gray-100 font-semibold' : ''}`}
          onClick={() => setSelectedSource(source)}
        >
          {source}
        </button>
      ))}
    </aside>
  );
}