import axios from "axios";

export const checkRole = async (userId, role) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-role`, {
    params: { userId: userId, role: role },
  });
};
