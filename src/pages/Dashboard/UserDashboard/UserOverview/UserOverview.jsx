import useApplication from "../../../../hooks/useApplication";

const UserOverview = () => {
  const [application] = useApplication();
  //  const [paidApplication,setpaidApplication] = useState()
  const paidApplication = application?.filter((data) => data.fee === "paid");
  const unPaidApplication = application?.filter(
    (data) => data.fee === "unPaid"
  );
  const verifiedApplication = application?.filter(
    (data) => data.Status === "approved"
  );
  const totalPaid = paidApplication.reduce(
    (total, item) => total + parseFloat(item.feeAmount),
    0
  );
  const totalUnPaid = unPaidApplication.reduce(
    (total, item) => total + parseFloat(item.feeAmount),
    0
  );

  // Function to format date to AM/PM
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-bold mb-6">My Dashboard Overview</h2>

      {/* User-specific overview cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pending Applications */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            My Pending Applications
          </h3>
          <p className="text-gray-600">{application?.length}</p>
        </div>

        {/* Verified Certificates */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Verified Certificates
          </h3>
          <p className="text-gray-600">{verifiedApplication?.length}</p>
        </div>

        {/* Total Paid */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Total Paid
          </h3>
          <p className="text-gray-600">&#x9F3; {totalPaid}</p>
        </div>

        {/* Total Due */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3
            className="font-semibold"
            style={{ fontFamily: "Roboto", fontSize: "16px" }}
          >
            Total Due
          </h3>
          <p className="text-gray-600">&#x9F3; {totalUnPaid}</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-8">
        <h3 className="font-semibold mb-4 text-lg">Recent Activity</h3>

        <div className="bg-white shadow rounded-lg border border-red-600">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              {" "}
              Use min-w-full to allow scrolling
              <thead className="bg-lightTeal text-white uppercase">
                <tr>
                  <th className="text-left p-2 md:p-4 font-semibold text-xs md:text-sm lg:text-base w-1/4">
                    Certificate Type
                  </th>
                  <th className="text-left p-2 md:p-4 font-semibold text-xs md:text-sm lg:text-base w-1/4">
                    Application
                  </th>
                  <th className="text-left p-2 md:p-4 font-semibold text-xs md:text-sm lg:text-base w-1/4">
                    Status
                  </th>
                  <th className="text-left p-2 md:p-4 font-semibold text-xs md:text-sm lg:text-base w-1/4">
                    Application Date
                  </th>
                  <th className="text-left p-2 md:p-4 font-semibold text-xs md:text-sm lg:text-base w-1/4">
                    Publish Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {application?.map((app) => (
                  <tr key={app?._id} className="border-b">
                    <td className="p-2 md:p-4 text-xs md:text-sm lg:text-base uppercase overflow-hidden text-ellipsis whitespace-nowrap">
                      {app?.certificateType}
                    </td>
                    <td className="p-2 md:p-4 text-xs md:text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                      {app?.name}
                    </td>
                    <td className="p-2 md:p-4 text-xs md:text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                      {app?.Status}
                    </td>
                    <td className="p-2 md:p-4 text-xs md:text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                      {formatDate(app?.ApplyDate)}
                    </td>
                    <td className="p-2 md:p-4 text-xs md:text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                      {formatDate(app?.publishDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserOverview;
