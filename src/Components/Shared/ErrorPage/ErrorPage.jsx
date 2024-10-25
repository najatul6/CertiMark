import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#FEFFFF] min-h-screen flex flex-col items-center justify-center text-center">
      <h1
        className="text-[#2B7A78] font-bold"
        style={{ fontFamily: "Montserrat", fontSize: "28px" }}
      >
        Oops! Page not found.
      </h1>
      <div>
        
      </div>
      <Link
        to="/"
        className="mt-6 inline-block bg-[#3AAFA9] text-white font-semibold py-2 px-4 rounded-lg"
        style={{ fontFamily: "Montserrat", fontSize: "18px" }}
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
