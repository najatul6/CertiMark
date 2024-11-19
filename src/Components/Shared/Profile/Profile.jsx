import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import Loading from "../Loading/Loading";

const Profile = () => {
  const axiosPublic = useAxiosPublic();
  const {user}=useAuth()
  const { data: userData = [], isLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading/>;

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
  return (
    <div>
      <DashboardTitle title={`${userData?.role} Profile`}/>
      <div className="w-full px-6 pb-8 mt-8 mx-auto">

        <div className="grid w-full mx-auto mt-8">
          <div className="flex items-center space-y-5 flex-col">
            <img
              className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 "
              src={userData?.image || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
              alt="Bordered avatar"
            />
          </div>
          <div className="flex flex-col justify-start items-start mx-auto gap-2 mt-10">
            <h2 className="text-lg"><span className="text-xl font-bold text-white mr-2">Name:</span> {userData?.name}</h2>
            <h2 className="text-lg"><span className="text-xl font-bold text-white mr-2">Email:</span> {userData?.email}</h2>
            <h2 className="text-lg"><span className="text-xl font-bold text-white mr-2">Join Date:</span> {formatDate(userData?.joinDate)}</h2>
          </div>

          {/* <div className="items-center mt-8 sm:mt-14 text-[#202142]">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Your first name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="Your first name"
                  defaultValue="Jane"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Your last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="Your last name"
                  defaultValue="Ferguson"
                  required
                />
              </div>
            </div>

            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="your.email@mail.com"
                required
              />
            </div>

            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="profession"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="your profession"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
              >
                Bio
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                placeholder="Write your bio here..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
