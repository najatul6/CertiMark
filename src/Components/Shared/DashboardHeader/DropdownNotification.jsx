import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from './ClickOutside';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          to="#"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
          <span className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying ? '' : 'hidden'}`} />
          <svg className="fill-current duration-300 ease-in-out" width="18" height="18" viewBox="0 0 18 18">
            <path d="M16.1999 14.9343..." fill="" />
          </svg>
        </Link>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2.5 w-80 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
            </div>

            <ul className="flex flex-col overflow-y-auto">
              <li>
                <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                  <p className="text-sm"><span className="text-black dark:text-white">Edit your information in a swipe</span> ...</p>
                  <p className="text-xs">12 May, 2025</p>
                </Link>
              </li>
              {/* Repeat similar items for notifications */}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
