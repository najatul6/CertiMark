import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {  FaUser,   FaSignOutAlt } from 'react-icons/fa';
import AdminSidebar from '../pages/Dashboard/Sidebars/AdminSidebar';

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#FEFFFF] flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#17252A] text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <AdminSidebar/>

        {/* Profile and Logout at the bottom */}
        <div className="absolute bottom-0 w-full px-2 space-y-2">
          <NavLink
            to="/dashboard/profile"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaUser />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Profile</span>
          </NavLink>
          <NavLink
            to="/logout"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaSignOutAlt />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Logout</span>
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Button */}
        <div className="bg-[#3AAFA9] flex justify-end  p-4 md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none text-red-600">
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">
         <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
