import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import ProfileDropDown from "./ProfileDropDown";
const Navbar = () => {
  const {user}=useAuth()
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
        onClick={() => {
          if (window.innerWidth < 1024) setMobileMenuOpen(false); 
        }}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-lightTeal inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
        Home
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lightTeal transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/features"}
        onClick={() => {
          if (window.innerWidth < 1024) setMobileMenuOpen(false); 
        }}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-lightTeal inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
        Features
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lightTeal transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/apply"}
        onClick={() => {
          if (window.innerWidth < 1024) setMobileMenuOpen(false); 
        }}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-lightTeal inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       Apply
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lightTeal transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/contactUs"}
        onClick={() => {
          if (window.innerWidth < 1024) setMobileMenuOpen(false); 
        }}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-lightTeal inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
       Support
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lightTeal transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
      <NavLink
        to={"/aboutUs"}
        onClick={() => {
          if (window.innerWidth < 1024) setMobileMenuOpen(false); 
        }}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-lightTeal inline-block text-lightTeal hover:text-white group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-white hover:text-white group font-semibold pt-2 pl-1 pr-2"
        }
      >
      About Us
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lightTeal transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
     
    </>
  );
  return (
      <nav
        className={`transition-transform duration-300 ${
          isScroll ? "sticky top-0 shadow-xl w-full bg-darkGreen" : ""
        } w-full z-[999] fixed backdrop-blur-lg`}
      >
        <div className="py-4 max-w-[1440px] w-full mx-auto flex gap-6 items-center justify-between">
          {/* menu dropdown */}
          <div className="lg:hidden text-white">
            <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
          </div>
          <Link to={"/"} className="w-[120px]">
              <h2 className="text-white text-2xl lg:text-4xl font-bold">Certi<span className="text-lightTeal">Mark</span>.</h2>
          </Link>
          {/* Navlinks for larger device */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10">
            {navLinks}
          </div>
          {/* navlinks for small device */}
          <div
            className={`lg:hidden flex z-[999] flex-col gap-4 absolute ${
              isScroll ?  "top-[80px] shadow-inner" : "top-[80px] shadow-inner"
            } w-full  py-3 px-3 bg-darkGreen ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } transition duration-300`}
          >
            {navLinks}
          </div>
          <div className="max-w-full z-[999]">
            {user?<ProfileDropDown user={user}/>:<Link to="/logIn" className="rounded-xl bg-lightTeal border-none font-semibold text-white hover:text-black px-6 py-4 flex text-center items-center justify-center">
              Log In
            </Link>}
            
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
