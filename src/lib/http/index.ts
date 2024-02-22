import axios from "axios";
import { ENV } from "constants";

// Note: It should be noted that react auth kit inserts the authorization header automatically. That is the token, hence why no bearer token i set here
const httpClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default httpClient;
