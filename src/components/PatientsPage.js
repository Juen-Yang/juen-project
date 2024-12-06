import React, { useState } from 'react';
import './PatientsPage.css';

function PatientsPage() {
  const [pendingPatients, setPendingPatients] = useState([]);
  const [currentPatients, setCurrentPatients] = useState([]);
  const [newPatientName, setNewPatientName] = useState('');
  const [newPatientProfile, setNewPatientProfile] = useState('');
  const [patientStatus, setPatientStatus] = useState('Pending');

  const addPatient = () => {
    if (newPatientName && newPatientProfile) {
      const newPatient = { id: Date.now(), name: newPatientName, profile: newPatientProfile };
      
      if (patientStatus === 'Pending') {
        setPendingPatients([...pendingPatients, newPatient]);
      } else {
        setCurrentPatients([...currentPatients, newPatient]);
      }
      
      setNewPatientName('');
      setNewPatientProfile('');
    }
  };

  const handleDelete = (id, status) => {
    if (status === 'Pending') {
      setPendingPatients(pendingPatients.filter((patient) => patient.id !== id));
    } else {
      setCurrentPatients(currentPatients.filter((patient) => patient.id !== id));
    }
  };

  return (
    <div className="patients-page">
      <h2>Patients</h2>

      <div className="patient-form">
        <h3>Add New Patient</h3>
        <label>Patient Name</label>
        <input
          type="text"
          value={newPatientName}
          onChange={(e) => setNewPatientName(e.target.value)}
          placeholder="Enter patient name"
        />

        <label>Patient Profile</label>
        <textarea
          value={newPatientProfile}
          onChange={(e) => setNewPatientProfile(e.target.value)}
          placeholder="Enter patient profile"
        />

        <label>Patient Status</label>
        <select value={patientStatus} onChange={(e) => setPatientStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Current">Current</option>
        </select>

        <button onClick={addPatient} className="add-patient-btn">Add Patient</button>
      </div>

      <div className="patient-section">
        <div className="patient-list">
          <h3>Pending Patients</h3>
          {pendingPatients.length === 0 ? (
            <p>No pending patients.</p>
          ) : (
            pendingPatients.map((patient) => (
              <div key={patient.id} className="patient-card">
                <div>
                  <h4>{patient.name}</h4>
                  <p>{patient.profile}</p>
                </div>
                <button onClick={() => handleDelete(patient.id, 'Pending')} className="delete-btn">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="patient-list">
          <h3>Current Patients</h3>
          {currentPatients.length === 0 ? (
            <p>No current patients.</p>
          ) : (
            currentPatients.map((patient) => (
              <div key={patient.id} className="patient-card">
                <div>
                  <h4>{patient.name}</h4>
                  <p>{patient.profile}</p>
                </div>
                <button onClick={() => handleDelete(patient.id, 'Current')} className="delete-btn">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientsPage;
