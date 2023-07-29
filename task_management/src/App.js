// App.js
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/main.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from API (Task 4: API Integration)
    // For now, use a mock array of tasks.
    const mockTasks = [
      { id: 1, title: "Task 1", description: "Description for Task 1", completed: false },
      { id: 2, title: "Task 2", description: "Description for Task 2", completed: true },
    ];
    setTasks(mockTasks);
  }, []);

  const addTask = (newTask) => {
    // Update tasks array and send data to API (Task 4: API Integration)
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const completeTask = (taskId) => {
    // Update the task's completed status and send data to API (Task 4: API Integration)
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    // Delete the task and send delete request to API (Task 4: API Integration)
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
