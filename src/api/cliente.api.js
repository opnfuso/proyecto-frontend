import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getClientesRequest = async () =>
  await axios.get(`${BASE_URL}/clientes`);
