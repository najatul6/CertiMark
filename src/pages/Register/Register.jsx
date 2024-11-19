import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../utils/imageUpload";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './RegisterCss.css'
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit Handle sign up
  const onSubmit = async (data) => {
    setLoading(true);
    const loadingToastId = toast.loading("Signing Up...");
    try {
      // Create User
      const result = await createUser(data?.email, data?.password);
      const loggedUser = result.user;

      // If user creation is successful and an image is provided
      let imageUrl = "";
      if (data.image && data.image.length > 0) {
        // Upload Image
        const imageData = await imageUpload(data.image[0]);
        if (imageData && imageData.data) {
          imageUrl = imageData.data.display_url;
        } else {
          throw new Error("Image upload failed. Please try again.");
        }

        // Update User Profile
        await updateUserProfile(data?.name, imageUrl);
      }
      // Send Data to Database
      const res = await axiosPublic.post("/users", {
        name: data?.name,
        email: data?.email,
        image: imageUrl,
        joinDate: loggedUser?.metadata?.creationTime,
        role: "user",
        uid: data?.uid,
      });
      // Check response from the server
      if (res.data && res.data.acknowledged === true) {
        toast.success("SignUp Successful");
        navigate("/");
      } else {
        toast.error("Failed to register user. Please try again.");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err.message ||
          "An error occurred during sign up.",
        {
          id: loadingToastId,
        }
      );
    } finally {
      setLoading(false);
      toast.dismiss(loadingToastId);
    }
  };

  // Handle Google
  const handleGoogle = () => {
    // Display a processing toast
    const loadingToastId = toast.loading("Signing In with Google...");

    signInWithGoogle()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          joinDate: result?.user?.metadata?.creationTime,
          role: "user",
          uid: result?.user?.uid,
        };

        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res?.status);
            // Dismiss the loading toast and show success message
            toast.dismiss(loadingToastId);
            toast.success("Sign Up Successful");
            navigate("/");
          })
          .catch((error) => {
            // Dismiss the loading toast and show error message if the request fails
            toast.dismiss(loadingToastId);
            toast.error("Failed to sign up. Please try again.");
            console.error(error);
          });
      })
      .catch((error) => {
        // Dismiss the loading toast and show error message if Google sign-in fails
        toast.dismiss(loadingToastId);
        toast.error(error.message || "Failed to sign in with Google.");
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center backgroundStyle min-h-screen">
      <div className="flex flex-col max-w-md px-6 py-3 rounded-md shadow-inner shadow-white/40 text-white">
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to CertiMark</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Profile Picture
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("image", {
                  required: "Image is required",
                  validate: {
                    // Optional: Check if file size is less than 2MB
                    lessThan2MB: (files) =>
                      files[0]?.size < 2 * 1024 * 1024 ||
                      "File size should be less than 2MB",
                    // Optional: Check if file is an image
                    acceptedFormats: (files) =>
                      ["image/jpeg", "image/png", "image/gif"].includes(
                        files[0]?.type
                      ) || "Only JPEG, PNG, and GIF formats are allowed",
                  },
                })}
                className={`mt-1 block w-full border bg-transparent focus:outline-none rounded-md p-2 ${
                  errors.image ? "border-[#E76F51]" : "border-[#2B7A78]"
                }`}
              />
              {errors.image && (
                <p className="text-[#E76F51] text-sm">{errors.image.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full border bg-transparent focus:outline-none rounded-md p-2 ${
                  errors.name ? "border-[#E76F51]" : "border-[#2B7A78]"
                }`}
              />
              {errors.name && (
                <p className="text-[#E76F51] text-sm">{errors.name.message}</p>
              )}
            </div>
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
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.",
                    },
                  })}
                  className={`mt-1 block w-full border bg-transparent focus:outline-none rounded-md p-2 pr-10 ${
                    errors.password ? "border-[#E76F51]" : "border-[#2B7A78]"
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
            className="hover:underline hover:text-teal hover:font-bold text-lightTeal font-bold"
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
