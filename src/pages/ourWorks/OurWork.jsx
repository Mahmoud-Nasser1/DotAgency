import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroSection from "../../components/heroSection/HeroSection";
import WorksVd from "./components/WorksVd";
import WorksPh from "./components/WorksPh";

const works = [
  {
    title: "FOGG Fragrance Campaign",
    category: "Social Media",
    description:
      "A comprehensive social media campaign that increased FOGG's engagement by 300% across all platforms with creative Arabic-first content.",
    gradient: "from-primary to-teal-light",
  },
  {
    title: "CELENES Skincare Launch",
    category: "E-Marketing",
    description:
      "Full digital launch strategy for CELENES skincare line including influencer partnerships and performance marketing.",
    gradient: "from-teal-deep to-primary",
  },
  {
    title: "Easy Gym Digital Presence",
    category: "Web Development",
    description:
      "Complete website redesign and social media overhaul that drove 150% increase in membership inquiries.",
    gradient: "from-teal-light to-teal-glow",
  },
  {
    title: "Perfectil Beauty Campaign",
    category: "Influencer Campaign",
    description:
      "Strategic influencer campaign across Egypt's top beauty creators, achieving viral reach and significant brand lift.",
    gradient: "from-primary to-teal-deep",
  },
];

const OurWork = () => (
  <div className="min-h-screen bg-background">
    <HeroSection
      title="Our Work"
      subtitle="Explore our portfolio of successful campaigns, creative solutions, and digital transformations."
    />

    <section className="py-16">
      <WorksPh />
      <WorksVd />
    </section>
  </div>
);

export default OurWork;
