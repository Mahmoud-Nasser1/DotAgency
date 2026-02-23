import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Vision",
    text: "Leading in enabling companies to achieve exceptional and sustainable growth in a constantly changing digital world, to become the primary partner for success in the region.",
    img: "/vision.png",
    alt: "Vision - eye reflecting digital data",
  },
  {
    title: "Our Mission",
    text: "We are committed to providing comprehensive marketing solutions based on data-driven insights and artificial intelligence, to help our clients reach their target audience with precision and turn digital interactions into tangible results that enhance the value of their brands.",
    img: "arrow.png",
    alt: "Mission - growth arrow",
  },
  {
    title: "Our Strategy",
    text: "We partner with clients through real-time transparency and proactive scaling. Our approach combines strategic thinking with agile execution to deliver measurable results.",
    img: "/strategy.png",
    alt: "Strategy - chess pieces",
  },
];

const Last = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {s.text}
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto object-cover aspect-square"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Last;
