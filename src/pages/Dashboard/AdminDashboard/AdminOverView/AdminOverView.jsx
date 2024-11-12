import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useApplicants from "../../../../hooks/useApplicants";
import useUsers from "../../../../hooks/useUsers";
import { Link } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const AdminOverView = () => {
  const [applicants, , isPending] = useApplicants();
  const [users] = useUsers();

  // Filter Applications by Status
  const pendingApplications = applicants.filter(
    (user) => user.Status === "Pending"
  );
  const approvedApplications = applicants.filter(
    (user) => user.Status === "Approved"
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

  // Chart Data
  const data = {
    labels: ["Pending", "Approved", "Rejected", "Paid (BDT)", "Due (BDT)"],
    datasets: [
      {
        label: "Application Overview",
        data: [
          pendingApplications.length,
          approvedApplications.length,
          rejectedApplications.length,
          totalPaidSum,
          totalUnpaidSum,
        ],
        backgroundColor: [
          "#ffb703",
          "#38b000",
          "#d00000",
          "#3A5A98",
          "#FFCA3A",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      
    },
  };

  return (
    <div>
      <DashboardTitle title={"Dashboard Overview"} />

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserrat">
        {/* Cards for overview section */}

        <Link to="/dashboard/pendingApplications">
          <div className="bg-yellow-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-yellow-500">
            <h3 className="text-xl mb-2 font-semibold text-yellow-700">
              Pending Applications
            </h3>
            <p className="text-gray-600 text-lg">
              {pendingApplications?.length}
            </p>
          </div>
        </Link>

        <Link to="/dashboard/rejectedApplications">
          <div className="bg-red-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-red-500">
            <h3 className="text-xl mb-2 font-semibold text-red-700">
              Rejected Applications
            </h3>
            <p className="text-gray-600 text-lg">
              {rejectedApplications?.length}
            </p>
          </div>
        </Link>
        <Link to="/dashboard/verifiedCertificates">
          <div className="bg-green-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-green-500">
            <h3 className="text-xl mb-2 font-semibold text-green-700">
              Approved Certificates
            </h3>
            <p className="text-gray-600 text-lg">
              {approvedApplications?.length}
            </p>
          </div>
        </Link>

        <Link to="/dashboard/user-management">
          <div className="bg-blue-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-blue-500">
            <h3 className="text-xl mb-2 font-semibold text-blue-700">
              Total Users
            </h3>
            <p className="text-gray-600 text-lg">{users?.length}</p>
          </div>
        </Link>
        <div className="bg-indigo-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-indigo-500">
          <h3 className="text-xl mb-2 font-semibold text-indigo-700">
            Total Paid
          </h3>
          <p className="text-gray-600 text-lg">
            {totalPaidSum.toLocaleString()} BDT
          </p>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-lg px-4 py-10 border-l-4 border-purple-500">
          <h3 className="text-xl mb-2 font-semibold text-purple-700">
            Total Due
          </h3>
          <p className="text-gray-600 text-lg">
            {totalUnpaidSum.toLocaleString()} BDT
          </p>
        </div>
      </section>
      <section className="mt-10">
        <Bar data={data} options={options} />
      </section>
    </div>
  );
};

export default AdminOverView;
