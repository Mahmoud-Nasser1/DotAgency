import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyDivider from "./../../../components/animation/WavyDivider";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="relative container mx-auto px-4 pt-28 pb-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-primary-foreground/15 text-primary-foreground/60 text-[11px] uppercase tracking-[0.25em] backdrop-blur-md bg-primary-foreground/5">
            Digital Marketing · Web Development · Branding
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-4 leading-[1.05] tracking-tight"
        >
          Behind every{" "}
          <span className="font-script font-normal text-primary-foreground/80">
            dot
          </span>
          ,
          <br />a <span className="text-gradient-teal-hero">big story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/55 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          We craft digital experiences that captivate audiences and drive
          measurable growth for ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-primary-foreground text-primary font-bold px-9 py-4 rounded-full hover:shadow-2xl hover:shadow-primary-foreground/20 transition-all duration-500 text-sm"
          >
            Start Your Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary-foreground/70 font-medium px-9 py-4 rounded-full border border-primary-foreground/15 hover:bg-primary-foreground/5 hover:border-primary-foreground/30 transition-all duration-500 text-sm backdrop-blur-sm"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-16 h-px bg-primary-foreground/20 origin-center hidden md:block"
      />

      <div className="absolute bottom-0 left-0 right-0">
        <WavyDivider />
      </div>
    </section>
  );
};

export default Hero;
