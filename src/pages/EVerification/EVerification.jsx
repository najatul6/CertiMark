import { useState } from "react";
import { useForm } from "react-hook-form";
import '../LogIn/loginStyle.css'
const EVerification = () => {
  const [verificationResult, setVerificationResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleVerification = (data) => {
    const { verificationCode } = data;

    // Simulate verification logic
    // Replace this with actual verification logic/API call
    const validCodes = {
      12345: {
        name: "John Doe",
        course: "Computer Science",
        date: "2023-06-15",
      },
      67890: {
        name: "Jane Smith",
        course: "Data Science",
        date: "2023-07-20",
      },
    };

    if (validCodes[verificationCode]) {
      setVerificationResult(validCodes[verificationCode]);
      setErrorMessage("");
    } else {
      setVerificationResult(null);
      setErrorMessage("Invalid certificate or code");
    }
  };

  return (
    <div className="myStyle min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 border border-[#2B7A78]">
        <h2
          className="text-center font-bold mb-6"
          style={{ fontFamily: "Montserrat", fontSize: "28px" }}
        >
          Verify Certificate
        </h2>

        <form onSubmit={handleSubmit(handleVerification)} className="space-y-4">
          <div>
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              {...register("verificationCode", {
                required: "Verification code is required",
                minLength: {
                  value: 5,
                  message: "Verification code must be at least 5 characters",
                },
              })}
              className={`mt-1 block w-full border bg-transparent focus:outline-none ${
                errors?.verificationCode
                  ? "border-[#E76F51]"
                  : "border-[#2B7A78]"
              } rounded-md p-2`}
            />
            {errors.verificationCode && (
              <p className="text-[#E76F51] text-sm mt-1">
                {errors.verificationCode.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3AAFA9] text-white py-3 rounded-lg font-semibold"
            style={{ fontFamily: "Montserrat", fontSize: "18px" }}
          >
            Verify
          </button>
        </form>

        {errorMessage && (
          <p className="text-[#E76F51] text-sm mt-4 text-center">
            {errorMessage}
          </p>
        )}

        {verificationResult && (
          <div className="mt-6 p-4 border border-[#28A745] rounded-md bg-green-50">
            <h3 className="font-semibold text-[#28A745]">
              Verification Successful!
            </h3>
            <p className="text-[#28A745]">
              Student Name: {verificationResult?.name}
            </p>
            <p className="text-[#28A745]">
              Course: {verificationResult.course}
            </p>
            <p className="text-[#28A745]">
              Completion Date: {verificationResult?.date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EVerification;
