import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const ProfileDropDown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, loading, setLoading } = useAuth();
  const dropdownRef = useRef(null);
  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(err?.code);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <span className="loading loading-ring loading-md"></span>;
  }

  return (
    <div className="relative inline-block z-[999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-full font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900"
      >
        <img
          className="h-10 w-10 rounded-full flex-no-shrink"
          src={
            user?.photoURL
              ? `${user?.photoURL}`
              : "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80"
          }
          alt="user Profile pictures"
        />

        <div className={`${isOpen ? "rotate-180" : ""}`}>
          <svg
            className="ml-2 h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
          </svg>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[999]"
          tabIndex="-1"
        />
      )}

      <CSSTransition
        in={isOpen}
        timeout={150}
        classNames="dropdown"
        unmountOnExit
        nodeRef={dropdownRef}
      >
        <div
          ref={dropdownRef}
          className="mt-2 absolute right-0 origin-top-right text-left"
        >
          <div className="w-64 bg-teal shadow-inner rounded-lg shadow-lightTeal">
            <div className="flex items-center px-6 py-4">
              <div className="ml-4">
                <p className="font-semibold text-gray-900 leading-none">
                  {user?.displayName || "Author"}
                </p>
                <p>
                  <Link
                    to={"/dashboard/profile"}
                    className="text-sm text-gray-600 leading-none hover:underline"
                  >
                    View Profile
                  </Link>
                </p>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 py-1">
              <Link
                to="/dashboard/overview"
                className="block px-6 py-3 leading-tight hover:bg-gray-200"
              >
                Dashboard
              </Link>
            </div>
            <button
              onClick={handleLogOut}
              type="button"
              className="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200 border-t-2 border-gray-200 rounded-b-xl"
            >
              Sign out
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

ProfileDropDown.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileDropDown;
