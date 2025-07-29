import React from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import useTasks from "../hooks/useTasks";

const App = () => {
  const { tasks, addTask, toggleComplete } = useTasks();

  return (
    <div>
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} />
    </div>
  );
};

export default App;
