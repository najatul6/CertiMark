import { useState } from "react";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="hover:text-white"
      >
        {dropdownOpen ? (
          <IoIosNotificationsOff size={30} />
        ) : (
          <IoIosNotifications size={30} />
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-4 duration-300 w-80 flex flex-col  rounded-xl border-stroke bg-darkGreen shadow-default border">
          <div className="px-4 py-2">
            <h5 className="text-sm font-medium text-white text-center">
              Notification
            </h5>
          </div>

          <ul className="flex flex-col overflow-y-auto ">
            <li>
              <Link
                className="flex flex-col gap-2.5 border-t rounded-b-xl border-stroke px-4 py-3 hover:bg-teal"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-white ">
                    Edit your information in a swipe
                  </span>{" "}
                  ...
                </p>
                <p className="text-xs">12 May, 2025</p>
              </Link>
            </li>
            {/* Repeat similar items for notifications */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownNotification;
