import { motion } from "framer-motion";
import {
  MessageSquare,
  Eye,
  BarChart3,
  Rocket,
  Users,
  Code,
  PartyPopper,
  TrendingUp,
} from "lucide-react";

import PageHeader from "./../../components/animation/PageHeader";

const services = [
  {
    icon: <MessageSquare size={32} />,
    title: "Social Media Moderation",
    desc: "Keep your online community safe and engaged with professional content moderation across all platforms.",
  },
  {
    icon: <Eye size={32} />,
    title: "Social Media Monitoring",
    desc: "Track brand mentions, sentiment, and trends in real-time to stay ahead of the conversation.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Social Media Analysis & Reporting",
    desc: "Data-driven insights and comprehensive reports to measure and optimize your social media performance.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Campaign Management",
    desc: "Strategic planning and execution of social media campaigns that drive engagement and conversions.",
  },
  {
    icon: <Users size={32} />,
    title: "Influencer Campaigns",
    desc: "We help you manage, validate, measure, and scale influencer marketing programs built on relationships. From identification to contracts, talent management and reporting.",
  },
  {
    icon: <Code size={32} />,
    title: "Web Development",
    desc: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: <PartyPopper size={32} />,
    title: "Outdoor Events",
    desc: "End-to-end event planning and management to create memorable brand experiences that resonate with your audience.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "E-Marketing",
    desc: "Comprehensive digital marketing strategies including SEO, PPC, email marketing, and content creation to grow your online presence.",
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <PageHeader
      title="Our Services"
      subtitle="Comprehensive digital solutions for your business"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-xl bg-card border border-border hover:gradient-teal hover:border-transparent transition-all duration-300 cursor-default"
          >
            <div className="text-primary group-hover:text-primary-foreground transition-colors mb-4">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary-foreground transition-colors mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
