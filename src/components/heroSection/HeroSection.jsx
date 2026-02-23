import { motion } from "framer-motion";
import WavyDivider from './../animation/WavyDivider';

const HeroSection = ({ title, subtitle, children, showWave = true, size = "default" }) => {
  const paddingClass =
    size === "large"
      ? "pt-32 pb-32 md:pt-44 md:pb-44"
      : "pt-28 pb-20 md:pt-36 md:pb-28";

  return (
    <section className="relative overflow-hidden bg-gradient-teal">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 animate-float" />
        <div className="absolute bottom-10 -left-16 w-48 h-48 rounded-full bg-accent/10 animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-glow/5 animate-spin-slow" />
      </div>

      <div className={`relative z-7 section-padding ${paddingClass}`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-hero-secondary max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {showWave && <WavyDivider color="background" />}
    </section>
  );
};

export default HeroSection;