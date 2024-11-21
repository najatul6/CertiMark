import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSupport = () => {
    const axiosSecure=useAxiosSecure()
    const { isPending, data: support = [],refetch } = useQuery({
        queryKey: ["support"],
        queryFn: async () => {
          const res = await axiosSecure.get("/support");
          return res.data;
        },
      });
      return [support,refetch,isPending]
}

export default useSupport