import axios from "axios";

export const getRefaccionesRequest = async (query) => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_RAPIDAPI_URL,
    params: {
      q: query,
      location_name: "Mexico",
      location_parameters_auto: "true",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  return await axios.request(options);
};
