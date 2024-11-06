import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const useAxiosSecure = () => {
  // Add request interceptor to attach token to each request
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    function (err) {
      return Promise.reject(err);
    };
    // Add response interceptor to handle session expiration
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      const status=error.response?.status
      console.log(status);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
