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

export const updateBitacoraRequest = async (id, bitacora) => {
  return await axios.patch(
    `${process.env.REACT_APP_API_URL}/bitacoras/${id}`,
    bitacora
  );
};

export const createBitacoraRequest = async (bitacora) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/bitacoras`,
    bitacora
  );
};
