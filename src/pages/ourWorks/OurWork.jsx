import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroSection from "../../components/heroSection/HeroSection";

const works = [
  {
    title: "FOGG Fragrance Campaign",
    category: "Social Media",
    description:
      "A comprehensive social media campaign that increased FOGG's engagement by 300% across all platforms with creative Arabic-first content.",
    gradient: "from-primary to-teal-light",
  },
  {
    title: "CELENES Skincare Launch",
    category: "E-Marketing",
    description:
      "Full digital launch strategy for CELENES skincare line including influencer partnerships and performance marketing.",
    gradient: "from-teal-deep to-primary",
  },
  {
    title: "Easy Gym Digital Presence",
    category: "Web Development",
    description:
      "Complete website redesign and social media overhaul that drove 150% increase in membership inquiries.",
    gradient: "from-teal-light to-teal-glow",
  },
  {
    title: "Perfectil Beauty Campaign",
    category: "Influencer Campaign",
    description:
      "Strategic influencer campaign across Egypt's top beauty creators, achieving viral reach and significant brand lift.",
    gradient: "from-primary to-teal-deep",
  },
];

const OurWork = () => (
  <div className="min-h-screen bg-background">
    <HeroSection
      title="Our Work"
      subtitle="Explore our portfolio of successful campaigns, creative solutions, and digital transformations."
    />

    {/* Cards */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Media */}
              <div
                className={`relative aspect-video bg-gradient-to-br ${work.gradient} flex items-center justify-center`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center cursor-pointer"
                >
                  <Play size={28} className="text-primary-foreground ml-1" />
                </motion.div>

                <span className="absolute top-4 left-4 text-xs uppercase tracking-wider text-primary-foreground/90 bg-primary-foreground/15 backdrop-blur px-3 py-1 rounded-full">
                  {work.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default OurWork;
