import axios from "axios";

export const getRespuestasByPreguntaIdRequest = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/respuestas/pregunta/${id}`
  );
};
