import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import Modal from "./Modal";

function TaskForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setIsOpen(!isOpen);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-yellow-500 p-2 py-1 rounded-md mt-4 hover:bg-yellow-600"
      >
        Agregar Tarea
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h2 className="text-lg font-medium mb-2"> Crea tu tarea</h2>
        <div className="max-w-md mx-auto">
          <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
            <input
              className="bg-slate-300 p-3 w-full mb-2"
              placeholder="Escribe tu tarea"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            />
            <textarea
              className="bg-slate-300 p-3 w-full mb-2"
              placeholder="Escribe la descripción de la tarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white">
              Guardar
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default TaskForm;
