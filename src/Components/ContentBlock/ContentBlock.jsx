import { Link } from "react-router-dom";

const ContentBlock = () => {
    return (
      <div className="bg-gray-100 px-6 py-12 font-sans">
        <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
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
              <p className="text-gray-600 text-sm leading-6">
                Empower your institution or organization with a streamlined approach to certificate issuance, management, and verification. Enhance credibility and simplify the process for students and admins alike.
              </p>
              <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
                <li>Apply for certificates online effortlessly.</li>
                <li>Verify certificate authenticity securely.</li>
                <li>Download approved documents instantly.</li>
                <li>Ensure transparency with admin oversight.</li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/dashboard/overview" 
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Explore Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContentBlock;
  