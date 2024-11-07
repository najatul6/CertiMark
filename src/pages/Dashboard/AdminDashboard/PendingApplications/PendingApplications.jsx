import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";

const PendingApplications = () => {
  const [searchQuery,setSearchQuery]=useState()
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    data: applications = [],
  } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get('/applications');
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
          user?.userEmail.toLowerCase().includes(searchQuery.toLowerCase())||
          user?.registrationNo.toLowerCase().includes(searchQuery.toLowerCase())||
          user?.studentId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : applications;
    if(isPending){
      return <Loading/>
    }
  return (
    <div>
      <DashboardTitle title={"Pending Applications"} />
      <div>
        <div className=" rounded-xl border">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white">Total Application :</h1>
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
              <thead className="bg-teal whitespace-nowrap text-white">
                <tr>
                  <th className="p-4 text-left text-lg uppercase font-medium">
                    Name
                  </th>
                  <th className="p-4 text-left text-lg uppercase font-medium">
                    Email
                  </th>
                  <th className="p-4 text-left text-lg uppercase font-medium">
                    Role
                  </th>
                  <th className="p-4 text-left text-lg uppercase font-medium">
                    Joined At
                  </th>
                  <th className="p-4 text-left text-lg uppercase font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {filterSearch.map((application) => {
                  return (
                    <tr key={application?._id} className="border-b text-lightTeal">
                      <td className="p-4 text-sm ">{application?.name}</td>
                      <td className="p-4 text-sm ">{application?.userEmail}</td>
                      <td className="p-4 text-sm capitalize">{application?.Status}</td>
                      <td className="p-4 text-sm ">
                        {formatDate(application?.fee)}
                      </td>
                      <td className="p-4"></td>
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
