import React, { useState } from 'react';
import './DailyCarePlans.css';

function DailyCarePlans() {
  const [residents, setResidents] = useState([
    { id: 1, name: 'John Doe', carePlan: 'Medication at 9 AM, Breakfast at 8 AM' },
    { id: 2, name: 'Jane Smith', carePlan: 'Physical therapy at 10 AM, Lunch at 12 PM' },
  ]);

  const [selectedResident, setSelectedResident] = useState(null);

  return (
    <div className="daily-care-plans">
      <h2>Daily Care Plans</h2>

      {/* Resident List */}
      <div className="resident-list">
        <h3>Residents</h3>
        {residents.map((resident) => (
          <div
            key={resident.id}
            className="resident-card"
            onClick={() => setSelectedResident(resident)}
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
            <p>{selectedResident.carePlan}</p>
            <button>Edit Care Plan</button>
          </>
        ) : (
          <p>Select a resident to view their care plan.</p>
        )}
      </div>
    </div>
  );
}

export default DailyCarePlans;
