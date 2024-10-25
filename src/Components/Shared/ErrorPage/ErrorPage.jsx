import Lottie from "lottie-react"; // Ensure you have the correct import for Lottie
import notFound from "../../../assets/error/notFoundAnimation.json"; // Ensure this path is correct
import { Link } from "react-router-dom";

const ErrorPage = () => {
  // Default options for Lottie animation
  const defaultOptions = {
    loop: true, // Loop the animation
    autoplay: true, // Autoplay the animation
    animationData: notFound, // Animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Maintain aspect ratio
    },
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-72">
        {/* Use the options defined above */}
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
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
