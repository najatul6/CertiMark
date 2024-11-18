import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo and Links */}
          <div className="text-center lg:text-left">
            <Link to="/" className="text-2xl lg:text-3xl font-bold text-white">
              Certi<span className="text-lightTeal">Mark</span>.
            </Link>
            <div className="mt-4 flex flex-col lg:flex-row gap-4 text-sm">
              <Link to="/privacyPolicy" className="hover:text-lightTeal transition">
                Privacy Policy
              </Link>
              <Link to="/termsOfService" className="hover:text-lightTeal transition">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lightTeal transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lightTeal transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lightTeal transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lightTeal transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-right">
            <p className="text-sm">Contact Us:</p>
            <p className="text-sm mt-1">Email: najatulislam11@gmail.com</p>
            <p className="text-sm">Phone: +880 1773 827 414</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-sm">
          <p>&copy;2024 <span className="text-teal font-bold">CertiMark</span>. All rights reserved.| Developed By - <Link target="_blank" className="text-lightTeal font-bold hover:underline" to={"https://www.najatulislam.me"}>Najatul Islam</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
