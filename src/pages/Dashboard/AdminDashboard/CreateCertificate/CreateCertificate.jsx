import { useParams } from "react-router"
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import { useEffect } from "react"
import testimonial from '../../../../assets/cartificates/Testimonial.png'
import clearnes from '../../../../assets/cartificates/clearanceCertificate .jpg'

const CreateCertificate = () => {
    const {applicationId}=useParams()
    const axiosSecure=useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get(`/applicants/${applicationId}`)
        .then(res=>{
            console.log(res.data);
        })
    },[applicationId,axiosSecure])

  return (
    <div>
        <DashboardTitle title={"Create Certificate"} />
    <div>

    </div>
    </div>
  )
}

export default CreateCertificate