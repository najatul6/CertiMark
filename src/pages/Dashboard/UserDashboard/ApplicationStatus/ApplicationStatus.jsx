import { MdOutlinePendingActions } from "react-icons/md";
import useApplication from "../../../../hooks/useApplication";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import Loading from "../../../../Components/Shared/Loading/Loading";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";

const ApplicationStatus = () => {
  const [application, , isLoading] = useApplication();
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
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="md:p-6 flex flex-col items-center">
      <DashboardTitle title={"Application Status"} />
      <div className=" border shadow-lg  w-full">
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
                  Status
                </th>
                <th className="border-b py-2 px-2 text-sm text-center md:text-lg whitespace-nowrap text-wrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {application.map((app, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 text-xs md:text-base"
                >
                  <td className="border-b py-2 capitalize">
                    {app?.certificateType}
                  </td>
                  <td className="border-b py-2 capitalize">
                    {formatDate(app?.ApplyDate)}
                  </td>

                  <td className="border-b py-2 capitalize text-center ">
                    <span
                      className={`px-2 py-1 rounded-full text-sm flex justify-center items-center`}
                    >
                      {app.Status === "Pending" ? (
                        <>
                          <MdOutlinePendingActions className="text-yellow-600 text-2xl mr-1" />
                          <span className="text-yellow-600">Pending</span>
                        </>
                      ) : app.Status === "Approved" ? (
                        <>
                          <FcApproval className="bg-green-700 text-2xl mr-1" />
                          <span className="text-green-700">Approved</span>
                        </>
                      ) : (
                        <>
                          <CiCircleRemove className="text-red-600 text-2xl mr-1" />
                          <span className="text-red-600">Rejected</span>
                        </>
                      )}
                    </span>
                  </td>
                  <td className="border-b py-2 capitalize text-center ">
                    <span
                      className={`px-2 py-1 rounded-full text-sm flex justify-center items-center`}
                    >
                      {app.Status === "Pending" ? (
                        <button
                        type="button"
                        className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          fill="currentColor"
                          className="mr-2 inline"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                            data-original="#000000"
                            paintOrder="fill markers stroke"
                          />
                        </svg>
                        Buy
                      </button>
                      ) : app.Status === "Approved" ? (
                        <button
                        type="button"
                        className="w-10 h-10 inline-flex items-center justify-center rounded border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          fill="#fff"
                          className="inline"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      ) : (
                        <button
                        type="button"
                        className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
                      >
                        <span className="border-r border-white pr-3">Red</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11px"
                          fill="currentColor"
                          className="ml-3 inline"
                          viewBox="0 0 320.591 320.591"
                        >
                          <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"
                          />
                          <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      )}
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
