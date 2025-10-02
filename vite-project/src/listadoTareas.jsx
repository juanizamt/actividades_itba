import React, { useState } from 'react';
import "./ComponentesHook.css"; // Asegúrate de que esta ruta sea correcta

/*

Ejercicio 1: Lista de Tareas con Gestión de Estados
Objetivo
Desarrollar un componente de lista de tareas que maneje diferentes estados y
muestre información condicional.
Requisitos Técnicos
1. Operador ternario para mostrar mensaje cuando no hay tareas
2. Keys únicas para cada elemento de la lista
3. Operadores lógicos para mostrar estadísticas solo cuando hay tareas
4. Funciones con ternarios para determinar colores e iconos según estado
Funcionalidades Esperadas
● ✅ Lista de tareas con estados: "pendiente", "en progreso", "completada"
● ✅ Mensaje "No hay tareas pendientes" cuando el array está vacío
● ✅ Cada tarea debe mostrar icono y color según su estado
● ✅ Estadísticas de tareas (completadas/en progreso) solo cuando hay tareas
● ✅ Estados visuales:
○ Completada: verde (✓)
○ En progreso: naranja (⏳)
○ Pendiente: gris (⏱️)
Datos Iniciales
const tareasIniciales = [
 { id: 1, texto: 'Aprender React', estado: 'completada' },
 { id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
 { id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
];

*/

function ListaTareas() {

const tareasIniciales = [
 { id: 1, texto: 'Aprender React', estado: 'completada' },
 { id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
 { id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
];

const agregarTarea = (id, texto, estado) => {
const nuevaTarea = { id, texto, estado };
tareasIniciales.push(nuevaTarea);
console.log("Tarea agregada:", nuevaTarea);

};


const eliminarTarea = (id) => {
const indice = tareasIniciales.findIndex(tarea => tarea.id === id);
if (indice !== -1) {
  const tareaEliminada = tareasIniciales.splice(indice, 1);
  console.log("Tarea eliminada:", tareaEliminada[0]);
}









return (


        null

    )
}



}