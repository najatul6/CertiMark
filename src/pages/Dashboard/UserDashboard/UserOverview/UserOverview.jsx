import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Shared/Loading/Loading";
import useApplication from "../../../../hooks/useApplication";

const UserOverview = () => {
  const [application, , isPending] = useApplication();
  const paidApplication = application?.filter((data) => data.fee === "paid");
  const unPaidApplication = application?.filter(
    (data) => data.fee === "unPaid"
  );
  const pendingApplication = application?.filter(
    (data) => data.Status === "Pending"
  );
  const verifiedApplication = application?.filter(
    (data) => data.Status === "Approved"
  );
  const rejectedApplication = application?.filter(
    (data) => data.Status === "Rejected"
  );
  const totalPaid = paidApplication.reduce(
    (total, item) => total + parseFloat(item.feeAmount),
    0
  );
  const totalUnPaid = unPaidApplication.reduce(
    (total, item) => total + parseFloat(item.feeAmount),
    0
  );

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="">
      <DashboardTitle title={"My Dashboard Overview"} />

      {/* User-specific overview cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Applications */}
        <div className="bg-gradient-to-r from-lime-400 to-lime-300 shadow rounded-lg p-10 border-l-[5px] border-lime-600">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            Total Applications
          </h3>
          <p className="text-white text-lg pl-4">{application?.length}</p>
        </div>
        {/* Pending Applications */}
        <div className="bg-gradient-to-r from-teal to-green-600 shadow rounded-lg p-10 border-l-[5px] border-green-600">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            My Pending Applications
          </h3>
          <p className="text-white text-lg pl-4">{pendingApplication?.length}</p>
        </div>

        {/* Verified Certificates */}
        <div className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow rounded-lg p-10 border-l-[5px] border-indigo-600">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            Approved Certificates
          </h3>
          <p className="text-white text-lg pl-4">
            {verifiedApplication?.length}
          </p>
        </div>

        {/* Rejected Certificates */}
        <div className="bg-gradient-to-r from-red-400 to-red-700 shadow rounded-lg p-10 border-l-[5px] border-red-700">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            Rejected Certificates
          </h3>
          <p className="text-white text-lg pl-4">
            {rejectedApplication?.length}
          </p>
        </div>

        {/* Total Paid */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 shadow rounded-lg p-10 border-l-[5px] border-purple-700">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            Total Paid
          </h3>
          <p className="text-white text-lg pl-4">&#x9F3; {totalPaid}</p>
        </div>

        {/* Total Due */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow rounded-lg p-10 border-l-[5px] border-orange-500">
          <h3 className="font-semibold text-darkGreen text-xl pb-5">
            Total Due
          </h3>
          <p className="text-white text-lg pl-4">&#x9F3; {totalUnPaid}</p>
        </div>
      </section>
    </div>
  );
};

export default UserOverview;
