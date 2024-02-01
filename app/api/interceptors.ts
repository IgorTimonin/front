import { API_URL } from "@/config/api.config";
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})