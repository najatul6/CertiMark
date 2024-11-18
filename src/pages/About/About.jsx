const About = () => {
  return (
    <div className="gradient-background py-10 ">
      <div
        className="relative pt-20 pb-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./2.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-transparent opacity-80"></div>

        {/* Content */}
        <div className="relative text-center text-white max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold mb-6 underline">About Us</h1>
          <p className="leading-relaxed text-lg mb-6">
            Welcome to{" "}
            <span className="font-semibold">
              Rangpur Polytechnic Institute Online Document Issuing Platform
            </span>
            , your one-stop solution for managing and obtaining student
            documents efficiently.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-5 px-4 lg:p-0">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4 underline">
            Our Mission
          </h2>
          <hr className="mb-2" />
          <p className="text-gray-300 leading-relaxed">
            Our mission is to simplify the process of applying for and issuing
            official student documents, ensuring accuracy, transparency, and
            accessibility for all students of Rangpur Polytechnic Institute.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4 ">
            What We Offer
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Apply for Certificates:</span>{" "}
              Students can easily apply for various certificates, including
              academic certificates, recommendation letters, and marksheets.
            </li>
            <li>
              <span className="font-semibold">Secure Online Payments:</span> Pay
              application fees securely through our integrated payment gateway.
            </li>
            <li>
              <span className="font-semibold">Admin Approval Process:</span>{" "}
              Applications are reviewed by the admin team to ensure authenticity
              and compliance.
            </li>
            <li>
              <span className="font-semibold">Instant Downloads:</span> Once
              approved, students can download their verified certificates
              directly from their dashboard.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4">
            Why Choose Us?
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Time-Saving:</span> No more
              waiting in long queues or navigating complex paperwork.
            </li>
            <li>
              <span className="font-semibold">Secure:</span> We use
              state-of-the-art encryption and secure payment systems to protect
              your data.
            </li>
            <li>
              <span className="font-semibold">Transparent:</span> Track the
              status of your application in real time.
            </li>
            <li>
              <span className="font-semibold">User-Friendly Interface:</span>{" "}
              Our intuitive platform ensures a seamless experience for both
              students and administrators.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            For Students
          </h2>
          <hr className="mb-2" />
          <p className="text-gray-300 leading-relaxed mb-4">
            If you are a student of Rangpur Polytechnic Institute, this platform
            is here to empower you. From applying to downloading, every step is
            just a few clicks away.
          </p>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            For Administrators
          </h2>
          <hr className="mb-2" />
          <p className="text-gray-300 leading-relaxed">
            For the administrative team, our platform provides a robust system
            to manage applications, approve requests, and generate documents
            efficiently.
          </p>
        </section>
        <div className="mt-8 text-center">
        <hr className="mb-2 w-1/2 mx-auto" />
          <p className="text-gray-300 font-medium">
            Join us as we embrace technology to make document issuing faster and
            hassle-free.
          </p>
          <hr className="mt-2 w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
