import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../utils/imageUpload";

const Register = () => {
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();

  // Form Submit Handle sign up
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    try {
      // Upload Image
      const imageData = await imageUpload(image);

      // Create User
      await createUser(email, password);

      // Update User Profile
      await updateUserProfile(name, imageData?.data.display_url);

      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google
  const handleGoogle = async () => {
    try {
      // User Registration using google
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      toast.error(err?.code);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white/5 text-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to CertiMark</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2  rounded-md  focus:outline-none bg-transparent border border-lightTeal text-white"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2  rounded-md  focus:outline-none bg-transparent border border-lightTeal text-white"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2  rounded-md  focus:outline-none bg-transparent border border-lightTeal text-white"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-darkGreen hover:bg-lightTeal hover:text-white w-full rounded-md py-3 text-lightTeal"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Sign up with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogle}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-teal hover:font-bold text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
