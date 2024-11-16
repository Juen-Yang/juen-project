import React, { useState } from 'react';
import TaskFormModal from './TaskFormModal';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-list">
      <div className="header">
        <button onClick={() => setShowModal(true)} className="add-task-btn">
          Add New Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <div onClick={() => toggleTaskCompletion(task.id)}>
              <span className="task-name">{task.name}</span>
              <span className="task-type">Type: {task.type}</span>
              <span className="task-date">Due: {task.dueDate}</span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <TaskFormModal
          onClose={() => setShowModal(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}

export default TodoList;
