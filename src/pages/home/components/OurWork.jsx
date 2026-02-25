import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { fadeUp } from "../../../components/animation/FadeUp ";
const featuredWorkss = [
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
  {
    name: "Celens Dry Skin Protection Campaign",
    logo: "/clients/client14.png",
  },
  {
    name: "Izurde Cream Branding (Purple Edition)",
    logo: "/clients/client15.png",
  },
  { name: "Izurde Summer Beach Campaign", logo: "/clients/client16.png" },
  { name: "Horse Racing Comparison Ad", logo: "/clients/client17.png" },
  { name: "Horse Power Strength Campaign", logo: "/clients/client18.png" },
  { name: "Overcoming Fear Horse Riding Ad", logo: "/clients/client19.png" },
  { name: "Future Technology Concept Visual", logo: "/clients/client20.png" },
  {
    name: "Flying Hoop Riding Academy Branding",
    logo: "/clients/client21.png",
  },
  { name: "Equestrian Training Promotion", logo: "/clients/client22.png" },
  { name: "Gym Monster Fitness Campaign", logo: "/clients/client23.png" },
  { name: "Rope Training Fitness Ad", logo: "/clients/client24.png" },
  { name: "Man Deodorant Football Edition", logo: "/clients/client25.png" },
  { name: "Man Deodorant Morning Routine Ad", logo: "/clients/client26.png" },
  {
    name: "Man Deodorant Product Line Showcase",
    logo: "/clients/client27.png",
  },
  { name: "Man Deodorant Fresh Splash Visual", logo: "/clients/client28.png" },
  { name: "Man Deodorant Face Confidence Ad", logo: "/clients/client29.png" },
  { name: "Man Deodorant Balance Concept Ad", logo: "/clients/client30.png" },
  {
    name: "Electronics Installment Offer Campaign",
    logo: "/clients/client31.png",
  },
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

let featuredWorks = featuredWorkss.slice(0, 8); // Display only the first 16 works on the homepage
const OurWork = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            A glimpse of the creative campaigns and digital solutions we've
            delivered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {featuredWorks.map((work, i) => (
            <motion.div
              key={work.name} // استخدم name كـ key فريد
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                to="/work"
                className="group relative block rounded-lg overflow-hidden aspect-[1.1] cursor-pointer border border-border hover:border-primary/30 transition-all duration-300"
              >
                <img
                  src={work.logo}
                  alt={work.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60 font-medium">
                    {work.category || "General"}
                  </span>
                  <h3 className="text-sm font-bold text-primary-foreground mt-0.5">
                    {work.name}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-primary-foreground/20">
                  <ExternalLink size={12} className="text-primary-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Work <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
