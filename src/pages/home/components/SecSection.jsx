import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Target, Eye, ArrowRight } from "lucide-react";
import { fadeUp } from "./../../../components/animation/FadeUp ";

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
    <span className="w-8 h-px bg-primary" />
    {children}
    <span className="w-8 h-px bg-primary" />
  </span>
);

const SecSection = () => {
  return (
    <section className="py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>Who We Are</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-5"
          >
            Crafting Digital{" "}
            <span className="text-gradient-teal">Excellence</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            DOT Agency is your strategic partner for digital transformation —
            combining creativity, data, and technology to build brands that
            stand out.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Lightbulb size={24} />,
              title: "Vision",
              text: "Leading companies to exceptional, sustainable growth in a constantly evolving digital landscape.",
              img: "/vision1.jpg",
            },
            {
              icon: <Target size={24} />,
              title: "Mission",
              text: "Comprehensive marketing powered by data-driven insights and AI to reach audiences with precision.",
              img: "/mision.png",
            },
            {
              icon: <Eye size={24} />,
              title: "Strategy",
              text: "Real-time transparency and proactive scaling to deliver measurable, tangible results.",
              img: "/strategy.png",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                    {item.icon}
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Our {item.title}
                    </span>
                  </div>
                  <p className="text-primary-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="text-center mt-10"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
          >
            Learn more about us{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SecSection;
