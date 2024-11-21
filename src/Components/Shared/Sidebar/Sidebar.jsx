import { NavLink, useNavigate } from "react-router-dom";
import UserSidebar from "../../../pages/Dashboard/Sidebars/UserSidebar";
import { useRef } from "react";
import PropTypes from "prop-types";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import AdminSidebar from "../../../pages/Dashboard/Sidebars/AdminSidebar";
import useRole from "../../../hooks/useRole";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebar = useRef(null);
  const { logOut } = useAuth();
  const navigate = useNavigate();
  //  Get User Role from Data base
  const [userRole] = useRole();
  const handleLogOut = async () => {
    // Show processing toast
    const loadingToast = toast.loading("Processing...");

    try {
      await logOut();
      navigate("/");
      // Update toast to success message
      toast.success("You have successfully logged out.", {
        id: loadingToast,
      });
    } catch (err) {
      console.log(err);
      // Handle error and show error message
      toast.error("Logout failed. Please try again.", {
        id: loadingToast,
      });
    }
  };

  return (
    <div
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-darkGreen duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        boxShadow: "5px 0 15px rgba(0, 0, 0, 0.3)", // Custom right shadow
      }}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-5">
        <NavLink to="/">
          {/* <img src={Logo} alt="Logo" /> */}
          <h2 className="text-white text-3xl font-bold">
            Certi<span className="text-lightTeal">Mark</span>.
          </h2>
        </NavLink>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" />
          </svg>
        </button>
      </div>
      <hr className="mb-2" />
      <div className="flex flex-col justify-between h-full">
       <div>
         {/* conditionally show sidebar for user */}
         {userRole ? <AdminSidebar /> : <UserSidebar />}
       </div>
        {/* Profile and Logout at the bottom */}
        <div 
        className="w-full px-2 space-y-2 pb-2"
        >
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center p-3 space-x-3 rounded-s-xl text-lg hover:bg-teal ${
                isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
              }`
            }
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>
          <NavLink
            onClick={handleLogOut}
            className="flex items-center p-3 space-x-3 text-white rounded-s-xl hover:bg-red-600"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
