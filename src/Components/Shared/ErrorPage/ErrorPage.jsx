import Lottie from "lottie-react"; // Ensure you have the correct import for Lottie
import notFound from "../../../assets/error/notFoundAnimation.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#2B7A78] text-xl font-bold">Oops! Page not found.</h1>
      <Lottie animationData={notFound} height={500} width={800} />
      <Link
        to="/"
        className="mt-6 inline-block bg-[#3AAFA9] text-white font-semibold py-2 px-4 rounded-lg"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
