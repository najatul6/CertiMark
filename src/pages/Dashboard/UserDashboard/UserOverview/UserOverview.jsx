const UserOverview = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Dashboard Overview</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User-specific overview cards */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            My Pending Applications
          </h3>
          <p className="text-gray-600">3</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Verified Certificates
          </h3>
          <p className="text-gray-600">5</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Application History
          </h3>
          <p className="text-gray-600">8</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="font-semibold mb-4 text-lg">Recent Activity</h3>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left p-4 bg-lightTeal text-white font-semibold">
                  Application
                </th>
                <th className="text-left p-4 bg-lightTeal text-white font-semibold">
                  Status
                </th>
                <th className="text-left p-4 bg-lightTeal text-white font-semibold">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Completion Certificate</td>
                <td className="p-4">Approved</td>
                <td className="p-4">2024-10-20</td>
              </tr>
              <tr>
                <td className="p-4">Transcript Request</td>
                <td className="p-4">Pending</td>
                <td className="p-4">2024-10-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UserOverview;
