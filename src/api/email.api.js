import axios from "axios";

export const sendEmailRequest = async (msg, dispositivo, pregunta) => {
  const options = {
    method: "POST",
    url: process.env.REACT_APP_RAPIDAPI_EMAIL_URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_EMAIL_HOST,
    },
    data: `{"personalizations":[{"to":[{"email":"opnfuso@gmail.com"}],"subject":"Nueva pregunta para el arbol!"}],"from":{"email":"mobile_helper@example.com"},"content":[{"type":"text/plain","value":${dispositivo}\nPregunta: ${pregunta}\n${msg}}]}`,
  };

  return await axios.request(options);
};
