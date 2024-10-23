import axios from "axios";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// Intercept response and check for unauthorized response
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
        toast.error('Session expired, please log in again');
        window.location.replace('/login')
    }
    return Promise.reject(error)
  }
);

export default axiosSecure;