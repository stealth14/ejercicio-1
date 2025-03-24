import axios from "axios";

const open = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const api = { open };

export default api;
