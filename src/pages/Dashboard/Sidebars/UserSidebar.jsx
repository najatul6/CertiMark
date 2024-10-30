

import { NavLink } from "react-router-dom";
import { FaUser, FaFileAlt, FaDownload, FaSignOutAlt } from "react-icons/fa";

const UserSidebar = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "Montserrat" }}>
        User Dashboard
      </h2>

      <nav className="flex-grow space-y-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg text-lg ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaUser className="mr-3" />
          Profile
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg text-lg ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaFileAlt className="mr-3" />
          Applications
        </NavLink>

        <NavLink
          to="/downloads"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg text-lg ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaDownload className="mr-3" />
          Downloads
        </NavLink>
      </nav>

      <div className="mt-auto">
        <NavLink
          to="/logout"
          className="flex items-center p-3 rounded-lg text-lg text-[#FEFFFF] hover:bg-red-600"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </NavLink>
      </div>
    </>
  );
};

export default UserSidebar;
