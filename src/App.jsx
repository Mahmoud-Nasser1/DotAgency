import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
