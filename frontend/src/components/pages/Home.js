import React, { useEffect, useState } from 'react';
import { obtenerDatos, enviarDatos } from '../api/api';

function Home() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerDatos();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleEnviarDatos = async () => {
    const datosParaEnviar = {
      "title": "Create Task",
      "description": "Esta es una tarea de ejemplo para probar el endpoint de creación de tareas.",
      "complete": true
    };

    try {
      const response = await enviarDatos(datosParaEnviar);
      console.log("Datos enviados con éxito:", response);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div>
      <h1>Conexión React - Django con Axios</h1>

      <button onClick={handleEnviarDatos}>Enviar Datos</button>

      {datos && (
        <div>
          <h2>Datos obtenidos:</h2>
          <pre>{JSON.stringify(datos, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;
