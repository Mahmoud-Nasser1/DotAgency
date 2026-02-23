import { motion } from "framer-motion";
import PageTransition from "../../components/animation/PageTransition";
import PageHeader from "../../components/animation/PageHeader";
import HeroSection from "../../components/heroSection/HeroSection";

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
  { name: "Perfectil Hair Care Campaign", logo: "/clients/client1.png" },
  { name: "Sunscreen Summer Campaign", logo: "/clients/client2.png" },
  { name: "Friday Prayer Awareness Post", logo: "/clients/client3.png" },
  { name: "Ramadan Family Gathering Ad", logo: "/clients/client4.png" },
  { name: "Ramadan Lantern Spiritual Visual", logo: "/clients/client5.png" },
  { name: "Kemet Tourism Desert Campaign", logo: "/clients/client6.png" },
  { name: "FOGG Master Influencer Ad", logo: "/clients/client7.png" },
  { name: "FOGG Desert Power Concept", logo: "/clients/client8.png" },
  { name: "FOGG Nature Island Concept", logo: "/clients/client9.png" },
  { name: "Vintage Motorcycle Lifestyle Ad", logo: "/clients/client10.png" },
  { name: "Health Care Night & Day Campaign", logo: "/clients/client11.png" },
  { name: "Dental Clinic Promotion", logo: "/clients/client12.png" },
  { name: "Celens Sun Protection Ad", logo: "/clients/client13.png" },
  { name: "Celens Dry Skin Protection Campaign", logo: "/clients/client14.png" },
  { name: "Izurde Cream Branding (Purple Edition)", logo: "/clients/client15.png" },
  { name: "Izurde Summer Beach Campaign", logo: "/clients/client16.png" },
  { name: "Horse Racing Comparison Ad", logo: "/clients/client17.png" },
  { name: "Horse Power Strength Campaign", logo: "/clients/client18.png" },
  { name: "Overcoming Fear Horse Riding Ad", logo: "/clients/client19.png" },
  { name: "Future Technology Concept Visual", logo: "/clients/client20.png" },
  { name: "Flying Hoop Riding Academy Branding", logo: "/clients/client21.png" },
  { name: "Equestrian Training Promotion", logo: "/clients/client22.png" },
  { name: "Gym Monster Fitness Campaign", logo: "/clients/client23.png" },
  { name: "Rope Training Fitness Ad", logo: "/clients/client24.png" },
  { name: "Man Deodorant Football Edition", logo: "/clients/client25.png" },
  { name: "Man Deodorant Morning Routine Ad", logo: "/clients/client26.png" },
  { name: "Man Deodorant Product Line Showcase", logo: "/clients/client27.png" },
  { name: "Man Deodorant Fresh Splash Visual", logo: "/clients/client28.png" },
  { name: "Man Deodorant Face Confidence Ad", logo: "/clients/client29.png" },
  { name: "Man Deodorant Balance Concept Ad", logo: "/clients/client30.png" },
  { name: "Electronics Installment Offer Campaign", logo: "/clients/client31.png" },
  { name: "Eid Appliances Promotion", logo: "/clients/client32.png" },
  { name: "Fresh Farm Milk Campaign", logo: "/clients/client33.png" },
  { name: "Green Time Eco Awareness Campaign", logo: "/clients/client34.png" },
  { name: "Beauty Tools Violet Branding", logo: "/clients/client35.png" },
  { name: "Deep Cleaning Skincare Campaign", logo: "/clients/client36.png" },
  { name: "ThriftCars Best Price Offer", logo: "/clients/client37.png" },
  { name: "ThriftCars Luxury Car Promotion", logo: "/clients/client38.png" },
  { name: "Summer Car Heat Campaign", logo: "/clients/client39.png" },
  { name: "Eid Car Celebration Offer", logo: "/clients/client40.png" },
  { name: "Luxury Spa Experience Campaign", logo: "/clients/client41.png" },
  { name: "VIP Facial Glow Treatment Ad", logo: "/clients/client42.png" },
  { name: "Restaurant Roll Sandwich Promotion", logo: "/clients/client43.png" },
  { name: "Pasta & Fast Food Offer", logo: "/clients/client44.png" },
];

const Clients = () => (
  <section>
    <HeroSection
      title="Our Clients"
      subtitle="Trusted by leading brands across Egypt and the Middle East to deliver exceptional digital results."
    />
    <PageTransition>
      <div className="min-h-screen bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} campaign`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-card p-3 text-center">
                    <span className="text-primary font-semibold text-sm">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  </section>
);

export default Clients;
