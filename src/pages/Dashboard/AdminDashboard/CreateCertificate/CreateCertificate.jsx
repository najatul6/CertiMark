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
      <div>
        <div className="relative">
            {/* Image  */}
          {application?.certificateType === "testimonial" ? (
            <div className="w-[560px] h-[400px]">
              <img
                src={testimonial}
                alt={`${application.name}'s certificate`}
                className="w-[560px] h-[426px]"
              />
            </div>
          ) : (
            <div className="w-[560px] h-[400px]">
              <img
                src={clearnes}
                alt={`${application.name}'s certificate`}
                className="w-[560px] h-[426px]"
              />
            </div>
          )}
          {/* Content  */}
          <div className="absolute top-0 left-0 w-full h-full">
            {application?.certificateType === "testimonial" ? (
              <>helo</>
            ) : (
              <div className="">
                {/* Year  */}
                <h2 className="font-montserrat">2024</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
