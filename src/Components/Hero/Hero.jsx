import { Link } from "react-router-dom";
import hero1 from "../../assets/slider/1.jpg";
import hero2 from "../../assets/slider/2.jpg";
import hero3 from "../../assets/slider/3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${hero1})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="relative text-center max-w-3xl px-4">
              <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6 mt-2">
                Apply, Receive, and Verify Your Certificates Digitally
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Streamline your certification process with our secure and
                efficient platform.
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
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${hero2})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="relative text-center max-w-3xl px-4">
              <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6 mt-2">
                Secure & Instant Access to Your Credentials
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Easily apply and manage your certificates in one platform.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <button className="bg-lightTeal hover:bg-white text-white hover:text-lightTeal transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                    Get Started
                  </button>
                </Link>
                <Link to="/eVerification">
                  <button className="bg-transparent border-2 border-lightTeal text-lightTeal hover:bg-lightTeal hover:text-white transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                    Verify Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${hero3})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="relative text-center max-w-3xl px-4">
              <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6 mt-2">
                Empowering Digital Verification Solutions
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Experience seamless, trusted, and instant certificate
                verification.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <button className="bg-lightTeal hover:bg-white text-white hover:text-lightTeal transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                    Start Now
                  </button>
                </Link>
                <Link to="/eVerification">
                  <button className="bg-transparent border-2 border-lightTeal text-lightTeal hover:bg-lightTeal hover:text-white transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                    Verify Instantly
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
