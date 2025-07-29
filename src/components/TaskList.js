import React from "react";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => onToggle(index)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            margin: "10px 20px",
            cursor: "pointer"
          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
