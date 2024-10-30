const ApplicationStatus = () => {
  return (
    <div className="min-h-screen bg-[#FEFFFF] p-4 md:p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-darkGreen mb-4 text-center md:text-left">
        Application Status
      </h2>
      {/* <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg w-full max-w-3xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4 whitespace-nowrap">
                  Application Type
                </th>
                <th className="border-b py-2 px-4 whitespace-nowrap">
                  Submission Date
                </th>
                <th className="border-b py-2 px-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b py-2 px-4">{app.type}</td>
                    <td className="border-b py-2 px-4">{app.submissionDate}</td>
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
      </div> */}
    </div>
  );
};

export default ApplicationStatus;
