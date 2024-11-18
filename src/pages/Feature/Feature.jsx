const Features = () => {
  return (
    <div className="bg-gray-50 py-16 px-5 md:px-20">
      <div
        className="relative pt-20 pb-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./3.jpeg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-700 to-transparent opacity-80"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-10">
            Features
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              Online Application
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Students can apply for certificates, marksheets, and
              recommendation letters directly through an easy-to-use online
              platform.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              Secure Payment System
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Integrated secure payment gateway for hassle-free fee payments,
              ensuring data privacy and security.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              Admin Approval
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Applications are reviewed and approved by administrators to ensure
              accuracy and compliance.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              Instant Document Download
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once approved, students can download their verified documents
              instantly from their dashboard.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              Real-Time Status Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Track the status of your application in real-time to stay informed
              every step of the way.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-teal-500 mb-4">
              User-Friendly Dashboard
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Simplified dashboard for both students and administrators to
              manage applications efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
