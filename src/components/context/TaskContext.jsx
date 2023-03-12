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
  const editTask = (taskId, updatedFields) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedFields };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => {
      if (task.id === updatedTask.id) {
        return {
          ...task,
          ...updatedTask
        };
      }
      return task;
    }));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        editTask,
        updateTask
      }}
    >
      <div className="bg-[url('./assets/img-fondo.png')]">
      {props.children}
      </div>
    </TaskContext.Provider>
  );
}
