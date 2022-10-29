import axios from "axios";

export const getBitacorasRequest = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/bitacoras`);
};

export const getBitacorasByDispositivoId = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/bitacoras/dispositivo/${id}`
  );
};

export const getBitacoraRequest = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/bitacoras/${id}`);
};
