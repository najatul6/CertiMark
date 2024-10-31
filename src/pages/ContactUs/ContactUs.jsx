import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Implement form submission logic here (e.g., API call)
    console.log("Contact form submitted:", data);
    alert("Your message has been sent!");
  };

  return (
    <div className="bg-[#FEFFFF] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 border border-[#2B7A78]">
        <h2 className="text-center font-bold mb-6" style={{ fontFamily: "Montserrat", fontSize: "28px" }}>
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{ fontFamily: "Roboto", fontSize: "14px" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? "border-[#E76F51]" : "border-[#2B7A78]"}`}
            />
            {errors.name && <p className="text-[#E76F51] text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700" style={{ fontFamily: "Roboto", fontSize: "14px" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.email ? "border-[#E76F51]" : "border-[#2B7A78]"}`}
            />
            {errors.email && <p className="text-[#E76F51] text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-[14px]" >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.message ? "border-[#E76F51]" : "border-[#2B7A78]"}`}
              rows="4"
            ></textarea>
            {errors.message && <p className="text-[#E76F51] text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3AAFA9] text-white py-3 rounded-lg font-montserrat text-lg font-semibold"
          >
            Send Message
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default ContactUs;
