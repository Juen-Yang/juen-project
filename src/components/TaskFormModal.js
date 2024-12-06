import React, { useState } from 'react';
import './TaskFormModal.css';

function TaskFormModal({ onClose, onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskType, setTaskType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && dueDate && taskType) {
      onAddTask({ name: taskName, dueDate, type: taskType });
      setTaskName('');
      setDueDate('');
      setTaskType('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
            required
          />
          
          <label>Task Type</label>
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            required
          >
            <option value="" disabled>Select task type</option>
            <option value="Patient Care">Patient Care</option>
            <option value="Medication Administration">Medication Administration</option>
            <option value="Facility Management">Facility Management</option>
            <option value="Staff Coordination">Staff Coordination</option>
            <option value="Incident Reporting">Incident Reporting</option>
            <option value="Communication Log">Communication Log</option>
            <option value="Task Management">Task Management</option>
          </select>

          <label>Due Date</label>
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <div className="buttons">
            <button type="submit" className="save-btn">Save Task</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormModal;
