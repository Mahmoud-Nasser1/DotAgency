import { motion } from "framer-motion";
import PageTransition from "../../components/animation/PageTransition";
import PageHeader from "../../components/animation/PageHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.035,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

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
const Clients = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Our Clients"
        subtitle="Trusted by ambitious brands across Egypt & the Middle East"
      />

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative z-7">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="
                group relative overflow-hidden
                flex items-center justify-center
                rounded-2xl aspect-[4/3]
                bg-card/70 backdrop-blur
                border border-border
                hover:border-primary/40
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-primary/10
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className="
                  relative z-5
                  max-h-16 md:max-h-44
                  max-w-[100%]
                  object-contain
                  opacity-90
                  transition-all duration-500
                  group-hover:opacity-100
                  group-hover:scale-105
                "
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </PageTransition>
);

export default Clients;
