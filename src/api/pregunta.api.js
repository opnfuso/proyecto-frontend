import axios from "axios";

export const getPreguntaByIdRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/preguntas/${id}`);
};
