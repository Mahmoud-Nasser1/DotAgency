import { motion } from "framer-motion";
import WavyDivider from "./WavyDivider";

const PageHeader = ({ title, subtitle }) => (
  <section className="gradient-teal pt-28 pb-4">
    <div className="container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
    <WavyDivider />
  </section>
);

export default PageHeader;