import { MdOutlinePendingActions } from "react-icons/md";
import useApplication from "../../../../hooks/useApplication";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";

const ApplicationStatus = () => {
  const [application] = useApplication();
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
    <div className=" bg-[#FEFFFF] md:p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-darkGreen mb-4 text-center md:text-left">
        Application Status
      </h2>
      <div className="md:p-6 shadow-lg rounded-lg w-full">
        <div className="">
          <table className="w-full text-left border-collapse capitalize text-darkGreen">
            <thead>
              <tr>
                <th className="border-b py-2 px-2 text-sm  text-center md:text-left md:text-lg whitespace-nowrap text-wrap">
                  Application Type
                </th>
                <th className="border-b py-2 px-2 text-sm  text-center md:text-left md:text-lg whitespace-nowrap text-wrap">
                  Submission Date
                </th>
                <th className="border-b py-2 px-2 text-sm  text-center md:text-left md:text-lg whitespace-nowrap text-wrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {application.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-100 text-xs md:text-base">
                    <td className="border-b py-2 capitalize">{app?.certificateType}</td>
                    <td className="border-b py-2 capitalize">{formatDate(app?.ApplyDate)}</td>
                    <td className="border-b py-2 capitalize text-center md:text-left ">
                      <span
                        className={`px-2 py-1 rounded-full text-sm`}
                      >

                        {app.Status==='Pending'? <MdOutlinePendingActions className="text-yellow-600"/> : app.Status==="Approved"?<FcApproval className="bg-green-700"/>:<CiCircleRemove className="text-red-600"/>}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
