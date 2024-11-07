import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useApplication =() => { 
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const {isPending,refetch,data:application=[]}=useQuery({
        queryKey:["application",user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/applicants?email=${user?.email}`)
            return res.data
        }
    })
  return [application,refetch,isPending]
}

export default useApplication