    import React from 'react'
    import { Task } from '../models/task'    

    function TaskComponent({task}) {
      return (
        <div>
        <h2> Titulo: {task.title}  </h2>
        <h3> Descripción: {task.description} </h3>
        <h4> Nivel: {task.level} </h4>
        <h5> Estado: {task.completed ? "Completado" : "Pendiente"} </h5>
          
        </div>
      )
    }
    
    export default TaskComponent
    