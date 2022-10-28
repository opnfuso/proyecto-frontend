import axios from "axios";

export const getPreguntaByIdRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/preguntas/${id}`);
};

export const getPreguntasRequest = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/preguntas/`);
};

export const createPreguntaRequest = async (pregunta) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/preguntas/`,
    pregunta
  );
};
