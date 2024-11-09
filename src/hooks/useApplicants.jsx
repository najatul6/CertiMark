import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"

const useApplicants = () => {
    const axiosSecure=useAxiosSecure()
    const { isPending, data: applicants = [],refetch } = useQuery({
        queryKey: ["applicants"],
        queryFn: async () => {
          const res = await axiosSecure.get("/applications");
          return res.data;
        },
      });
      return [applicants,refetch,isPending]
}

export default useApplicants