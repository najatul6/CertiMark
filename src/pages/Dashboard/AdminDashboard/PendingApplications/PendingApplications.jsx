import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import useApplicants from "../../../../hooks/useApplicants";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PendingApplications = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [applicants, refetch, isPending] = useApplicants();
  const axiosSecure = useAxiosSecure();
const [isLoading,setIsLoading]=useState(false)
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

  // Show all users if no search query; otherwise, filter users
  const filterSearch = applicants
    .filter((user) => user.Status === "Pending")
    .filter((user) =>
      searchQuery
        ? user?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.registrationNo
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          user?.studentId.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );


  // // Approve and Reject Applications
  // const handleApprove = (application) => {
  //   const applicationData = {
  //     Status: "Approved",
  //     fee: application?.fee,
  //     publishDate: new Date().toISOString(),
  //     paymentId: application?.paymentId,
  //     paymentDate: application?.paymentDate,
  //   };
  //   Swal.fire({
  //     title: "Do you want to Approve?",
  //     showCancelButton: true,
  //     confirmButtonText: "Save",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const updateData = await axiosSecure.patch(
  //         `/applications/${application?._id}`,
  //         applicationData
  //       );
  //       if (updateData.data?.modifiedCount > 0) {
  //         refetch();
  //         Swal.fire("Application Approved!", "", "success");
  //       } else {
  //         Swal.fire("Failed to Approve Application!", "", "error");
  //       }
  //     }
  //   });
  // };
  const handleReject = (application) => {
    setIsLoading(true)
    const applicationData = {
      Status: "Rejected",
      fee: "Rejected",
      paymentId: application?.paymentId || "",
      paymentDate: application?.paymentDate || "",
      RejectDate: new Date().toISOString(),
    };
    Swal.fire({
      title: "Do you want to Reject?",
      showCancelButton: true,
      confirmButtonText: "Reject",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updateData = await axiosSecure.patch(
          `/applications/${application?._id}`,
          applicationData
        );
        if (updateData.data?.modifiedCount > 0) {
          refetch();
          setIsLoading(false)
          Swal.fire("Application Rejected!", "", "success");
        } else {
          Swal.fire("Failed to Reject Application!", "", "error");
        }
      }
    });
  };
  
  if (isPending || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Pending Applications"} />
      <div>
        <div className=" rounded-t-xl border">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white">
              Total Application : {filterSearch?.length}
            </h1>
            <form className="max-w-[480px] w-full px-4">
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  className="w-full border h-12 shadow border-lightTeal p-4 rounded-full bg-transparent focus:outline-none"
                  placeholder="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>
                  <FaSearchengin className="text-lightTeal h-5 w-5 absolute top-3.5 right-3 fill-current " />
                </button>
              </div>
            </form>
          </div>

          {/* User Table */}
          <div className=" overflow-x-auto">
            <table className="min-w-full bg-darkGreen rounded-xl">
              {/* Table Header */}
              <thead className="bg-lightTeal text-wrap whitespace-nowrap  text-white">
                <tr>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    student name
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Student ID
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Registration No.
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Technology
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Reason
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    year Of Completion
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Apply Date
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Payment Status
                  </th>
                  <th className="p-4 text-left capitalize font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {filterSearch.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="py-10 text-center text-2xl font-bold text-white"
                    >
                      No pending applications found.
                    </td>
                  </tr>
                )}

                {filterSearch
                  .sort((a, b) => new Date(b.ApplyDate) - new Date(a.ApplyDate))
                  .map((application) => {
                    return (
                      <tr
                        key={application?._id}
                        className="border-b text-lightTeal text-wrap "
                      >
                        <td className="p-2 text-sm border-r">
                          {application?.name}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {application?.studentId}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {application?.registrationNo}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {application?.technology}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {application?.certificateType}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {application?.yearOfCompletion}
                        </td>
                        <td className="p-2 text-sm border-r">
                          {formatDate(application?.ApplyDate)}
                        </td>
                        <td
                          className={`p-2 text-sm border-r text-center uppercase ${
                            application?.fee === "unPaid" && "text-red-600"
                          }`}
                        >
                          {application?.fee}
                        </td>
                        <td className="py-2 px-1 flex flex-col justify-center items-center gap-2 text-sm capitalize">
                          <button
                            // onClick={() => handleApprove(application)}
                            className="w-full bg-green-600 hover:bg-green-500 rounded-xl text-white"
                          >
                            <Link
                              to={`/dashboard/createCertificate/${application?._id}`}
                            >
                              Approve
                            </Link>
                          </button>
                          <button
                            onClick={() => handleReject(application)}
                            className="w-full bg-red-600 hover:bg-red-400 rounded-xl text-white"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingApplications;
