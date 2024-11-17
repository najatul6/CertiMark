import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Shared/Loading/Loading";
import Swal from "sweetalert2";
import useApplicants from "../../../../hooks/useApplicants";
import { useState } from "react";

const RejectedApplications = () => {
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

  // Filter Applications by Status
  const filterSearch = applicants.filter((user) => user.Status === "Rejected");

  // Delete Application from Database
  const handleDeleteApplication = (application) => {
    console.log(application);
    setIsLoading(true)
    Swal.fire({
      title: "Are you sure to delete this Application?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/applications/${application?._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            setIsLoading(false)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Deletion unsuccessful.",
          icon: "error",
        });
      }
    });
  };

  //   Loading Effect
  if (isPending || isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <DashboardTitle title={"Rejected Applications"} />
      <div>
        <div className=" rounded-t-xl border">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white">
              Total Rejected Application : {filterSearch?.length}
            </h1>
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
                {filterSearch.length === 0 ? (
                  // No Data Found Row
                  <tr>
                    <td
                      colSpan="9"
                      className="py-10 text-center text-2xl font-bold text-white"
                    >
                      No Rejected applications found...
                    </td>
                  </tr>
                ) : (
                  // Data Rows
                  <>
                    {filterSearch.sort((a, b) => new Date(b?.RejectDate) - new Date(a?.RejectDate)).map((application) => {
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
                              className="mr-4 btn"
                              title="Delete"
                              onClick={() =>
                                handleDeleteApplication(application)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 fill-red-500 hover:fill-red-700"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                  data-original="#000000"
                                />
                                <path
                                  d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                  data-original="#000000"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedApplications;
