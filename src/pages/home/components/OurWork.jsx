import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../../components/animation/FadeUp ";

const workItems = [
  {
    title: "Social Media Campaign",
    category: "E-Marketing",
    image: "/social.png",
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "WorkSocial.png",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/Ecommerce.png",
  },
];

const OurWork = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                to="/work"
                className="group block relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                  <span className="text-xs uppercase tracking-wider mb-1 text-primary-foreground/70 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight size={16} className="text-primary-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
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
