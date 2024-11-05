import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle profile update logic here
    toast.success("Profile updated successfully!");
    console.log(data); // You can send this data to your API or handle it as needed
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="flex flex-col items-center mb-6">
        <img
          src="/path/to/default/profile/picture.jpg" // Replace with a default image path
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold">Your Name</h2>
        <p className="text-gray-500">youremail@example.com</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full border bg-transparent rounded-md p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full border bg-transparent rounded-md p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="password" className="text-sm mb-2">Password</label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`mt-1 block w-full border bg-transparent rounded-md p-2 pr-10 ${
                errors.password ? "border-red-500" : "border-gray-300"
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
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="image" className="block text-sm">Profile Picture</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register("image")}
            className="mt-1 block w-full border bg-transparent rounded-md p-2 border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
