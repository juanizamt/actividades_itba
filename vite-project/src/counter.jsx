import React, { useState } from 'react';
import "./ComponentesHook.css"; // Asegúrate de que esta ruta sea correcta


function CharacterPoints() {
  const [puntos, setPuntos] = useState(0);

  
  const aumentarPuntos = () => {
    if (puntos < 10) {
      setPuntos(puntos + 1);
    } else {
     
      console.log("¡Límite máximo de 10 puntos alcanzado!");

    }
  };

  // Lógica para BAJAR: Chequea el límite mínimo *antes* de actualizar
  const bajarPuntos = () => {
    if (puntos > 0) {
      setPuntos(puntos - 1);
    } else {
      console.log("No puedes tener puntos negativos (límite de 0 alcanzado).");

    }
  };

  const resetearPuntos = () => {
    setPuntos(0);
  }
  
  // Estas funciones de chequeo ya no son necesarias aquí porque la lógica
  // se movió dentro de aumentarPuntos y bajarPuntos.

  return (
    <div className="counter">
      <h1>Contador de Puntos</h1>
      

      <h1 className="puntos-display">{puntos}</h1>
      

      <div className="counter-controls">
        <button onClick={aumentarPuntos} disabled={puntos === 10}>
          +1 Punto
        </button>

        <button onClick={bajarPuntos} disabled={puntos === 0}>
          -1 Punto
        </button>

        <button onClick={resetearPuntos}>
          Resetear Puntos
        </button>
      </div>
      
    </div>
  );
}

export default CharacterPoints;
