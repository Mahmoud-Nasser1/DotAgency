import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WavyDivider from "../../../components/animation/WavyDivider";
import { fadeUp } from "../../../components/animation/FadeUp ";

const clients = [
  { name: "FOGG", category: "Perfumes", image: "/fogg.jpg" },
  { name: "Celenes", category: "Skincare", image: "/celenes.jpg" },
  { name: "Dizurde", category: "Jewelry", image: "/dizurde.jpg" },
  { name: "Trust Academy", category: "Education", image: "/trust-academy.jpg" },
  { name: "Active Man", category: "Fitness", image: "/activeman.jpg" },
  { name: "Home Tech", category: "Appliances", image: "/hometech.jpg" },
  {
    name: "Barbie Salon",
    category: "Beauty",
    image: "/barbie-beauty.jpg",
  },
  { name: "Car Zone", category: "Automotive", image: "/carzone.jpg" },
  {
    name: "Wadida Cafe",
    category: "Food & Beverage",
    image: "/wadida-cafe.jpg",
  },
];

const ClientHome = () => {
  return (
    <section className="py-16 bg-gradient-teal relative">
      <div className="container mx-auto px-4 text-center relative z-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
        >
            Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary-foreground/70 mb-10 max-w-xl mx-auto"
        >
          We've partnered with companies across industries to deliver
          exceptional digital results.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-20 h-20 md:w-24 md:h-24 relative rounded-lg overflow-hidden border-2 border-primary-foreground/20 hover:border-primary-foreground/60 transition-all duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded">
                {client.name}
              </div>
            </motion.div>
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
