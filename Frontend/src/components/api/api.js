import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const obtenerDatos = async () => {
  try {
    const response = await axios.get(`${API_URL}/hello-world/`); // URL corregida
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

export const enviarDatos = async (datos) => {
  try {
    const response = await axios.post(`${API_URL}/create-task/`, datos); // URL corregida
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};