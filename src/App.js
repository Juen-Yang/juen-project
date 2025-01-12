// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PatientsPage from './components/PatientsPage';
import DailyCarePlans from './components/DailyCarePlans';
import Administration from './components/Administration';
import IncidentReporting from './components/IncidentReporting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/daily-care-plans" element={<DailyCarePlans />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/incident-reporting" element={<IncidentReporting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

