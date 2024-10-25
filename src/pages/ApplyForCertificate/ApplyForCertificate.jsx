import { useForm } from "react-hook-form";

const ApplyForCertificate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Your application has been submitted!");
  };

  return (
    <div className="bg-[#FEFFFF] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 border border-[#2B7A78]">
        <h2 className="text-2xl font-bold text-darkGreen mb-6 text-center">
          Certificate Application
        </h2>

        {isSubmitted ? (
          <p className="text-center text-[#3AAFA9] font-semibold">
            Your application has been submitted!
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full border ${
                  errors.name ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
              />
              {errors.name && (
                <p className="text-[#E76F51] text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 block w-full border ${
                  errors.email ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
              />
              {errors.email && (
                <p className="text-[#E76F51] text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="studentId"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                {...register("studentId", { required: "Student ID is required" })}
                className={`mt-1 block w-full border ${
                  errors.studentId ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
              />
              {errors.studentId && (
                <p className="text-[#E76F51] text-sm">
                  {errors.studentId.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Course/Program
              </label>
              <input
                type="text"
                id="course"
                {...register("course", { required: "Course/Program is required" })}
                className={`mt-1 block w-full border ${
                  errors.course ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
              />
              {errors.course && (
                <p className="text-[#E76F51] text-sm">
                  {errors.course.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="yearOfCompletion"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Year of Completion
              </label>
              <input
                type="text"
                id="yearOfCompletion"
                {...register("yearOfCompletion", { required: "Year of Completion is required" })}
                className={`mt-1 block w-full border ${
                  errors.yearOfCompletion ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
              />
              {errors.yearOfCompletion && (
                <p className="text-[#E76F51] text-sm">
                  {errors.yearOfCompletion.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="certificateType"
                className="block text-sm font-medium text-gray-700"
                style={{ fontFamily: "Roboto", fontSize: "14px" }}
              >
                Certificate Type
              </label>
              <select
                id="certificateType"
                {...register("certificateType", { required: "Certificate type is required" })}
                className={`mt-1 block w-full border ${
                  errors.certificateType ? "border-[#E76F51]" : "border-gray-300"
                } rounded-md p-2`}
                style={{ fontFamily: "Roboto", fontSize: "16px" }}
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

            <button
              type="submit"
              className="w-full bg-[#3AAFA9] text-white py-3 rounded-lg font-semibold"
              style={{ fontFamily: "Montserrat", fontSize: "18px" }}
            >
              Apply Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyForCertificate;
