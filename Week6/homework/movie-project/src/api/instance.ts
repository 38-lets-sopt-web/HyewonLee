import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "ko-KR",
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
});

export default api;
