// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/daily-care-plans">Daily Care Plans</Link></li>
        <li><Link to="/administration">Administration</Link></li>
        <li><Link to="/incident-reporting">Incident Reporting</Link></li>
        <li><Link to="/communications-log">Communications Log</Link></li>
        <li><Link to="/task-management">Task Management</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
