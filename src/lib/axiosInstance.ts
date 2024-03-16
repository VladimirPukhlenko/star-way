import axios from "axios";

const env = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
