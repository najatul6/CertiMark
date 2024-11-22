import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMessages = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const { isPending, data: message = [],refetch } = useQuery({
        queryKey: ["message",user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get("/supports?email=${user?.email}");
          return res.data;
        },
      });
      return [message,refetch,isPending]
}

export default useMessages