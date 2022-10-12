import axios from "axios";

export const getClientesRequest = async () =>
  await axios.get(`${process.env.BASE_URL}/clientes`);

export const getClienteRequest = async (id) =>
  await axios.get(`${process.env.BASE_URL}/clientes/${id}`);

export const createClienteRequest = async (id, cliente) =>
  await axios.post(`${process.env.BASE_URL}/clientes`, cliente);

export const updateClienteRequest = async (id, cliente) =>
  await axios.patch(`${process.env.BASE_URL}/clientes/${id}`, cliente);

export const deleteClienteRequeste = async (id) =>
  await axios.delete(`${process.env.BASE_URL}/clientes/${id}`);
