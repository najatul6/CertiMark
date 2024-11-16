import { useParams } from "react-router";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import testimonial from "../../../../assets/cartificates/Testimonial.png";
import clearnes from "../../../../assets/cartificates/clearanceCertificate .jpg";

const CreateCertificate = () => {
  const { applicationId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [application, setApplication] = useState({});
  useEffect(() => {
    axiosSecure.get(`/applicants/${applicationId}`).then((res) => {
      setApplication(res?.data);
      console.log(res.data);
    });
  }, [applicationId, axiosSecure]);

  return (
    <div>
      <DashboardTitle title={"Create Certificate"} />
      <div></div>
      {application?.certificateType === "testimonial" ? (
        <div>
          <img src={testimonial} alt={`${application.name}'s certificate`} />
        </div>
      ) : (
        <div>
            <img src={clearnes} alt={`${application.name}'s certificate`} />
        </div>
      )}
    </div>
  );
};

export default CreateCertificate;
