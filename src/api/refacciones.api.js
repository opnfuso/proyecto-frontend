import axios from "axios";

export const getRefaccionesRequest = async (query) => {
  const options = {
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  const data = {
    query: query,
    gl: "MX",
    hl: "es_MX",
    device: "desktop",
    duration: "",
    autocorrect: 0,
    page: 1,
    uule: "w+CAIQICIGTWV4aWNv",
    pages: 1,
  };

  return await axios.post(process.env.REACT_APP_RAPIDAPI_URL, data, options);
};
