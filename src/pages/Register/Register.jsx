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
  const onSubmit = (data) => {
    // const imageData =  imageUpload(image);
    console.log(data);
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const image = form.image.files[0];
  //   try {
  //     // Upload Image
  //     const imageData = await imageUpload(image);

  //     // Create User
  //     await createUser(email, password).then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //       // Update User Profile
  //       updateUserProfile(name, imageData?.data.display_url).then(() => {
  //         // const userData={
  //         //   name:
  //         // }
  //         // send Data to Database
  //         axiosPublic.post('/users',)
  //         // Reset form
  //         form.reset();
  //         navigate("/");
  //         toast.success("SignUp Successful");
  //       });
  //     });
  //   } catch (err) {
  //     toast.error(err?.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Handle Google
  const handleGoogle = async () => {
    try {
      // User Registration using google
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      toast.error(err?.code);
    } finally {
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
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Profile Picture:
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
        <p className="text-[#E76F51] text-sm">{errors.password.message}</p>
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
