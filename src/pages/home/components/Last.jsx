import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
    <span className="w-8 h-px bg-primary" />
    {children}
    <span className="w-8 h-px bg-primary" />
  </span>
);

const Last = () => {
  return (
    <section className="py-28 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>Let's Build Together</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-5 leading-tight"
          >
            Ready to grow
            <br />
            your brand?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg mb-10 leading-relaxed"
          >
            Partner with DOT Agency and transform your digital presence into
            measurable success.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 text-base"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Last;
