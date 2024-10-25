
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The application process was a breeze! I was able to get my certificate in no time. Highly recommend this service!",
      photo: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
    },
    {
      name: "Jane Smith",
      feedback:
        "Verification was secure and straightforward. I appreciate the attention to data privacy and security.",
      photo: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
    },
    {
      name: "Michael Brown",
      feedback:
        "Quick processing and excellent customer support. I had my certificate verified within minutes!",
      photo: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-darkGreen text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial?.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
