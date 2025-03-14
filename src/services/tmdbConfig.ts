import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});
