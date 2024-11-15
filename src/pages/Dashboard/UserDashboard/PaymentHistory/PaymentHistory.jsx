import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useApplication from "../../../../hooks/useApplication";
import Loading from "../../../../Components/Shared/Loading/Loading";

const PaymentHistory = () => {
  const [application, , isPending] = useApplication();
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
  const paidApplication = application?.filter((app) => app?.fee === "paid");
  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Payment History"} />
      {
        paidApplication?.length !== 0 && <h1 className="text-2xl text-center text-white py-5">Total Payment : {paidApplication?.length}</h1>
      }
      
      <div className=" border overflow-x-auto shadow-lg  w-full">
        <div>
          <table className="w-full text-center border-collapse capitalize text-darkGreen">
            <thead className="">
              <tr className="bg-lightTeal">
                <th className="border-b py-2 px-2 text-sm text-center md:text-lg whitespace-nowrap text-wrap">
                  Application Type
                </th>
                <th className="border-b py-2 px-2 text-sm text-center md:text-lg whitespace-nowrap text-wrap">
                  Submission Date
                </th>
                <th className="border-b py-2 px-2 text-sm text-center md:text-lg whitespace-nowrap text-wrap">
                  Payment Status
                </th>
                <th className="border-b py-2 px-2 text-sm text-center md:text-lg whitespace-nowrap text-wrap">
                  Transaction ID
                </th>
              </tr>
            </thead>
            <tbody>
              {paidApplication?.length === 0 ? (
                // No Data Found
                <tr>
                  <td
                    colSpan="9"
                    className="py-10 text-center text-2xl font-bold text-white"
                  >
                    No Data Found...
                  </td>
                </tr>
              ) : (
                // Table rows for each application
                <>
                  {paidApplication
                    .sort(
                      (a, b) =>
                        new Date(b.paymentDate) - new Date(a.paymentDate)
                    )
                    .map((app, index) => (
                      <tr
                        key={index}
                        className="hover:bg-darkGreen text-white text-xs md:text-base"
                      >
                        <td className="border-b py-2 capitalize">
                          {app?.certificateType}
                        </td>
                        <td className="border-b py-2 capitalize">
                          {formatDate(app?.paymentDate)}
                        </td>

                        <td className="border-b py-2 capitalize text-center ">
                          <span
                            className={`px-2 py-1 rounded-full text-sm flex justify-center items-center`}
                          >
                            {app?.fee === "paid" && <p> Paid</p>}
                          </span>
                        </td>
                        <td className="border-b py-2 capitalize">
                          {app?.paymentId}
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
