import React, { useState } from "react";
import "./IncidentReporting.css";

function IncidentReporting() {
  const [selectedOption, setSelectedOption] = useState("Report Incident");
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      date: "2025-01-01",
      time: "10:00 AM",
      type: "Fall",
      status: "Pending",
      description: "Resident slipped in the hallway.",
    },
    {
      id: 2,
      date: "2025-01-05",
      time: "3:00 PM",
      type: "Equipment Failure",
      status: "Resolved",
      description: "Broken wheelchair in Room 102.",
    },
  ]);

  const handleNewIncident = (event) => {
    event.preventDefault();
    const newIncident = {
      id: incidents.length + 1,
      date: event.target.date.value,
      time: event.target.time.value,
      type: event.target.type.value,
      status: "Pending",
      description: event.target.description.value,
    };
    setIncidents([...incidents, newIncident]);
    setSelectedOption("Overview");
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Report Incident":
        return (
          <div>
            <h3>Report New Incident</h3>
            <form className="incident-form" onSubmit={handleNewIncident}>
              <label>Date:</label>
              <input type="date" name="date" required />

              <label>Time:</label>
              <input type="time" name="time" required />

              <label>Type of Incident:</label>
              <select name="type" required>
                <option value="">Select</option>
                <option value="Fall">Fall</option>
                <option value="Injury">Injury</option>
                <option value="Equipment Failure">Equipment Failure</option>
                <option value="Behavioral Issue">Behavioral Issue</option>
              </select>

              <label>Description:</label>
              <textarea name="description" required></textarea>

              <button type="submit">Submit Incident</button>
            </form>
          </div>
        );
      case "Overview":
        return (
          <div>
            <h3>Reported Incidents</h3>
            <table className="incident-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((incident) => (
                  <tr key={incident.id}>
                    <td>{incident.id}</td>
                    <td>{incident.date}</td>
                    <td>{incident.type}</td>
                    <td>{incident.status}</td>
                    <td>{incident.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <p>Select an option to manage incident reporting.</p>;
    }
  };

  return (
    <div className="incident-reporting">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Incident Reporting</h2>
        <ul>
          <li onClick={() => setSelectedOption("Report Incident")}>
            Report Incident
          </li>
          <li onClick={() => setSelectedOption("Overview")}>View Incidents</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default IncidentReporting;
