import axios from "axios";

export const getManualReparacionesReparacionesRequest = async () =>
  await axios.get(`${process.env.REACT_APP_API_URL}/manual-reparaciones`);

export const getManualReparacionesReparacionesByTitleRequest = async (titulo) =>
  await axios.get(`${process.env.REACT_APP_API_URL}/manual-reparaciones`, {
    params: { titulo: titulo },
  });

export const getManualReparacionRequest = async (id) =>
  await axios.get(`${process.env.REACT_APP_API_URL}/manual-reparaciones/${id}`);

export const createManualReparacionRequest = async (manualReparacion) =>
  await axios.post(
    `${process.env.REACT_APP_API_URL}/manual-reparaciones`,
    manualReparacion
  );

export const updateManualReparacionRequest = async (id, manualReparacion) =>
  await axios.patch(
    `${process.env.REACT_APP_API_URL}/manual-reparaciones/${id}`,
    manualReparacion
  );

export const deleteManualReparacionRequeste = async (id) =>
  await axios.delete(
    `${process.env.REACT_APP_API_URL}/manual-reparaciones/${id}`
  );
