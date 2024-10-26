import { useState } from 'react';
import './App.css';

function App() {
  // State for personal information
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  // State for emergency contact
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!'); // Placeholder alert for form submission
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <header className="App-header" style={{ textAlign: 'left', width: '60%' }}>
        <h2>Resident Information Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <fieldset style={{ marginBottom: '20px', padding: '10px' }}>
            <legend>Resident Information Submission</legend>

            <label>Name:</label>
            <input
              type="text"
              placeholder="Resident Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Age:</label>
            <input
              type="number"
              placeholder="Resident Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Birthday:</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Gender:</label>
            <input
              type="text"
              placeholder="Resident Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Room/Bed Number:</label>
            <input
              type="text"
              placeholder="Assigned Room/Bed Number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </fieldset>

          {/* Emergency Contact Information */}
          <fieldset style={{ marginBottom: '20px', padding: '10px' }}>
            <legend>Emergency Contact Information</legend>

            <label>Contact Name:</label>
            <input
              type="text"
              placeholder="Enter emergency contact name"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Contact Email:</label>
            <input
              type="email"
              placeholder="Enter emergency contact email"
              value={emergencyEmail}
              onChange={(e) => setEmergencyEmail(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <label>Contact Phone Number:</label>
            <input
              type="tel"
              placeholder="Enter emergency contact phone"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </fieldset>

          {/* Submit Button */}
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>

        {/* Display Summary */}
        <div style={{ marginTop: '20px' }}>
          <h3>Summary</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Birthday:</strong> {birthday}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Room/Bed Number:</strong> {roomNumber}</p>

          <h4>Emergency Contact</h4>
          <p><strong>Name:</strong> {emergencyName}</p>
          <p><strong>Email:</strong> {emergencyEmail}</p>
          <p><strong>Phone:</strong> {emergencyPhone}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
