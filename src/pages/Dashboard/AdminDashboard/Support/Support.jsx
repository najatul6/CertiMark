import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useSupport from "../../../../hooks/useSupport";
import Loading from "../../../../Components/Shared/Loading/Loading";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import { FcOk } from "react-icons/fc";

const Support = () => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosPublic();
  const [support, refetch, ] = useSupport();

  // Approve Support Message
  const handleApprove = (message) => {
    console.log(message);
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure to Approve this Message?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filter={
            status: "Problem Solved" 
        }
        axiosSecure
          .patch(`/support/${message?._id}`, filter)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              setIsLoading(false);
              Swal.fire({
                title: "Approved!",
                text: "Your file has been Approved.",
                icon: "success",
              });
            }
          });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Approval unsuccessful.",
          icon: "error",
        });
      }
    });
  };

  // Delete Support Message from Database
  const handleDelete = (message) => {
    console.log(message);
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure to delete this Message?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/support/${message?._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
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
    setIsLoading(false);
}
    });
  };

  //   Loading Effect
  if ( isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Support Box"} />
      <div>
        <div className=" rounded-t-xl border">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white">
              Total Message : {support?.length}
            </h1>
          </div>

          {/* User Table */}
          <div className=" overflow-x-auto">
            <table className="min-w-full bg-darkGreen rounded-xl">
              {/* Table Header */}
              <thead className="bg-lightTeal text-wrap whitespace-nowrap  text-white">
                <tr>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Name
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                   Email
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    User Email
                  </th>
                  <th className="p-4 text-left capitalize font-medium border-r">
                    Reason
                  </th>
                  <th className="p-4 text-left capitalize font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {support.length === 0 ? (
                  // No Data Found Row
                  <tr>
                    <td
                      colSpan="9"
                      className="py-10 text-center text-2xl font-bold text-white"
                    >
                      No Messages found...
                    </td>
                  </tr>
                ) : (
                  // Data Rows
                  <>
                    {support.map((message) => {
                      return (
                        <tr
                          key={message?._id}
                          className="border-b text-lightTeal text-wrap "
                        >
                          <td className="p-2 text-sm border-r">
                            {message?.name}
                          </td>
                          <td className="p-2 text-sm border-r">
                            {message?.email}
                          </td>
                          <td className="p-2 text-sm border-r">
                            {message?.userEmail}
                          </td>
                          <td className="p-2 text-sm border-r">
                            {message?.message}
                          </td>

                          <td className="py-2 px-1 flex  justify-center items-center gap-2 text-sm capitalize">
                            <button
                              className="mr-4 btn"
                              onClick={() => handleApprove(message)}
                            >
                              <FcOk />
                            </button>
                            <button
                              className="mr-4 btn"
                              title="Delete"
                              onClick={() => handleDelete(message)}
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

export default Support;
