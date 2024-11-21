import { Link } from "react-router-dom";
import { teams } from "../../utils/team";
import { FaGithub } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "./team.css";

const Team = () => {
  return (
    <div className="py-16 relative font-montserrat border-b myStyle">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>
      <h2 className="text-white text-3xl font-extrabold text-center">
        Meet Our Team
      </h2>
      <hr className="w-1/3 mx-auto mt-2" />
      {/* Teams Data Show here  */}
      <div>
        {/* Custom Navigation Arrows */}
        <div className="custom-navigation">
          <button className="swiper-button-prev custom-prev">&larr;</button>
          <button className="swiper-button-next custom-next">&rarr;</button>
        </div>
        <div className="max-w-screen-2xl flex justify-center items-center mx-auto px-2 md:p-4 mt-12">
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12"> */}
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            modules={[Navigation,Autoplay, FreeMode]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px, show 3 slides
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {teams?.map((team) => (
              <SwiperSlide key={team?._id}>
                <div className="card w-full mx-auto">
                  <img src={team?.image} alt="" />
                  <div className="content">
                    <p className="title ">
                      {team?.Name}
                      <br />
                      <span className="text-xs lowercase text-white/65">
                        {team?.Email}
                      </span>
                      <br />
                      <span>{team?.skill}</span>
                    </p>
                    <ul className="sci">
                      {/* Facebook Link  */}
                      <li>
                        <Link target="_blank" to={team?.fbLink}>
                          <svg
                            className="fa-brands fa-facebook"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                          </svg>
                        </Link>
                      </li>

                      {/* GitHub Link  */}
                      <li>
                        <Link target="_blank" to={team?.github}>
                          <FaGithub />
                        </Link>
                      </li>
                      {/* linkedin Links  */}
                      <li>
                        <Link target="_blank" to={team?.linkedin}>
                          <svg
                            className="fa-brands fa-linkedin-in"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Team;


