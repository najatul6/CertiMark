import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css"; // Create a CSS file for transitions
import { Link } from "react-router-dom";

const ProfileDropDown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center pl-6 pr-2 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900"
      >
        <img
          className="h-10 w-10 rounded-full flex-no-shrink"
          src={
            user?.photoURL
              ? user.photoURL
              : "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80"
          }
          alt=""
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
          className="fixed inset-0"
          tabIndex="-1"
        />
      )}

      <CSSTransition
        in={isOpen}
        timeout={150}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="mt-2 absolute right-0 origin-top-right text-left">
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <div className="flex items-center px-6 py-4">
              <div className="ml-4">
                <p className="font-semibold text-gray-900 leading-none">
                  {user?.displayName || "Author" }
                </p>
                <p>
                  <Link 
                    to={""}
                    className="text-sm text-gray-600 leading-none hover:underline"
                  >
                    View Profile
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 py-1">
              <a
                href="#"
                className="block px-6 py-3 leading-tight hover:bg-gray-200"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-6 py-3 leading-tight hover:bg-gray-200"
              >
                Analytics
              </a>
            </div>
            <form
              className="border-t-2 border-gray-200 py-1"
              action="#"
              method="POST"
            >
              <button
                type="button"
                className="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ProfileDropDown;
