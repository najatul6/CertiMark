import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";

const PendingApplications = () => {
  const [searchQuery, setSearchQuery] = useState();
  const axiosSecure = useAxiosSecure();

  const { isPending, data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      return res.data;
    },
  });
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
  const filterSearch = searchQuery
    ? applications.filter(
        (user) =>
          user?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.registrationNo
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          user?.studentId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : applications;
  if (isPending) {
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
                {filterSearch.map((application) => {
                  return (
                    <tr
                      key={application?._id}
                      className="border-b text-lightTeal text-wrap "
                    >
                      <td className="p-2 text-sm border-r">{application?.name}</td>
                      <td className="p-2 text-sm border-r">{application?.studentId}</td>
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
                      <td className={`p-2 text-sm border-r text-center uppercase ${application?.fee === 'unPaid' && 'text-red-600'}`}>{application?.fee}</td>
                      <td className="py-2 px-1 flex flex-col justify-center items-center gap-2 text-sm capitalize">
                        <button className="w-full bg-green-600 hover:bg-green-500 rounded-xl text-white">Approve</button>
                        <button className="w-full bg-red-600 hover:bg-red-400 rounded-xl text-white">Reject</button>
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
