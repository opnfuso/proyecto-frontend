import axios from "axios";

export const createReparacionBitacoraRequest = async (reparacionBitacora) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/reparaciones-bitacoras`,
    reparacionBitacora
  );
};
