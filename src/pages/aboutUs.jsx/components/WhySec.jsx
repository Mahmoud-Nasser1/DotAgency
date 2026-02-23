import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { CheckCircle2, Globe, Sparkles, Users, Zap } from "lucide-react";

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhySec = () => {
  return (
    <section className="py-28 bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-3 text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              <span className="w-10 h-px bg-primary" />
              Why DOT Agency
              <span className="w-10 h-px bg-primary" />
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-7 leading-tight">
              We don't just market.
              <br />
              We <span className="text-gradient-teal">transform</span> brands.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              With 5+ years of experience and 200+ successful projects, we
              combine creative excellence with data-driven strategy to deliver
              measurable growth, stronger positioning, and real brand impact.
            </p>

            <div className="space-y-5">
              {[
                "Data-driven campaigns with measurable ROI",
                "AI-powered audience targeting & insights",
                "End-to-end digital presence management",
                "Trusted by 50+ brands across the region",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={24}
                    className="text-primary mt-1 shrink-0"
                  />
                  <span className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Sparkles size={26} />, title: "Creative Strategy" },
              { icon: <Zap size={26} />, title: "Performance Growth" },
              { icon: <Globe size={26} />, title: "Global Reach" },
              { icon: <Users size={26} />, title: "Brand Communities" },
            ].map((card, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-background shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  {card.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySec;
