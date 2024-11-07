import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const useAxiosSecure = () => {
  const navigate=useNavigate()
  const {logOut}=useAuth()
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
    async(error) => {
      const status = error.response?.status;
      // If session expired, log out and redirect to login page
      if(status === 401 || status ===403){
        await logOut();
        toast.error('Session expired, please log in again');
        navigate("/login");
      }
      console.log(status);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
