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

const Apply = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState();
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
      feeAmount: "300",
    };
    try {
      setIsLoading(true);
      await axiosSecure.post("/applicants", applicantData);
      reset();
      toast.success("Application submitted successfully");
      refetch();
      navigate("/dashboard/applications");
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="bg-[#FEFFFF] min-h-screen flex flex-col items-center justify-center px-6 pb-10 !font-roboto">
      <div className="border border-red-500 rounded-lg shadow-lg w-1/2 flex items-center font-siligri bg-gradient-to-r from-red-500 to-orange-500 p-4 mt-2">
        <p className="text-xl bg-lightTeal text-white font-bold leading-tight py-3 px-5 rounded-md mr-2 whitespace-nowrap">
          বিঃ দ্রঃ
        </p>
        <Marquee className="text-white text-xl font-semibold">
          সঠিক ভাবে Apply করুন, তারপর Application Status Check করুন এবং
          নির্ধারিত পেমেন্ট পরিশোধ করুন !!
        </Marquee>
      </div>
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 mt-12 border border-[#2B7A78]">
        <h2 className="text-2xl font-bold text-darkGreen mb-6 text-center">
          Certificate Application
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              className={`mt-1 block w-full focus:outline-none border bg-transparent text-darkGreen ${
                errors.certificateType ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            >
              <option selected disabled>
                Select Certificate Type
              </option>
              <option value="completion">Completion Certificate</option>
              {/* <option value="transcript">Transcript</option>
              <option value="diploma">Diploma</option> */}
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

          <div>
            <label
              htmlFor="technology"
              className="block text-sm font-medium text-gray-700"
            >
              Technology
            </label>
            <input
              type="text"
              id="technology"
              {...register("technology", {
                required: "Technology is required",
              })}
              className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                errors.technology ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            />
            {errors.technology && (
              <p className="text-[#E76F51] text-sm">
                {errors.technology.message}
              </p>
            )}
          </div>

          {/* Year of Completion Input Section  */}
          <div>
            <label
              htmlFor="yearOfCompletion"
              className="block text-sm font-medium text-gray-700"
            >
              Session
            </label>
            <input
              type="text"
              id="yearOfCompletion"
              {...register("yearOfCompletion", {
                required: "Year of Completion is required",
              })}
              className={`mt-1 block w-full border bg-transparent text-darkGreen ${
                errors.yearOfCompletion ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            />
            {errors.yearOfCompletion && (
              <p className="text-[#E76F51] text-sm">
                {errors.yearOfCompletion.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3AAFA9] text-white py-3 rounded-lg font-semibold"
            style={{ fontFamily: "Montserrat", fontSize: "18px" }}
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
