import axios, { AxiosInstance } from "axios";

// Generic helper to create Axios instance
const createAxiosInstance = (baseURL: string, token: string = ""): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Request interceptor for token
  instance.interceptors.request.use((config) => {
    if (token) {
      const headers = config.headers as any;
      headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  // Response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
};

// Axios to talk to Strapi from Next.js
export const strapiCall = createAxiosInstance(
  process.env.NEXT_PUBLIC_API_URL || "",
  process.env.STRAPI_TOKEN || ""
);

// Axios for frontend → Next.js API
export const internalCall = createAxiosInstance(
  process.env.NEXT_PUBLIC_FRONTEND_URL || ""
);
