import Gallery from "../../Components/Gallery/Gallery";
import Hero from "../../Components/Hero/Hero";
import HowItWork from "../../Components/HowItWork/HowItWork";
import InformationSection from "../../Components/InformationSection/InformationSection";
import Team from "../../Components/Team/Team";
import SectionContentBlock from "../../Components/SectionContentBlock/SectionContentBlock";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWork />
      <InformationSection/>
      <Gallery />
      <SectionContentBlock/>
      <Team />
    </div>
  );
};

export default Home;
