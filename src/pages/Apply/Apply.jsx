import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
import useApplication from "../../hooks/useApplication";
import Loading from "../../Components/Shared/Loading/Loading";
import Marquee from "react-fast-marquee";
import "../LogIn/loginStyle.css";
const Apply = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState();
  const [feeAmount, setFeeAmount] = useState("300");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, refetch, isPending] = useApplication();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const applicantData = {
      ...data,
      userEmail: user?.email,
      ApplyDate: new Date().toISOString(),
      Status: "Pending",
      fee: "unPaid",
      feeAmount,
    };
    try {
      setIsLoading(true);
      await axiosSecure.post("/applicants", applicantData);
      reset();
      toast.success("Application submitted successfully");
      refetch();
      navigate("/dashboard/applications");
    } catch (err) {
      toast.error(err?.code);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCertificateTypeChange = (e) => {
    const selectedType = e.target.value;
    let amount = "300"; 
    if (selectedType === "testimonial") amount = "400";
    else if (selectedType === "diploma") amount = "500";
    setFeeAmount(amount);
  };
  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="myStyle min-h-screen flex flex-col items-center justify-center px-6 pb-10 !font-roboto">
      <div className="flex justify-center items-center bg-gradient-to-r from-red-500 mt-20 to-orange-500 font-siligri pr-4">
        <p className="md:text-xl  bg-lightTeal text-white font-bold py-4 px-5 whitespace-nowrap">
          বিঃ দ্রঃ
        </p>
        <div>
          <Marquee>
            <p className="text-white md:text-xl font-semibold">
              সঠিক ভাবে Apply করুন, তারপর Application Status Check করুন এবং
              নির্ধারিত ফি পরিশোধ করুন !!
            </p>
          </Marquee>
        </div>
      </div>
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 mt-5 border border-[#2B7A78]">
        <h2 className="text-2xl font-bold text-darkGreen mb-6 text-center">
          Certificate Application
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Certificate Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="certificateType"
                className="block text-sm font-medium text-gray-700"
              >
                Certificate Type
              </label>
              <select
                id="certificateType"
                {...register("certificateType", {
                  required: "Certificate type is required",
                })}
                onChange={(e) => {
                  handleCertificateTypeChange(e);
                  register("certificateType").onChange(e);
                }}
                className={`mt-1 block w-full focus:outline-none border bg-transparent text-darkGreen ${
                  errors.certificateType
                    ? "border-[#E76F51]"
                    : "border-gray-300"
                } rounded-md p-2`}
              >
                <option value="clearance">Clearance Certificate</option>
                {/* <option value="testimonial">Testimonial</option> */}
                {/* <option value="diploma">Diploma</option> */}
              </select>
              {errors.certificateType && (
                <p className="text-[#E76F51] text-sm">
                  {errors.certificateType.message}
                </p>
              )}
            </div>
            {/* Full Name Input Section */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                  errors.name ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.name && (
                <p className="text-[#E76F51] text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* Father Name Input Section */}
            <div>
              <label
                htmlFor="fatherName"
                className="block text-sm font-medium text-gray-700"
              >
                Father Name
              </label>
              <input
                type="text"
                id="name"
                {...register("fatherName", {
                  required: "Father Name is required",
                })}
                className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                  errors.fatherName ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.fatherName && (
                <p className="text-[#E76F51] text-sm">
                  {errors.fatherName.message}
                </p>
              )}
            </div>

            {/* Mother Name Input Section */}
            <div>
              <label
                htmlFor="motherName"
                className="block text-sm font-medium text-gray-700"
              >
                Mother Name
              </label>
              <input
                type="text"
                id="motherName"
                {...register("motherName", {
                  required: "Mother Name is required",
                })}
                className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                  errors.motherName ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.motherName && (
                <p className="text-[#E76F51] text-sm">
                  {errors.motherName.message}
                </p>
              )}
            </div>

            {/* Registration Number Input Section */}
            <div>
              <label
                htmlFor="registrationNo"
                className="block text-sm font-medium text-gray-700"
              >
                Registration Number
              </label>
              <input
                type="text"
                id="registrationNo"
                {...register("registrationNo", {
                  required: "registration Number is required",
                })}
                className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                  errors.registrationNo ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.registrationNo && (
                <p className="text-[#E76F51] text-sm">
                  {errors.registrationNo.message}
                </p>
              )}
            </div>
            {/* Student ID */}
            <div>
              <label
                htmlFor="studentId"
                className="block text-sm font-medium text-gray-700"
              >
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                {...register("studentId", {
                  required: "Student ID is required",
                })}
                className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                  errors.studentId ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.studentId && (
                <p className="text-[#E76F51] text-sm">
                  {errors.studentId.message}
                </p>
              )}
            </div>
            {/* Technology */}
            <div>
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-700"
              >
                Select Technology
              </label>
              <select
                id="technology"
                {...register("technology", {
                  required: "Technology is required",
                })}
                className={`mt-1 block w-full focus:outline-none border bg-transparent text-darkGreen ${
                  errors.technology ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
              >
                <option disabled>Select Your Technology</option>
                <option value="computer">Computer</option>
                <option value="power">Power</option>
                <option value="electrical">Electrical</option>
                <option value="textile">Textile</option>
                <option value="mechanical">Mechanical</option>
              </select>
              {errors.technology && (
                <p className="text-[#E76F51] text-sm">
                  {errors?.technology?.message}
                </p>
              )}
            </div>

            {/* Year of Completion Input Section  */}
            <div>
              <label
                htmlFor="yearOfCompletion"
                className="block text-sm font-medium text-gray-700"
              >
                Select Your Session
              </label>
              <select
                id="yearOfCompletion"
                {...register("yearOfCompletion", {
                  required: "Year of Completion is required",
                })}
                className={`mt-1 block w-full focus:outline-none border bg-transparent text-darkGreen ${
                  errors.yearOfCompletion
                    ? "border-[#E76F51]"
                    : "border-gray-300"
                } rounded-md p-2`}
              >
                <option disabled>Select Your Session</option>
                <option value="2018-19">2018-19</option>
                <option value="2019-20">2019-20</option>
                <option value="2020-21">2020-21</option>
              </select>
              {errors.yearOfCompletion && (
                <p className="text-[#E76F51] text-sm">
                  {errors?.yearOfCompletion?.message}
                </p>
              )}
            </div>
          </div>

          {/* Fee Amount */}
          <div>
            <label
              htmlFor="feeAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Fees
            </label>
            <input
              type="text"
              id="feeAmount"
              value={feeAmount}
              readOnly
              className="mt-1 block w-full focus:outline-none border bg-transparent text-darkGreen border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3AAFA9] text-white py-3 rounded-lg font-semibold font-montserrat text-lg"
          >
            {isLoading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Apply Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
