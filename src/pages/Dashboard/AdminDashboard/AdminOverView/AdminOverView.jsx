import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Shared/Loading/Loading";
import useApplicants from "../../../../hooks/useApplicants";
import useUsers from "../../../../hooks/useUsers";

const AdminOverView = () => {
  const [applicants, , isPending] = useApplicants();
  const [users] = useUsers();

  // Filter Applications by Status
  const pendingApplications = applicants.filter(
    (user) => user.Status === "Pending"
  );
  const approvedApplications = applicants.filter(
    (user) => user.Status === "Pending"
  );
  const rejectedApplications = applicants.filter(
    (user) => user.Status === "Rejected"
  );
  // Calculate total paid amount
  const totalPaidSum = applicants
    .filter((user) => user.fee === "paid")
    .reduce((acc, user) => acc + parseFloat(user.feeAmount), 0);

  // Calculate total unpaid amount
  const totalUnpaidSum = applicants
    .filter((user) => user.fee === "unPaid")
    .reduce((acc, user) => acc + parseFloat(user.feeAmount), 0);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Dashboard Overview"} />

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards for overview section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Pending Applications</h3>
          <p className="text-gray-600">{pendingApplications?.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Rejected Applications</h3>
          <p className="text-gray-600">{rejectedApplications?.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Verified Certificates</h3>
          <p className="text-gray-600">{approvedApplications?.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-gray-600">{users?.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Total Paid Amount</h3>
          <p className="text-gray-600">{totalPaidSum.toLocaleString()} BDT</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold">Total Unpaid Amount</h3>
          <p className="text-gray-600">{totalUnpaidSum.toLocaleString()} BDT</p>
        </div>
      </section>
      <section className="mt-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
      </section>
    </div>
  );
};

export default AdminOverView;
