import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <main 
    // className="bg-zinc-900 h-screen"
    // className="bg-[url('./assets/img-fondo.png')]"
    >
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
