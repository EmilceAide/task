import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "./context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas
      </h1>
    );
  }
  return (
    <div
    className="bg-[url('./assets/img-fondo.png')]  p-8 pb-20"
    >
      <h1 className="text-white text-4xl font-bold text-center">
        {" "}
        Tus Tareas:{" "}
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
