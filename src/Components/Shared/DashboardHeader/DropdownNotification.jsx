import { useState } from 'react';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <div>
        <button onClick={()=>setDropdownOpen(dropdownOpen)}>{dropdownOpen}</button>
    </div>
  );
};

export default DropdownNotification;


{/* <div className="absolute right-0 mt-2.5 w-80 flex flex-col rounded-sm  border-stroke bg-red-600 shadow-default border">
<div className="px-4.5 py-3">
  <h5 className="text-sm font-medium text-red">Notification</h5>
</div>

<ul className="flex flex-col overflow-y-auto">
  <li>
    <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-red-500" to="#">
      <p className="text-sm"><span className="text-black ">Edit your information in a swipe</span> ...</p>
      <p className="text-xs">12 May, 2025</p>
    </Link>
  </li>
  {/* Repeat similar items for notifications */}
// </ul>
// </div> */}