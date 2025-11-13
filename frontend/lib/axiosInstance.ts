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
      console.group("=== AXIOS RESPONSE ERROR ===");

if (error.response) {
  // The request was made and the server responded with a status code outside 2xx
  console.error("Status:", error.response.status);
  console.error("URL:", error.config?.url);
  console.error("Headers:", error.response.headers);
  console.error("Data:", error.response.data);
} else if (error.request) {
  // The request was made but no response was received
  console.error("No response received");
  console.error("Request:", error.request);
} else {
  // Something happened in setting up the request
  console.error("Error", error.message);
}

console.groupEnd();
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
