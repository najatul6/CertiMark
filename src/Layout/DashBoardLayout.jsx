import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCertificate, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

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
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        <nav className="mt-10 space-y-2">
          <NavLink
            to="/overview"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaHome />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Overview</span>
          </NavLink>
          <NavLink
            to="/certificates"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaCertificate />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Certificates</span>
          </NavLink>
          <NavLink
            to="/marksheet"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaFileAlt />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Marksheet</span>
          </NavLink>
          <NavLink
            to="/user-management"
            className="flex items-center p-2 space-x-3 hover:bg-gray-700 rounded-md"
            activeClassName="bg-gray-700"
          >
            <FaUser />
            <span style={{ fontFamily: 'Roboto', fontSize: '16px' }}>User Management</span>
          </NavLink>
        </nav>

        {/* Profile and Logout at the bottom */}
        <div className="absolute bottom-0 w-full px-2 space-y-2">
          <NavLink
            to="/profile"
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
        <div className="bg-[#3AAFA9] text-white p-4 md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">
          <h2 className="font-bold" >
            Dashboard Overview
          </h2>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards for overview section */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Pending Applications</h3>
              <p className="text-gray-600">24</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Verified Certificates</h3>
              <p className="text-gray-600">120</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Total Users</h3>
              <p className="text-gray-600">342</p>
            </div>
          </section>

          <section className="mt-6">
            <h3 className="font-semibold mb-4" >
              Recent Activity
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Action</th>
                    <th className="text-left p-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">John Doe</td>
                    <td className="p-4">Approved a certificate</td>
                    <td className="p-4">2024-10-25</td>
                  </tr>
                  <tr>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">Requested a marksheet</td>
                    <td className="p-4">2024-10-24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
