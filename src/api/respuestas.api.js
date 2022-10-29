import axios from "axios";

export const getRespuestasByPreguntaIdRequest = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/respuestas/pregunta/${id}`
  );
};

export const getRespuestasRequest = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/respuestas`);
};

export const getRespuestaByIdRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/respuestas/${id}`);
};

export const createRespuestaRequest = async (respuesta) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/respuestas/`,
    respuesta
  );
};
