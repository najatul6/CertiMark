
import { Outlet } from "react-router";
import DashboardHeader from "../Components/Shared/DashboardHeader/DashboardHeader";
import Sidebar from "../Components/Shared/Sidebar/Sidebar";
import { useState } from "react";
import './custom.css'


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
            <div className="mx-auto max-w-screen-2xl myStyle min-h-screen p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
