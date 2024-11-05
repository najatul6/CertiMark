import useApplication from "../../../../hooks/useApplication";

const ApplicationStatus = () => {
  const [application] = useApplication();
  return (
    <div className="min-h-screen bg-[#FEFFFF] md:p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-darkGreen mb-4 text-center md:text-left">
        Application Status
      </h2>
      <div className="bg-white  md:p-6 shadow-lg rounded-lg w-full max-w-3xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-2 whitespace-nowrap text-wrap">
                  Application Type
                </th>
                <th className="border-b py-2 px-2 whitespace-nowrap text-wrap">
                  Submission Date
                </th>
                <th className="border-b py-2 px-2 whitespace-nowrap text-wrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {application.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b py-2 px-4">{app?.certificateType}</td>
                    <td className="border-b py-2 px-4">{app?.submissionDate}</td>
                    <td className="border-b py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          app.status === "Approved"
                            ? "bg-green-200 text-green-800"
                            : app.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {app.status}
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
