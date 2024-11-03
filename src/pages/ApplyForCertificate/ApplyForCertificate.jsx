import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";

const Apply = () => {
  const {loading,user}=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const applicantData={
      data,
      userEmail:user.email,
      ApplyDate: new Date().toISOString(),
    }
    
    console.log(applicantData,user.email);
    reset();
    alert("Your application has been submitted!");
  };

  return (
    <div className="bg-[#FEFFFF] min-h-screen flex items-center justify-center px-6 py-12 !font-roboto">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 border border-[#2B7A78]">
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
              className={`mt-1 block w-full border ${
                errors.certificateType ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            >
              <option value="">Select Certificate Type</option>
              <option value="completion">Completion Certificate</option>
              <option value="transcript">Transcript</option>
              <option value="diploma">Diploma</option>
            </select>
            {errors.certificateType && (
              <p className="text-[#E76F51] text-sm">
                {errors.certificateType.message}
              </p>
            )}
          </div>

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
              className={`mt-1 block w-full border ${
                errors.name ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            />
            {errors.name && (
              <p className="text-[#E76F51] text-sm">{errors.name.message}</p>
            )}
          </div>

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
              className={`mt-1 block w-full border ${
                errors.registrationNo ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            />
            {errors.registrationNo && (
              <p className="text-[#E76F51] text-sm">{errors.registrationNo.message}</p>
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
              className={`mt-1 block w-full border ${
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
              className={`mt-1 block w-full border ${
                errors.technology ? "border-[#E76F51]" : "border-gray-300"
              } rounded-md p-2`}
            />
            {errors.technology && (
              <p className="text-[#E76F51] text-sm">
                {errors.technology.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="yearOfCompletion"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Completion
            </label>
            <input
              type="text"
              id="yearOfCompletion"
              {...register("yearOfCompletion", {
                required: "Year of Completion is required",
              })}
              className={`mt-1 block w-full border ${
                errors.yearOfCompletion
                  ? "border-[#E76F51]"
                  : "border-gray-300"
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
            {loading ? (
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
