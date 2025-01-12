import React, { useState } from "react";
import "./Administration.css";

function Administration() {
  const [selectedOption, setSelectedOption] = useState("Overview");

  // Content for each option
  const renderContent = () => {
    switch (selectedOption) {
      case "Staff Management":
        return <p>Manage staff, add new staff, and update roles or schedules.</p>;
      case "Scheduling":
        return <p>View and manage staff shifts, approve leave requests, and more.</p>;
      case "Compliance":
        return <p>Track licenses, certifications, and regulatory compliance updates.</p>;
      case "Financials":
        return <p>Track budgets, expenses, and generate financial reports.</p>;
      case "Facility":
        return <p>Manage inventory, room assignments, and facility maintenance.</p>;
      case "Policies":
        return <p>View and update policies, and track staff training records.</p>;
      case "Emergency":
        return <p>Access emergency contacts and protocols for the facility.</p>;
      default:
        return <p>Welcome to the Administration Dashboard. Select an option to begin.</p>;
    }
  };

  return (
    <div className="administration-page">
      {/* Mini-Sidebar */}
      <div className="mini-sidebar">
        <ul>
          <li
            className={selectedOption === "Overview" ? "active" : ""}
            onClick={() => setSelectedOption("Overview")}
          >
            Overview
          </li>
          <li
            className={selectedOption === "Staff Management" ? "active" : ""}
            onClick={() => setSelectedOption("Staff Management")}
          >
            Staff Management
          </li>
          <li
            className={selectedOption === "Scheduling" ? "active" : ""}
            onClick={() => setSelectedOption("Scheduling")}
          >
            Scheduling
          </li>
          <li
            className={selectedOption === "Compliance" ? "active" : ""}
            onClick={() => setSelectedOption("Compliance")}
          >
            Compliance
          </li>
          <li
            className={selectedOption === "Financials" ? "active" : ""}
            onClick={() => setSelectedOption("Financials")}
          >
            Financials
          </li>
          <li
            className={selectedOption === "Facility" ? "active" : ""}
            onClick={() => setSelectedOption("Facility")}
          >
            Facility
          </li>
          <li
            className={selectedOption === "Policies" ? "active" : ""}
            onClick={() => setSelectedOption("Policies")}
          >
            Policies
          </li>
          <li
            className={selectedOption === "Emergency" ? "active" : ""}
            onClick={() => setSelectedOption("Emergency")}
          >
            Emergency
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>{selectedOption}</h2>
        {renderContent()}
      </div>
    </div>
  );
}

export default Administration;
