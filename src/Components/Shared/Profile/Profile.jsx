import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineCamera } from 'react-icons/ai';
import toast from 'react-hot-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/path/to/default/profile/picture.jpg"); // Replace with a default path
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: { 
      name: "Your Name",
      email: "youremail@example.com"
    }
  });

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert image to URL and update the preview
      setProfilePicture(URL.createObjectURL(file));
      toast.success("Profile picture updated");
    }
  };

  const onSubmit = (data) => {
    // Logic for saving updated profile data
    toast.success("Profile updated successfully!");
    console.log(data);
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      {/* Profile Picture Section */}
      <div className="relative mb-6">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <label className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full text-white cursor-pointer hover:bg-blue-600">
          <AiOutlineCamera size={20} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
        </label>
      </div>

      {/* User Info Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        {/* Name Field */}
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="text-lg font-semibold">Name</label>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 hover:text-blue-700"
          >
            <AiOutlineEdit size={20} />
          </button>
        </div>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          disabled={!isEditing}
          className={`w-full p-2 rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Email Field */}
        <label htmlFor="email" className="text-lg font-semibold">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          disabled={!isEditing}
          className={`w-full p-2 rounded-md border ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Update Button */}
        {isEditing && (
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 flex items-center justify-center"
          >
            <AiOutlineCheck size={20} className="mr-2" /> Update Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
