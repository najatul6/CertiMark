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
              <div className="relative w-[560px] h-[400px]">
                {/* Serial Number  */}
                <h6 className="absolute top-[108px] left-[85px] tracking-[3px] font-montserrat text-[9px] font-bold text-blackDiamond">26458589</h6>

                {/* Year  */}
                <h2 className="absolute top-[90px] left-[405px] font-tenor text-blackDiamond">2024</h2>

                {/* Registration Number  */}
                <h6 className="absolute top-[125px] right-[57px] font-playwrite text-[7px] font-bold text-blackDiamond">1502041769</h6>

                {/* Session  */}
                <h6 className="absolute top-[145px] right-[80px] font-playwrite text-[7px] font-bold text-blackDiamond">2019-20</h6>

                {/* Student Name  */}
                <h6 className="absolute top-[160px] right-[178px] font-playwrite text-[12px] font-bold text-blackDiamond">Md. Najatul Islam</h6>

                {/* Father Name  */}
                <h6 className="absolute top-[182px] right-[160px] font-playwrite text-[12px] font-bold text-blackDiamond">Md. Mozibur Rahman</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
