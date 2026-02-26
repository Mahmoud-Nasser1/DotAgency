import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import HeroSection from "../../components/heroSection/HeroSection";
import { fadeUp } from "../../components/animation/FadeUp ";

/* ✅ Images from /public/ourclient */
const clients = [
  { name: "FOGG", category: "Perfumes", image: "/ourclient/FOG.jpeg" },
  { name: "Dizurde", category: "Jewelry", image: "/ourclient/Dizurde.jpeg" },

  {
    name: "Active Man",
    category: "Fitness",
    image: "/ourclient/MAN.jpeg",
  },
  {
    name: "Barbie Beauty",
    category: "Beauty",
    image: "/ourclient/BARBIE.jpeg",
  },
  {
    name: "Car Zone",
    category: "Automotive",
    image: "/ourclient/CARZONE.jpeg",
  },
  {
    name: "Wadida Cafe",
    category: "Food & Beverage",
    image: "/ourclient/WADIDA.jpeg",
  },
  { name: "YAS", category: "Advertising", image: "/ourclient/YAS.jpeg" },
  {
    name: "DecoHub",
    category: "Decor",
    image: "/ourclient/DECOHUB.jpeg",
  },
  { name: "ElamidCars", category: "Technology", image: "/ourclient/CAR.jpeg" },
];

const Clients = () => {
  return (
    <section className="bg-background mb-16">
      <HeroSection
        title="Our Clients"
        subtitle="Trusted by leading brands to deliver exceptional digital results."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Partners in Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Brands We Power
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We've had the privilege of working with diverse brands across
              industries — from beauty and fitness to automotive and
              hospitality.
            </p>
          </div>

          {/* GRID */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* CARD */}
                <div className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* IMAGE */}
                  <img
                    src={client.image}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <span className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold mb-1">
                      {client.category}
                    </span>

                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {client.name}
                    </h3>

                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1.5 text-primary-foreground/80 text-xs mt-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        View Project <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Clients;
