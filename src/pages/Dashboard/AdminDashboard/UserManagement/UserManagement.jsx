import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaSearchengin } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import useUsers from "../../../../hooks/useUsers";
import Loading from "../../../../Components/Shared/Loading/Loading";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [users, refetch, isPending] = useUsers();

  // Function to format date to AM/PM
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };

  // Show all users if no search query; otherwise, filter users
  const filteredUsers = searchQuery
    ? users.filter(
        (user) =>
          user?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  // Delete User from Database
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure to delete user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Update User Role in Database
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_3").close();
    const form = e.target;
    const getRole = {
      role: form.userRoles.value,
    };
    Swal.fire({
      title: `Are you sure to change ${selectedUser.name} Role?`,
      text: `${getRole.role} role selected!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const menuRes = await axiosSecure.patch(
          `/users/${selectedUser?._id}`,
          getRole
        );
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Great!",
            text: `${selectedUser?.name} is now ${selectedUser?.role}`,
            icon: "success",
          });
        }
      }
    });
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <DashboardTitle title={"User Management"} />
      <div>
        <div className=" rounded-t-xl border">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white">
              Total Users : {filteredUsers?.length}
            </h1>
            <form className="max-w-[480px] w-full px-4">
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  className="w-full border h-12 shadow border-lightTeal p-4 rounded-full bg-transparent focus:outline-none"
                  placeholder="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>
                  <FaSearchengin className="text-lightTeal h-5 w-5 absolute top-3.5 right-3 fill-current " />
                </button>
              </div>
            </form>
          </div>

          {/* User Table */}
          <div className=" overflow-x-auto">
            <table className="min-w-full bg-darkGreen rounded-xl">
              {/* Table Header */}
              <thead className="bg-teal whitespace-nowrap text-white">
                <tr>
                  <th className="p-4 text-center capitalize font-medium border-r">
                    Profile
                  </th>
                  <th className="p-4 text-center capitalize font-medium border-r">
                    Name
                  </th>
                  <th className="p-4 text-center capitalize font-medium border-r">
                    Email
                  </th>
                  <th className="p-4 text-center capitalize font-medium border-r">
                    Role
                  </th>
                  <th className="p-4 text-center capitalize font-medium border-r">
                    Joined At
                  </th>
                  <th className="p-4 text-center capitalize font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap">
                {filteredUsers.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate)).map((user) => {
                  return (
                    <tr
                      key={user?._id}
                      className="border-b text-lightTeal border-r"
                    >
                      <td className="p-4 text-sm border-r">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                            <img src={user?.image} />
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm  text-wrap border-r">
                        {user?.name}
                      </td>
                      <td className="p-4 text-sm  text-wrap border-r">
                        {user?.email}
                      </td>
                      <td className="p-4 text-sm text-wrap border-r capitalize">
                        {user?.role}
                      </td>
                      <td className="p-4 text-sm text-wrap border-r ">
                        {formatDate(user?.joinDate)}
                      </td>
                      <td className="p-4 flex  justify-center items-center">
                        <button
                          className="mr-4 btn"
                          title="Edit"
                          onClick={() => {
                            setSelectedUser(user);
                            document.getElementById("my_modal_3").showModal();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882"
                          >
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000"
                            />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>

                        {/* Role Change Dialog  */}
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <h3 className="font-bold text-xl text-center text-lightTeal py-5">
                              Change {selectedUser.name}&#39;s role!
                            </h3>
                            <form
                              onSubmit={handleSubmit}
                              className="flex flex-col justify-center items-center"
                            >
                              <select
                                defaultValue={selectedUser?.role ?? "selected"}
                                name="userRoles"
                                className="text-lg bg-transparent border rounded-xl py-2 w-full text-center my-2 text-lightTeal"
                              >
                                <option value="selected" disabled>
                                  Select Role
                                </option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                              </select>
                              <button
                                type="submit"
                                className="btn w-full mt-5 text-white bg-transparent border border-teal hover:bg-teal"
                              >
                                Change Role
                              </button>
                            </form>
                          </div>
                        </dialog>
                        <button
                          className="mr-4 btn"
                          title="Delete"
                          onClick={() => handleDeleteUser(user)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 fill-red-500 hover:fill-red-700"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            />
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
