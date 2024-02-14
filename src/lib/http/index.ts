import axios from "axios";
import { ENV, LOCAL_STORAGE_AUTH_TOKEN_KEY } from "constants";

const AUTH_TOKEN = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) ?? "";

const httpClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});
export default httpClient;
