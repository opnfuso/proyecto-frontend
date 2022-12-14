import axios from "axios";

export const getSolucionesByPreguntaIdRequest = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/soluciones/respuesta/${id}`
  );
};

export const getSolucionRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/soluciones/${id}`);
};

export const createSolucionRequest = async (solucion) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/soluciones/`,
    solucion
  );
};
