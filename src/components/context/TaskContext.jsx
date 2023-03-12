import { createContext, useState, useEffect } from "react";
import { task as data } from "../../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        desription: task.desription,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
