import React, { useState } from 'react';
import './DailyCarePlans.css';

function DailyCarePlans() {
  const [residents, setResidents] = useState([]);
  const [newResidentName, setNewResidentName] = useState('');
  const [selectedResident, setSelectedResident] = useState(null);
  const [carePlan, setCarePlan] = useState('');

  // Add a new resident
  const handleAddResident = () => {
    if (newResidentName.trim() !== '') {
      setResidents([
        ...residents,
        { id: Date.now(), name: newResidentName, carePlan: '' },
      ]);
      setNewResidentName('');
    }
  };

  // Update care plan for the selected resident
  const handleSaveCarePlan = () => {
    setResidents(
      residents.map((resident) =>
        resident.id === selectedResident.id
          ? { ...resident, carePlan }
          : resident
      )
    );
    setSelectedResident(null);
    setCarePlan('');
  };

  return (
    <div className="daily-care-plans">
      <h2>Daily Care Plans</h2>

      {/* Add New Resident */}
      <div className="add-resident">
        <input
          type="text"
          value={newResidentName}
          onChange={(e) => setNewResidentName(e.target.value)}
          placeholder="Enter new resident name"
        />
        <button onClick={handleAddResident}>Add Resident</button>
      </div>

      {/* Resident List */}
      <div className="resident-list">
        <h3>Residents</h3>
        {residents.map((resident) => (
          <div
            key={resident.id}
            className="resident-card"
            onClick={() => {
              setSelectedResident(resident);
              setCarePlan(resident.carePlan);
            }}
          >
            <h4>{resident.name}</h4>
          </div>
        ))}
      </div>

      {/* Care Plan Details */}
      <div className="care-plan-details">
        {selectedResident ? (
          <>
            <h3>Care Plan for {selectedResident.name}</h3>
            <textarea
              value={carePlan}
              onChange={(e) => setCarePlan(e.target.value)}
              placeholder="Enter care plan details"
              rows="6"
            />
            <button onClick={handleSaveCarePlan}>Save Care Plan</button>
            <button
              onClick={() => {
                setSelectedResident(null);
                setCarePlan('');
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <p>Select a resident to view or edit their care plan.</p>
        )}
      </div>
    </div>
  );
}

export default DailyCarePlans;
