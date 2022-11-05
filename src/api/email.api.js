import axios from "axios";

export const sendEmailRequest = async (msg, dispositivo, pregunta) => {
  const data = {
    mensaje: msg,
    dispositivo: dispositivo,
    pregunta: pregunta,
  };

  return await axios.post(
    `${process.env.REACT_APP_API_URL}/preguntas/email`,
    data
  );
};
