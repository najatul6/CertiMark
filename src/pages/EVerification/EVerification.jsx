import { useState } from "react";

const EVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerification = (e) => {
    e.preventDefault();

    // Simulate verification logic
    // Replace this with actual verification logic/API call
    const validCodes = {
      12345: {
        name: "John Doe",
        course: "Computer Science",
        date: "2023-06-15",
      },
      67890: { name: "Jane Smith", course: "Data Science", date: "2023-07-20" },
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
    <div className="bg-[#FEFFFF] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 border border-[#2B7A78]">
        <h2
          className="text-center font-bold mb-6"
          style={{ fontFamily: "Montserrat", fontSize: "28px" }}
        >
          Verify Certificate
        </h2>

        <form onSubmit={handleVerification} className="space-y-4">
          <div>
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: "Roboto", fontSize: "16px" }}
            >
              Enter Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className={`mt-1 block w-full border ${
                errorMessage ? "border-[#E76F51]" : "border-[#2B7A78]"
              } rounded-md p-2`}
              style={{ fontFamily: "Roboto", fontSize: "16px" }}
              required
            />
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
            <p
              className="text-[#28A745]"
              style={{ fontFamily: "Roboto", fontSize: "16px" }}
            >
              Student Name: {verificationResult.name}
            </p>
            <p
              className="text-[#28A745]"
              style={{ fontFamily: "Roboto", fontSize: "16px" }}
            >
              Course: {verificationResult.course}
            </p>
            <p
              className="text-[#28A745]"
              style={{ fontFamily: "Roboto", fontSize: "16px" }}
            >
              Completion Date: {verificationResult.date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EVerification;
