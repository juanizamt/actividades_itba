import React, { useState } from 'react';
import "./ComponentesHook.css"; // Asegúrate de que esta ruta sea correcta

//Crea un componente TodoList que permita agregar nuevas tareas, marcarlas como
//completadas y eliminarlas. Incluye un input para agregar tareas y muestra el total de tareas
//pendientes.

function ListaTareas() {

const tareasIniciales = [
 { id: 1, descripcion: 'Aprender React', estado: 'completada' },
 { id: 2, descripcion: 'Practicar hooks', estado: 'pendiente' },
 { id: 3, descripcion: 'Crear proyecto final', estado: 'pendiente' }
];

const agregarTarea = (id, descripcion, estado) => {
const nuevaTarea = { id, descripcion, estado };
tareasIniciales.push(nuevaTarea);
console.log("Tarea agregada:", nuevaTarea);

};


const eliminarTarea = (id) => {
const indice = tareasIniciales.findIndex(tarea => tarea.id === id);
if (indice !== -1) {
  const tareaEliminada = tareasIniciales.splice(indice, 1);
  console.log("Tarea eliminada:", tareaEliminada[0]);
}
}

const tareaCompletada = (id) => {
const tarea = tareasIniciales.find(tarea => tarea.id === id);
if (tarea) {
  tarea.estado = 'completada';
  console.log("Tarea marcada como completada:", tarea);
}

const mostrarTareasPendientes = () => {
    const tarea = tareasIniciales.filter(tarea => tarea.estado !== 'completada');
    console.log("Tareas pendientes:", tarea);
}

return (

    <div>
    <h1>Contador de Puntos</h1>

        <div className="todo-list">
            <button onClick={agregarTarea}>
            <input type="ingrese texto:" />
            
            </button>
        </div>

    </div>

    )
}



}

export default ListaTareas;