import { NavLink } from "react-router-dom";
import { FaFileAlt, FaHome, FaHistory } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const UserSidebar = () => {
  return (
    <>
      

      <nav className="flex-grow space-y-4">
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `flex items-center p-3  rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaHome className="mr-3" />
         Overview
        </NavLink>
        <NavLink
          to="/dashboard/applications"
          className={({ isActive }) =>
            `flex items-center p-3  rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaFileAlt className="mr-3" />
          Application Status
        </NavLink>

        {/* <NavLink
          to="/dashboard/downloads"
          className={({ isActive }) =>
            `flex items-center p-3  rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaDownload className="mr-3" />
          Downloads
        </NavLink> */}

        <NavLink
          to="/dashboard/paymentHistory"
          className={({ isActive }) =>
            `flex items-center p-3  rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaHistory className="mr-3" />
          Payment History
        </NavLink>
        <NavLink
          to="/dashboard/support"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <BiSupport />
          <span>Support</span>
        </NavLink>
      </nav>
    </>
  );
};

export default UserSidebar;
