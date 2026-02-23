import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Clients from "./pages/clients/Clients";
import Services from "./pages/services/Services";
import ContactUS from "./pages/contactUs/ContactUS";
import OurWork from "./pages/ourWorks/OurWork";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/work" element={<OurWork />} />
        {/* 
        
        <Route path="/about" element={<About />} />
        
        
         */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
