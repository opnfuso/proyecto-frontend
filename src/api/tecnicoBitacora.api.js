import axios from "axios";

export const createTecnicoBitacoraRequest = async (tecnicoBitacora) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/tecnicos-bitacorass`,
    tecnicoBitacora
  );
};
