
const InformationSection = () => {
  const infoCards = [
    {
      title: "Easy Application",
      description:
        "Our user-friendly interface makes it simple to apply for certificates with just a few clicks.",
      icon: "📝",
    },
    {
      title: "Secure Verification",
      description:
        "Rest assured that your data is protected with top-notch security measures for certificate verification.",
      icon: "🔒",
    },
    {
      title: "Quick Processing",
      description:
        "Get your certificates processed faster than ever, with automated systems ensuring minimal wait times.",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-lightTeal text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-lightTeal text-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-md">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
