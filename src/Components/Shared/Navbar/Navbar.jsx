import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);
  const onScroll = () => {
    const currentPosition = window.scrollY;
    setIsScroll(currentPosition > 80);
    setPrevPosition(currentPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [prevPosition]);

  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
        Home
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/applyCertificate"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       ApplyForCertificate
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/recommendationLetter"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       LetterOfRecommendation
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/eVerification"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       EVerification
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/contactUs"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       Contact Us
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
    </>
  );
  return (
      <nav
        className={`transition-transform duration-300 ${
          isScroll ? "fixed top-0 shadow-xl w-full" : ""
        } w-full z-50 bg-white/10`}
      >
        <div className="py-4 max-w-[1440px] w-full mx-auto flex gap-6 items-center justify-between">
          {/* menu dropdown */}
          <div className="lg:hidden ">
            <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
          </div>
          <Link to={"/"} className="w-[120px]">
              <img src={logo} className="w-full" alt="Prerok Global Logo" />
          </Link>
          {/* navlinks for larger device */}
          <div className="hidden lg:flex flex-col  lg:flex-row items-center gap-10">
            {navLinks}
          </div>
          {/* navlinks for small device */}
          <div
            className={`lg:hidden flex z-30 flex-col gap-4 absolute ${
              isScroll ? "top-0" : "top-28"
            } w-full py-3 px-3 bg-white/50  ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-50"
            } transition duration-300`}
          >
            {navLinks}
          </div>
          <div className="max-w-full">
            <Link to="/logIn" className="btn bg-amber-500 border-none font-semibold text-white hover:text-black px-5 py-4 flex text-center items-center justify-center">
              Log In
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
