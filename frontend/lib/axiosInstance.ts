import axios from "axios";

// Helper function to create an Axios instance
const createAxiosInstance = (baseURL: string, token: string = "") => {
  const instance = axios.create({ baseURL, token });

  instance.interceptors.request.use(
    (config) => {
      // Log request details
      console.log("Request:");
      console.log("URL:", config.url);
      console.log("Method:", config.method);
      console.log("Headers:", config.headers);
      console.log("Params:", config.params);
      console.log("Body:", config.data);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Log response details
      console.log("Response:");
      console.log("Status:", response.status);
      console.log("Headers:", response.headers);
      console.log("Data:", response.data);

      return response;
    },
    (error) => {
      // Server responded with a status other than 2xx
      console.error("Response Error:");
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
      console.error("Data:", error.response.data);
      return Promise.reject(error);
    }
  );

  return instance;
};

// Creating Axios Instances
export const strapiCall = createAxiosInstance(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.STRAPI_TOKEN
);
// Creating Axios Instances
export const strapiUserCall = createAxiosInstance(
  process.env.NEXT_PUBLIC_API_URL,
  null
);
export const internalCall = createAxiosInstance("", "");
