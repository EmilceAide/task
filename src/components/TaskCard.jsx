import { useContext } from "react";
import { LEVELS } from "../models/levels";
import Button from "../pure/Button";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, editTask, updateTask } = useContext(TaskContext);

  const handleEdit = () => {
    editTask(task.id, { completed: true });
  };

  const handleLevelChange = (newLevel) => {
    updateTask({
      ...task,
      level: newLevel,
    });
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <p className="font-bold  text-sm capitalize">Prioridad: {task.level} </p>
      <p className="text-sm font-bold capitalize">
        Estado: {task.completed ? "Completado" : "Pendiente"}{" "}
      </p>
      <div>
        <Button
          styleBtn={`p-2 py-1 rounded-md mt-4 mr-2  ${
            task.level === LEVELS.NORMAL
              ? "bg-green-500"
              : "bg-gray-400 hover:bg-green-400"
          }`}
          clickBtn={() => handleLevelChange(LEVELS.NORMAL)}
        >
          Normal
        </Button>

        <Button
          styleBtn={`p-2 py-1 rounded-md mt-4 mr-2  ${
            task.level === LEVELS.URGENT
              ? "bg-yellow-500"
              : "bg-gray-400 hover:bg-yellow-400"
          }`}
          clickBtn={() => handleLevelChange(LEVELS.URGENT)}
        >
          Urgente
        </Button>
        <Button
          styleBtn={`p-2 py-1 rounded-md mt-4  ${
            task.level === LEVELS.BLOCKING
              ? "bg-red-500"
              : "bg-gray-400 hover:bg-red-400"
          }`}
          clickBtn={() => handleLevelChange(LEVELS.BLOCKING)}
        >
          Bloqueado
        </Button>
      </div>
      <Button
        styleBtn={"bg-yellow-500 p-2 py-1 rounded-md mt-4 hover:bg-yellow-600"}
        clickBtn={() => deleteTask(task.id)}
      >
        Eliminar
      </Button>
      <Button
        styleBtn={
          "bg-green-500 p-2 py-1 rounded-md mt-4 hover:bg-green-600 mr-2"
        }
        clickBtn={handleEdit}
      >
        Marcar como completado
      </Button>
    </div>
  );
}

export default TaskCard;
