import axios from "axios";

export const getClientesRequest = async () =>
  await axios.get(`${process.env.REACT_APP_API_URL}/clientes`);

export const getClienteRequest = async (id) =>
  await axios.get(`${process.env.REACT_APP_API_URL}/clientes/${id}`);

export const createClienteRequest = async (cliente) =>
  await axios.post(`${process.env.REACT_APP_API_URL}/clientes`, cliente);

export const updateClienteRequest = async (id, cliente) =>
  await axios.patch(`${process.env.REACT_APP_API_URL}/clientes/${id}`, cliente);

export const deleteClienteRequeste = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API_URL}/clientes/${id}`);
