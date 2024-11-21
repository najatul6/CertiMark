import { FaCertificate, FaFileAlt, FaHome,  FaUsersCog } from "react-icons/fa";
import { FaFileCircleXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <nav className="mt-10 space-y-2">
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaHome />
          <span>Overview</span>
        </NavLink>
        <NavLink
          to="/dashboard/pendingApplications"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaFileAlt />
          <span>Pending Applications</span>
        </NavLink>
        <NavLink
          to="/dashboard/rejectedApplications"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaFileCircleXmark />
          <span>Rejected Applications</span>
        </NavLink>
        <NavLink
          to="/dashboard/verifiedCertificates"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaCertificate />
          <span>Approved Applications</span>
        </NavLink>
        <NavLink
          to="/dashboard/user-management"
          className={({ isActive }) =>
            `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
              isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
            }`
          }
        >
          <FaUsersCog />
          <span>User Management</span>
        </NavLink>
      </nav>
    </>
  );
};

export default AdminSidebar;
