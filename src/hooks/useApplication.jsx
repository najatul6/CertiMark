import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useApplication =() => { 
    const axiosSecure=useAxiosSecure()
    const {data:application=[]}=useQuery({
        queryKey:["application"],
        queryFn:async()=>{
            const res = await axiosSecure.get('/applicants')
            return res.data
        }
    })
  return [application]
}

export default useApplication