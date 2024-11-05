import { Link } from "react-router-dom";
// import DropdownNotification from "./DropdownNotification";
import PropTypes from "prop-types";

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-darkGreen  drop-shadow-2xl lg:hidden">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="z-[99999] block rounded-sm border border-stroke p-1.5 shadow-sm lg:hidden"
          >
            {/* Hamburger Icon */}
            <span className="relative block  w-7 cursor-pointer">
              {/* Open and Close Animation */}
              <span className={`relative left-0 top-0 my-1 block h-1 rounded-full w-full bg-lightTeal duration-300 ease-in-out ${sidebarOpen ? "rotate-45" : ""}`} />
              <span className={`relative left-0 top-0 my-1 block h-1 rounded-full w-full bg-lightTeal duration-300 ease-in-out ${sidebarOpen ? "-rotate-45" : ""}`} />
            </span>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <span className="text-2xl font-bold">Certi<span className="text-lightTeal">Mark</span>.</span>
          </Link>
        </div>
        
        {/* <div className="flex items-center gap-3 w-full">
          <ul className="flex items-center justify-end w-full gap-2 2xsm:gap-4">
            <DropdownNotification />
          </ul>
        </div> */}
      </div>
    </header>
  );
};

DashboardHeader.propTypes = {
  sidebarOpen: PropTypes.any,
  setSidebarOpen: PropTypes.any,
};



export default DashboardHeader;
