import HeroSection from "../../components/heroSection/HeroSection";
import Last from "./components/Last";
import WhySec from "./components/WhySec";

const About = () => {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Discover who we are and what drives us"
      />
      <WhySec />
      <Last />
    </>
  );
};

export default About;
