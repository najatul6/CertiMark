import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"
const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
        }
      >
       Home
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink>
    </>
  );
  return (
    <div>
      <nav
        className={`transition-transform duration-300 ${
          isScroll ? "fixed top-0 shadow-xl w-full" : ""
        } w-full z-50 bg-white`}
      >
        <div className="py-4 max-w-7xl mx-auto flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} className="w-40 h-16" alt="Prerok Global Logo" />
          </Link>
          {/* navlinks for larger device */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10">
            {navLinks}
          </div>
          {/* navlinks for small device */}
          <div
            className={`lg:hidden flex z-30 flex-col gap-4 absolute ${
              isScroll ? "top-24" : "top-56"
            } w-full py-3 px-3 bg-white/70  ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-50"
            } transition duration-300`}
          >
            {navLinks}
          </div>
          {/* menu dropdown */}
          <div className="lg:hidden mx-2">
            <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
