import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { Megaphone, Code, BarChart3, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WavyDivider from "../../../components/animation/WavyDivider";
const services = [
  {
    icon: <Megaphone size={22} />,
    title: "Digital Marketing",
    desc: "Full-funnel strategies that drive measurable growth",
  },
  {
    icon: <Code size={22} />,
    title: "Web Development",
    desc: "Modern, fast, and scalable web solutions",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Analytics & Insights",
    desc: "Data-driven decisions that fuel ROI",
  },
  {
    icon: <Rocket size={22} />,
    title: "Campaign Management",
    desc: "Strategic campaigns that deliver results",
  },
];

const ThSection = () => {
  return (
    <section className="py-28 bg-gradient-teal relative overflow-hidden">
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 text-primary-foreground/60 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-px bg-primary-foreground/30" />
              Our Expertise
              <span className="w-8 h-px bg-primary-foreground/30" />
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-black text-primary-foreground mt-3 mb-4"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-primary-foreground/60 max-w-xl mx-auto"
          >
            Comprehensive digital solutions tailored to accelerate your brand's
            growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.5}
              className="group p-3 rounded-2xl glass-card hover:bg-primary-foreground/15 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                {s.icon}
              </div>
              <h4 className="text-primary-foreground font-bold text-lg mb-1.5">
                {s.title}
              </h4>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-primary-foreground text-primary font-bold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-500 text-sm"
          >
            View All Services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WavyDivider />
      </div>
    </section>
  );
};

export default ThSection;
