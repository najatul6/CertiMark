import { useNavigate, useParams } from "react-router";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useCallback, useEffect, useRef, useState } from "react";
import testimonial from "../../../../assets/cartificates/Testimonial.png";
import clearnes from "../../../../assets/cartificates/clearanceCertificate .jpg";
import compared from "../../../../assets/cartificates/compared.png";
import controller from "../../../../assets/cartificates/controller.png";
import { toPng } from "html-to-image";
import { imageUpload } from "../../../../utils/imageUpload";
import useApplicants from "../../../../hooks/useApplicants";
import toast from "react-hot-toast";

const CreateCertificate = () => {
  const { applicationId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);
  const [application, setApplication] = useState({});
  const [serialNumber, setSerialNumber] = useState("");
  const [heldOnMonth, setHeldOnMonth] = useState("");
  const [result, setResult] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const ref = useRef(null);
  const navigate = useNavigate();
  const [, refetch] = useApplicants();
  useEffect(() => {
    axiosSecure.get(`/applicants/${applicationId}`).then((res) => {
      setApplication(res?.data);
      console.log(res.data);
    });
  }, [applicationId, axiosSecure]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    setIsLoading(true);

    // Generate high-quality image
    toPng(ref.current, { cacheBust: true, quality: 1, pixelRatio: 2 })
      .then((dataUrl) => {
        // Convert base64 data URL to a Blob
        const blob = dataUrlToBlob(dataUrl);

        // Upload to ImgBB using the provided imageUpload function
        imageUpload(blob)
          .then((response) => {
            console.log("Uploaded Successfully:", response.data.url);
            if (response?.data?.url) {
              const applicationData = {
                Status: "Approved",
                fee: application?.fee,
                publishDate: new Date().toISOString(),
                paymentId: application?.paymentId,
                paymentDate: application?.paymentDate,
                certificate: response.data.url,
              };

              // Directly update the application data
              axiosSecure
                .patch(`/applications/${applicationId}`, applicationData)
                .then((updateData) => {
                  if (updateData.data?.modifiedCount > 0) {
                    refetch();
                    navigate("/dashboard/pendingApplications");
                   toast.success(
                      "Application Approved and Updated Successfully!"
                    );
                  } else {
                    console.error("Failed to Approve and Update Application!");
                  }
                })
                .catch((err) => {
                  console.error("Error while updating application:", err);
                });
            }
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Upload Failed:", error);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error("Image Generation Failed:", err);
        setIsLoading(false);
      });
  }, [ref, application, applicationId, axiosSecure, navigate, refetch]);

  const dataUrlToBlob = (dataUrl) => {
    const byteString = atob(dataUrl.split(",")[1]);
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };
  return (
    <div>
      <DashboardTitle title={"Create Certificate"} />
      <div className="flex justify-center  gap-2">
        <div className="w-full h-full border rounded-md py-2 px-2">
          {/* Testimonial Form 
          <form></form> */}
          {/* Clearance Form  */}
          <div>
            <h1 className="text-xl font-bold text-lightTeal text-center py-2 underline capitalize font-montserrat">
              Fill Information
            </h1>

            <div className="space-y-[9px]">
              {/* serial Number */}
              <div>
                <label
                  htmlFor="serial Number"
                  className="block text-sm font-medium text-teal"
                >
                  Serial Number:
                </label>
                <input
                  className={`mt-1 block w-full focus:outline-none border bg-transparent text-white placeholder:text-white border-gray-300 rounded-md p-2`}
                  placeholder="Enter Certificate Serial Number"
                  type="text"
                  name="serial Number"
                  onChange={(e) => setSerialNumber(e.target.value)}
                />
              </div>

              {/* Held of Month */}
              <div>
                <label
                  htmlFor="Held of Month"
                  className="block text-sm font-medium text-teal"
                >
                  Held of Month :
                </label>
                <input
                  className={`mt-1 block w-full focus:outline-none border bg-transparent text-white border-gray-300 rounded-md p-2`}
                  placeholder="Enter Held of Month"
                  type="text"
                  defaultValue={"December,2019 - February, 2025"}
                  name="Held of Month"
                  onChange={(e) => setHeldOnMonth(e.target.value)}
                />
              </div>

              {/* Result */}
              <div>
                <label
                  htmlFor="result"
                  className="block text-sm font-medium text-teal"
                >
                  Result (CGPA) :
                </label>
                <input
                  className={`mt-1 block w-full focus:outline-none border bg-transparent text-white border-gray-300 rounded-md p-2`}
                  placeholder={`Enter (${application?.name}'s) Result (CGPA)`}
                  type="text"
                  name="result"
                  onChange={(e) => setResult(e.target.value)}
                />
              </div>

              {/* Publication of Result */}
              <div>
                <label
                  htmlFor="publishDate"
                  className="block text-sm font-medium text-teal"
                >
                  Publication of Result :
                </label>
                <input
                  className={`mt-1 block w-full focus:outline-none border bg-transparent text-white border-gray-300 rounded-md p-2`}
                  placeholder={`Enter Publication of Result`}
                  type="text"
                  name="publishDate"
                  defaultValue={" May 12, 2025"}
                  onChange={(e) => setPublishDate(e.target.value)}
                />
              </div>

              {/* Date of Issue */}
              <div>
                <label
                  htmlFor="dateOfIssue"
                  className="block text-sm font-medium text-teal"
                >
                  Date of Issue :
                </label>
                <input
                  className={`mt-1 block w-full focus:outline-none border bg-transparent text-white border-gray-300 rounded-md p-2`}
                  placeholder={`Enter date of issue`}
                  type="text"
                  name="dateOfIssue"
                  defaultValue={"November 11, 2025"}
                  onChange={(e) => setDateOfIssue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Image  */}
          {application?.certificateType === "testimonial" ? (
            // Testimonial Image
            <div className="w-[560px] h-[400px]">
              <img
                src={testimonial}
                alt={`${application.name}'s certificate`}
                className="w-[560px] h-[426px]"
              />
            </div>
          ) : (
            // Clearance
            <>
              <div ref={ref} className="relative">
                <div className="absolute w-[560px] h-[400px]">
                  {/* Serial Number  */}
                  <h6 className="absolute top-[108px] left-[85px] tracking-[3px] font-montserrat text-[9px] font-bold text-blackDiamond">
                    {serialNumber}
                  </h6>

                  {/* Year  */}
                  <h2 className="absolute top-[90px] left-[405px] font-tenor text-blackDiamond">
                    2024
                  </h2>

                  {/* Registration Number  */}
                  <h6 className="absolute top-[125px] right-[57px] font-playwrite text-[7px] font-bold text-blackDiamond">
                    {application?.registrationNo}
                  </h6>

                  {/* Session  */}
                  <h6 className="absolute top-[145px] right-[80px] font-playwrite text-[7px] font-bold text-blackDiamond">
                    {application?.yearOfCompletion}
                  </h6>

                  {/* Student Name  */}
                  <h6 className="absolute capitalize top-[160px] right-[178px] font-playwrite text-[12px] font-bold text-blackDiamond">
                    {application?.name}
                  </h6>

                  {/* Father Name  */}
                  <h6 className="absolute capitalize top-[182px] right-[165px] font-playwrite text-[12px] font-bold text-blackDiamond">
                    {application?.fatherName}
                  </h6>

                  {/* Mother Name  */}
                  <h6 className="absolute capitalize top-[202px] right-[162px] font-playwrite text-[12px] font-bold text-blackDiamond">
                    {application?.motherName}
                  </h6>

                  {/* College Name  */}
                  <h6 className="absolute capitalize top-[222px] right-[120px] font-playwrite text-[12px] font-bold text-blackDiamond">
                    Rangpur Polytechnic Institute, Rangpur
                  </h6>

                  {/* Student Roll  */}
                  <h6 className="absolute capitalize top-[250px] left-[127px] font-playwrite text-[10px] font-bold text-blackDiamond">
                    {application?.studentId}
                  </h6>

                  {/* Technology  */}
                  <h6 className="absolute capitalize top-[266px] left-[180px] font-playwrite text-[12px] font-bold text-blackDiamond">
                    {application?.technology}
                  </h6>

                  {/* Held of Month  */}
                  <h6 className="absolute capitalize top-[293px] left-[65px] font-playwrite text-[10px] font-bold text-blackDiamond">
                    {heldOnMonth}
                  </h6>

                  {/* Result  */}
                  <h6 className="absolute capitalize top-[294px] right-[157px] font-playwrite text-[10px] font-bold text-blackDiamond">
                    {result}
                  </h6>

                  {/* Publication of Result  */}
                  <h6 className="absolute capitalize top-[345px] left-[175px] font-playwrite text-[8px] font-bold text-blackDiamond">
                    {publishDate}
                  </h6>

                  {/* Date of issue  */}
                  <h6 className="absolute capitalize top-[362px] left-[110px] font-playwrite text-[8px] font-bold text-blackDiamond">
                    {dateOfIssue}
                  </h6>
                  {/* Compared By  */}
                  <img
                    src={compared}
                    alt="Comapred signature"
                    className="absolute bottom-[33px] left-[266px] w-[75px]"
                  />

                  {/* Compared By  */}
                  <img
                    src={controller}
                    alt="Controller Signature"
                    className="absolute bottom-[35px] right-[85px] w-[75px]"
                  />
                </div>
                <div className="w-[560px] h-[426px]">
                  <img
                    src={clearnes}
                    alt={`${application.name}'s certificate`}
                    className="w-[560px] h-[426px]"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={onButtonClick}
                className="w-full mt-10 bg-[#3AAFA9] text-white py-3 rounded-lg font-semibold font-montserrat text-lg"
              >
                {isLoading ? (
                <span className="flex justify-center items-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                <span className="ml-2">Processing...</span>
              </span>
                ) : (
                  "Generate Certificate & Approve"
                )}
              </button>
            </>
          )}
          {/* Content  */}
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
