const DEFAULT_API_BASE_URL = "https://api.hcmatrix.com/v1/admin";

export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL,
  APP_NAME: "Hcmatrix v3 Admin Portal",
};
