import axios from "axios";

export const getSolucionesByPreguntaIdRequest = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/soluciones/respuesta/${id}`
  );
};

export const getSolucionRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/soluciones/${id}`);
};
