import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import MirrorStatus from './components/MirrorStatus';
import CapsuleViewer from './components/CapsuleViewer';
import VitalsMonitor from './components/VitalsMonitor';
import JournalEntry from './components/JournalEntry';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/mirror" />} />
          <Route path="/mirror" element={<MirrorStatus />} />
          <Route path="/capsules" element={<CapsuleViewer />} />
          <Route path="/vitals" element={<VitalsMonitor />} />
          <Route path="/journal" element={<JournalEntry />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}