import axios from "axios";

export const getDispositivosRequest = async () =>
  await axios.get(`${process.env.REACT_APP_API_URL}/dispositivos`);

export const getDispositivoRequest = async (id) =>
  await axios.get(`${process.env.REACT_APP_API_URL}/dispositivos/${id}`);

export const getDispositivoByClienteIdRequest = async (id) =>
  await axios.get(
    `${process.env.REACT_APP_API_URL}/dispositivos/cliente/${id}`
  );

export const createDispositivoRequest = async (dispositivo) =>
  await axios.post(
    `${process.env.REACT_APP_API_URL}/dispositivos`,
    dispositivo
  );

export const updateDispositivoRequest = async (id, dispositivo) =>
  await axios.patch(
    `${process.env.REACT_APP_API_URL}/dispositivos/${id}`,
    dispositivo
  );

export const deleteDispositivoRequeste = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API_URL}/dispositivos/${id}`);
