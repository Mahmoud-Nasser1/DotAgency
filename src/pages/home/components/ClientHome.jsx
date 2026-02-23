import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WavyDivider from "../../../components/animation/WavyDivider";

const clients = [
  { name: "Perfectil Brand Campaign", logo: "/clients/client1.png" },
  { name: "Product Awareness Visual", logo: "/clients/client2.png" },
  { name: "Social Media Ad – Ramadan", logo: "/clients/client3.png" },
  { name: "Restaurant Promotion Design", logo: "/clients/client4.png" },
  { name: "Ramadan Lantern Visual", logo: "/clients/client5.png" },
  { name: "Outdoor Advertising Creative", logo: "/clients/client6.png" },
  { name: "FOGG Men Campaign", logo: "/clients/client7.png" },
  { name: "FOGG Product Highlight", logo: "/clients/client8.png" },
  { name: "FOGG Nature Concept", logo: "/clients/client9.png" },
  { name: "Motorcycle Lifestyle Ad", logo: "/clients/client10.png" },
  { name: "Healthcare Awareness Campaign", logo: "/clients/client11.png" },
  { name: "Medical Service Promotion", logo: "/clients/client12.png" },
  { name: "Beauty Product Branding", logo: "/clients/client13.png" },
  { name: "Cosmetics Social Media Visual", logo: "/clients/client14.png" },
  { name: "Perfume Branding Concept", logo: "/clients/client15.png" },
  { name: "Fashion Product Ad", logo: "/clients/client16.png" },
  { name: "Car Rental Promotion", logo: "/clients/client17.png" },
  { name: "Automotive Marketing Visual", logo: "/clients/client18.png" },
  { name: "Gym & Fitness Campaign", logo: "/clients/client19.png" },
  { name: "Healthy Lifestyle Ad", logo: "/clients/client20.png" },
  { name: "Tech Product Launch", logo: "/clients/client21.png" },
  { name: "Electronics Promotion Design", logo: "/clients/client22.png" },
  { name: "Home Appliances Campaign", logo: "/clients/client23.png" },
  { name: "Retail Store Social Ad", logo: "/clients/client24.png" },
  { name: "Food Product Branding", logo: "/clients/client25.png" },
  { name: "Restaurant Menu Promotion", logo: "/clients/client26.png" },
  { name: "Corporate Branding Visual", logo: "/clients/client27.png" },
  { name: "Business Awareness Campaign", logo: "/clients/client28.png" },
  { name: "Real Estate Promotion", logo: "/clients/client29.png" },
  { name: "Property Marketing Design", logo: "/clients/client30.png" },
  { name: "Travel & Tourism Ad", logo: "/clients/client31.png" },
  { name: "Hotel Branding Campaign", logo: "/clients/client32.png" },
  { name: "Event Promotion Visual", logo: "/clients/client33.png" },
  { name: "Seasonal Sales Campaign", logo: "/clients/client34.png" },
  { name: "E-commerce Product Ad", logo: "/clients/client35.png" },
  { name: "Online Store Branding", logo: "/clients/client36.png" },
  { name: "Luxury Product Campaign", logo: "/clients/client37.png" },
  { name: "Premium Brand Visual", logo: "/clients/client38.png" },
  { name: "Minimal Poster Design", logo: "/clients/client39.png" },
  { name: "Creative Social Media Visual", logo: "/clients/client40.png" },
  { name: "Brand Identity Showcase", logo: "/clients/client41.png" },
  { name: "Digital Marketing Campaign", logo: "/clients/client42.png" },
  { name: "Advertising Creative Concept", logo: "/clients/client43.png" },
  { name: "Visual Design Collection", logo: "/clients/client44.png" },
];

const ClientHome = () => {
  return (
    <section className="py-16 bg-gradient-teal relative">
      <div className="container mx-auto px-4 text-center relative z-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            We've partnered with companies across industries to deliver
            exceptional digital results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.slice(0, 8).map((client, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-primary-foreground/20 hover:border-primary-foreground/60 transition-all duration-300 hover:scale-110"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          to="/clients"
          className="inline-flex items-center gap-2 mt-10 bg-primary-foreground text-primary px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 mb-7"
        >
          View All Clients <ArrowRight size={18} />
        </Link>
      </div>
      <WavyDivider className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default ClientHome;
