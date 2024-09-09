import { ENV_VARS } from "../config/envVars.js";
import axios from "axios";

const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Falha ao buscar o conteúdo do TMBD" + response.statusText);
  }

  return response.data;
};

export default fetchFromTMDB;
