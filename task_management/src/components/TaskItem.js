import React from "react";

const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => completeTask(task.id)}>
        {task.completed ? "Incomplete" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
