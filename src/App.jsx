import { task as data } from "./task.js";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        desription: "Nueva Tarea",
      },
    ]);
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
