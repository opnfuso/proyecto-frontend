import axios from "axios";

export const getAdministradoresRequest = async () =>
  await axios.get(`${process.env.BASE_URL}/administradores`);

export const getAdministradorRequest = async (id) =>
  await axios.get(`${process.env.BASE_URL}/administradores/${id}`);

export const createAdministradorRequest = async (administrador) =>
  await axios.post(`${process.env.BASE_URL}/administradores`, administrador);

export const updateAdministradorRequest = async (id, administrador) =>
  await axios.patch(
    `${process.env.BASE_URL}/administradores/${id}`,
    administrador
  );

export const deleteAdministradorRequeste = async (id) =>
  await axios.delete(`${process.env.BASE_URL}/administradores/${id}`);
