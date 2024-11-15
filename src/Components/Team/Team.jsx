import { Link } from "react-router-dom";
import { teams } from "../../utils/team";
import { FaGithub } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
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
        <div className="md:w-11/12 flex justify-center items-center mx-auto px-2 md:p-4 mt-12">
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12"> */}
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px, show 3 slides
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {teams?.map((team) => (
              <SwiperSlide key={team?._id}>
                <div className="card">
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

{
  /* <div
  key={team?._id}
  className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
>
  <img src={team?.image} className="w-full sm:h-60 object-cover" />

  <div className="p-4">
    <h4 className="text-gray-800 text-base font-bold">{team?.Name}</h4>
    <p className="text-gray-600 text-xs mt-1">{team?.skill}</p>

    <div className="mt-4">
      <p className="text-gray-600 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        quaerat.
      </p>
    </div>

    <div className="space-x-2 mt-4">
      <button
        type="button"
        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          fill="#fff"
          viewBox="0 0 155.139 155.139"
        >
          <path
            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
            data-original="#010002"
          />
        </svg>
      </button>
      <button
        type="button"
        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          fill="#fff"
          viewBox="0 0 512 512"
        >
          <path
            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
            data-original="#03a9f4"
          />
        </svg>
      </button>
      <button
        type="button"
        className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
            data-original="#0077b5"
          />
        </svg>
      </button>
    </div>
  </div>
</div>; */
}
