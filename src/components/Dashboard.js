import React from "react";
import Sidebar from "./Sidebar.js";
import TodoList from "./TodoList.js";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h1>To-Do List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default Dashboard;
