import { Link } from "react-router-dom";

const ContentBlock = () => {
  return (
    <div className="bg-gray-100 px-6 py-16 font-sans">
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-gray-200 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="max-h-80">
            <img
              src="https://readymadeui.com/management-img.webp"
              alt="Certificate Management"
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
              Manage Certificates with Ease
            </h2>
            <p className="text-blackDiamond text-sm leading-6">
              Empower your institution or organization with a streamlined
              approach to certificate issuance, management, and verification.
              Enhance credibility and simplify the process for students and
              admins alike.
            </p>
            <ul className="list-disc text-sm text-blackDiamond space-y-2 pl-4 mt-6">
              <li>Apply for certificates online effortlessly.</li>
              <li>Verify certificate authenticity securely.</li>
              <li>Download approved documents instantly.</li>
              <li>Ensure transparency with admin oversight.</li>
            </ul>
            <Link
              to="/dashboard/overview"
              className="text-lightTeal text-sm font-semibold "
            >
              <p className="mt-6 border-2 rounded-md border-lightTeal hover:underline flex justify-center items-center py-2 hover:bg-lightTeal hover:text-white">
                Explore Dashboard
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
