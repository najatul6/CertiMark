import { FaCertificate, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
      <nav className="mt-10 space-y-2">
        <NavLink
          to="/dashboard/overview"
          className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
          activeClassName="bg-gray-700"
        >
          <FaHome />
          <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Overview
          </span>
        </NavLink>
        <NavLink
          to="/dashboard/certificates"
          className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
          activeClassName="bg-gray-700"
        >
          <FaCertificate />
          <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Certificates
          </span>
        </NavLink>
        {/* <NavLink
          to="/dashboard/markSheet"
          className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
          activeClassName="bg-gray-700"
        >
          <FaFileAlt />
          <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            Marksheet
          </span>
        </NavLink> */}
        <NavLink
          to="/dashboard/user-management"
          className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
          activeClassName="bg-gray-700"
        >
          <FaUser />
          <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
            User Management
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default AdminSidebar;
