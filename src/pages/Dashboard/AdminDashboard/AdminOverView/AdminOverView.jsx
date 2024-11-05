import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useApplication from "../../../../hooks/useApplication";

const AdminOverView = () => {
  const [application]=useApplication()
  return (
    <div>
      <DashboardTitle title={"Dashboard Overview"}/>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards for overview section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Pending Applications
          </h3>
          <p className="text-gray-600">{application?.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Verified Certificates
          </h3>
          <p className="text-gray-600">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Total Users
          </h3>
          <p className="text-gray-600">342</p>
        </div>
      </section>
      <section className="mt-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
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
    </div>
  );
};

export default AdminOverView;
