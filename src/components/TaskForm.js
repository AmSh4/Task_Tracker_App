import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px", marginLeft: "10px" }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
