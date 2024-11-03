import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="" >
      <section className=" h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Apply, Receive, and Verify Your Certificates Digitally
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8">
            Streamline your certification process with our secure and efficient
            platform.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <Link to="/apply">
              <button className="bg-lightTeal hover:bg-white text-white hover:text-lightTeal transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                Apply Now
              </button>
            </Link>
            <Link to="/eVerification">
              <button className="bg-transparent border-2 border-lightTeal text-lightTeal hover:bg-lightTeal hover:text-white transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                Verify Certificate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
