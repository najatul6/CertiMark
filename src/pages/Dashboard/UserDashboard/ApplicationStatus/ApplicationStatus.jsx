import { MdOutlinePendingActions } from "react-icons/md";
import useApplication from "../../../../hooks/useApplication";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import Loading from "../../../../Components/Shared/Loading/Loading";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import { FaHandHoldingDollar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useState } from "react";

const ApplicationStatus = () => {
  const [application, , isPending] = useApplication();
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
  // Certificate Download Function 
  const downloadButton =  async(app) => {
    setIsLoading(true)
    try {
      const response = await fetch(app?.certificate);
      if (response?.ok) {
        const blob = await response.blob();
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `${app.name}'s certificate.jpg`; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsLoading(false)
      } else {
        console.error("Failed to download certificate");
      }
    } catch (error) {
      console.error("Error downloading certificate:", error);
    }
  };

  if (isPending || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Application Status"} />
      {application.length > 0 && (
        <div className="flex justify-center items-center bg-gradient-to-r from-green-600 to-green-900 font-siligri pr-4 my-5">
          <p className="md:text-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-4 px-5 whitespace-nowrap">
            বিঃ দ্রঃ
          </p>
          <div>
            <Marquee speed={100}>
              <p className="text-white md:text-xl font-semibold py-1 ml-5 flex gap-2">
                আবেদন প্রক্রিয়া সম্পন্ন করতে আবেদন ফি প্রদান আবশ্যক। ফি প্রদান
                না করলে আবেদনটি অনুমোদিত হবে না এবং কনফার্মেশন পাওয়া যাবে না।
                তাই
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-extrabold animate-pulse ml-2">
                  &#11162; <span className="underline">Pay</span>
                </span>
                বাটন - এ ক্লিক করে ফি প্রদান করুন !!
                <span className="ml-4">||</span>
              </p>
            </Marquee>
          </div>
        </div>
      )}

      <div className=" border overflow-x-auto shadow-lg  w-full">
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
              {application?.length === 0 ? (
                // No Data Found
                <tr>
                  <td
                    colSpan="9"
                    className="py-10 text-center text-2xl font-bold text-white"
                  >
                    No Data Found...
                  </td>
                </tr>
              ) : (
                // Table rows for each application
                <>
                  {application
                    .sort(
                      (a, b) => new Date(b.ApplyDate) - new Date(a.ApplyDate)
                    )
                    .map((app, index) => (
                      <tr
                        key={index}
                        className="hover:bg-darkGreen text-white text-xs md:text-base"
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
                            {app?.fee === "unPaid" ? (
                              <Link to={`/dashboard/payment/${app?._id}`}>
                                <button
                                  type="button"
                                  className="px-5 py-2.5 flex items-center justify-center gap-2 rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-purple-600 hover:bg-purple-800 active:bg-purple-600 hover:text-lightTeal"
                                >
                                  <FaHandHoldingDollar className="text-2xl" />
                                  Pay &#x9F3; {app?.feeAmount}
                                </button>
                              </Link>
                            ) : app.Status === "Approved" ? (
                              <button
                                type="button"
                                onClick={() => downloadButton(app)}
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
                            ) : app?.fee === "paid" ? (
                              <button
                                type="button"
                                className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
                              >
                                Paid
                              </button>
                            ) : (
                              <p className="text-red-600 flex  justify-center items-center">
                                {" "}
                                <CiCircleRemove className="text-red-600 text-2xl mr-1" />{" "}
                                {app?.Status}
                              </p>
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
