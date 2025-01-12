// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-tab"><Link to="/">Home</Link></li>
        <li className="sidebar-tab"><Link to="/account">Account</Link></li>
        <li className="sidebar-tab"><Link to="/patients">Patients</Link></li>
        <li className="sidebar-tab"><Link to="/daily-care-plans">Daily Care Plans</Link></li>
        <li className="sidebar-tab"><Link to="/administration">Administration</Link></li>
        <li className="sidebar-tab"><Link to="/incident-reporting">Incident Reporting</Link></li>
        <li className="sidebar-tab"><Link to="/communications-log">Communications Log</Link></li>
        <li className="sidebar-tab"><Link to="/task-management">Task Management</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
