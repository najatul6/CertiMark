import Hero from "../../Components/Hero/Hero";
import HowItWork from "../../Components/HowItWork/HowItWork";
import InformationSection from "../../Components/InformationSection/InformationSection";
import Team from "../../Components/Team/Team";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWork />
      <InformationSection />
      <Testimonials />
      <Team />
    </div>
  );
};

export default Home;
