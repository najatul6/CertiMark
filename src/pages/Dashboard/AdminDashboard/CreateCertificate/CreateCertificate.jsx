import { useParams } from "react-router"
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"

const CreateCertificate = () => {
    const {applicationId}=useParams()
    const axiosSecure=useAxiosSecure()
    
    console.log(applicationId);

  return (
    <div>
        <DashboardTitle title={"Create Certificate"} />

    </div>
  )
}

export default CreateCertificate