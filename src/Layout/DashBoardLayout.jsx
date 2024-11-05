// import { useState } from "react";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import { FaUser, FaSignOutAlt } from "react-icons/fa";
// // import AdminSidebar from "../pages/Dashboard/Sidebars/AdminSidebar";
// import UserSidebar from "../pages/Dashboard/Sidebars/UserSidebar";
// import { CgClose } from "react-icons/cg";
// import { BiMenu } from "react-icons/bi";

import { Outlet } from "react-router";
import DashboardHeader from "../Components/Shared/DashboardHeader/DashboardHeader";
import Sidebar from "../Components/Shared/Sidebar/Sidebar";
import { useState } from "react";

// const DashBoardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#FEFFFF] flex relative">
//       {/* Sidebar */}
//       <aside
//         className={`bg-[#17252A] border border-red-600 h-screen text-white w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
//       >
//         <div className="px-2 space-y-2">
//           <Link to={"/"}><h2 className="text-white text-2xl lg:text-4xl font-bold text-center">
//             Certi<span className="text-lightTeal">Mark</span>.
//           </h2></Link>
//           <hr />
//         </div>
//         <div className="pl-2">
//           {/* <AdminSidebar /> */}
//           <UserSidebar />
//         </div>

//         {/* Profile and Logout at the bottom */}
//         <div className="absolute bottom-0 w-full px-2 space-y-2 pb-5">
//           <NavLink
//             to="/dashboard/profile"
//             className={({ isActive }) =>
//               `flex items-center p-3 space-x-3 rounded-s-xl text-lg ${
//                 isActive ? "bg-[#3AAFA9] text-white" : "text-[#FEFFFF]"
//               }`
//             }
//           >
//             <FaUser />
//             <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
//               Profile
//             </span>
//           </NavLink>
//           <NavLink
//             to="/logout"
//             className="flex items-center p-3 space-x-3  rounded-s-xl hover:bg-red-600"

//           >
//             <FaSignOutAlt />
//             <span style={{ fontFamily: "Roboto", fontSize: "16px" }}>
//               Logout
//             </span>
//           </NavLink>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Mobile Menu Button */}
//         <div className="bg-[#3AAFA9] flex justify-end p-4 md:hidden">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="focus:outline-none text-white text-xl font-bold rounded-xl p-2 border border-white"
//           >
//             {isSidebarOpen ? <CgClose/> : <BiMenu/>}
//           </button>
//         </div>

//         {/* Main content */}
//         <main className="flex-1 p-2">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashBoardLayout;

const DashBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-darkGreen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
