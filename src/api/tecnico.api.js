import axios from "axios";

export const getTecnicosRequest = async () =>
  await axios.get(`${process.env.BASE_URL}/tecnicos`);

export const getTecnicoRequest = async (id) =>
  await axios.get(`${process.env.BASE_URL}/tecnicos/${id}`);

export const createTecnicoRequest = async (tecnico) =>
  await axios.post(`${process.env.BASE_URL}/tecnicos`, tecnico);

export const updateTecnicoRequest = async (id, tecnico) =>
  await axios.patch(`${process.env.BASE_URL}/tecnicos/${id}`, tecnico);

export const deleteTecnicoRequeste = async (id) =>
  await axios.delete(`${process.env.BASE_URL}/tecnicos/${id}`);
