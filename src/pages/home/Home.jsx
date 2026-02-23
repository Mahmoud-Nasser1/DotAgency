import ClientsHome from "./components/ClientHome";
import Hero from "./components/Hero";
import Last from "./components/Last";
import OurWork from "./components/OurWork";
import SecSection from "./components/SecSection";
import ThSection from "./components/ThSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <SecSection />
      <ThSection />
      <OurWork />
      <ClientsHome />
      <Last />
    </div>
  );
};

export default Home;
