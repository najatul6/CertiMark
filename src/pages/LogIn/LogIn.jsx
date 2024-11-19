import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import './loginStyle.css'
import Swal from "sweetalert2";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { userLogIn, signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit Handle sign up
  const onSubmit = async (data) => {
    setLoading(true);

    const loadingToastId = toast.loading("Signing In...");
    try {
      // User LogIn
      await userLogIn(data?.email, data?.password);
      navigate(from, { replace: true });
      reset();
      Swal.fire("Log In Successful");
    } catch (err) {
      toast.error(err?.code);
    } finally {
      setLoading(false);
      toast.dismiss(loadingToastId);
    }
  };

// Handle Google Login
const handleGoogle = () => {
  // Display a processing toast for login
  const loadingToastId = toast.loading("Logging In with Google...");

  signInWithGoogle()
    .then(result => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
        joinDate: result?.user?.metadata?.creationTime,
        role: "user",
        uid: result?.user?.uid,
      };

      axiosPublic.post('/users', userInfo)  
        .then(res => {
          console.log(res.data);
          // Dismiss the loading toast and show success message
          toast.dismiss(loadingToastId);
          toast.success("Login Successful");
          navigate(from, { replace: true });
        })
        .catch(error => {
          // Dismiss the loading toast and show error message if login verification fails
          toast.dismiss(loadingToastId);
          toast.error("Failed to log in. Please try again.");
          console.error(error);
        });
    })
    .catch(error => {
      // Dismiss the loading toast and show error message if Google sign-in fails
      toast.dismiss(loadingToastId);
      toast.error(error?.code || "Failed to log in with Google.");
      console.error(error);
    });
};



  return (
    <div className="flex justify-center items-center min-h-screen myStyle">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  shadow-white/40  shadow-inner text-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`mt-1 block w-full border bg-transparent focus:outline-none rounded-md p-2 ${
                  errors.email ? "border-[#E76F51]" : "border-[#2B7A78]"
                }`}
              />
              {errors.email && (
                <p className="text-[#E76F51] text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`mt-1 block w-full border bg-transparent focus:outline-none rounded-md p-2 ${
                    errors.email ? "border-[#E76F51]" : "border-[#2B7A78]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[#E76F51] text-sm">
                  {errors.password.message}
                </p>
              )}
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
        <Link to="/forgetPassword" className="space-y-1 flex justify-end py-2">
          <button className="text-sm hover:font-bold hover:underline hover:text-teal text-gray-500">
            Forgot password?
          </button>
        </Link>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
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
          Don&apos;t have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-deep-orange text-lightTeal font-bold"
          >
            Create Account
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LogIn;
