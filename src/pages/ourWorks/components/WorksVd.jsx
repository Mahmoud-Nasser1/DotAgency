import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const videos = [
  {
    title: "FOGG Perfumes Digital Campaign",
    category: "Social Media",
    desc: "A comprehensive social media campaign that boosted FOGG's brand awareness by 300% across Egypt, featuring creative Arabic content and influencer partnerships.",
    color: "from-primary via-accent to-teal-light",
  },
  {
    title: "CELENES Skincare Launch",
    category: "E-Marketing",
    desc: "Full digital launch strategy for CELENES skincare line, including social media management, influencer campaigns, and e-commerce optimization.",
    color: "from-accent via-teal-light to-primary",
  },
  {
    title: "Easy Gym Brand Revamp",
    category: "Web Development",
    desc: "Complete website redesign and digital marketing overhaul for Easy Gym, resulting in 200% increase in online memberships.",
    color: "from-teal-light via-primary to-accent",
  },
  {
    title: "Home Tech Appliances",
    category: "Campaign Management",
    desc: "Multi-platform advertising campaign for Home Tech appliances featuring product showcases and targeted Arabic-language ad content.",
    color: "from-primary via-teal-light to-accent",
  },
  {
    title: "Trust Horse Racing Events",
    category: "Outdoor Events",
    desc: "Event planning and digital coverage for Trust horse racing events, combining outdoor activations with live social media engagement.",
    color: "from-accent via-primary to-teal-light",
  },
  {
    title: "Queen Beauty Influencer Campaign",
    category: "Influencer Marketing",
    desc: "Strategic influencer marketing program connecting Queen Beauty with top beauty influencers across the MENA region.",
    color: "from-teal-light via-accent to-primary",
  },
];
const WorksVd = () => (
  <section className="relative">
    <div className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Video Showcase
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Campaigns In Action
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Watch how we bring brands to life through creative digital campaigns
            and storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              className="
                group rounded-2xl overflow-hidden
                bg-card border border-border
                hover:border-primary/30
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-primary/10
              "
            >
              {/* Video Preview */}
              <div
                className={`
                  relative aspect-video
                  bg-gradient-to-br ${video.color}
                  flex items-center justify-center
                  cursor-pointer overflow-hidden
                `}
              >
                {/* subtle animated radial highlight */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    relative z-10 w-16 h-16 rounded-full
                    bg-primary-foreground/20 backdrop-blur
                    flex items-center justify-center
                    border border-primary-foreground/20
                    shadow-lg
                  "
                >
                  <Play
                    size={26}
                    className="text-primary-foreground ml-1"
                    fill="currentColor"
                  />
                </motion.div>

                <span
                  className="
                    absolute top-4 left-4
                    px-3 py-1 rounded-full
                    bg-primary-foreground/10 backdrop-blur
                    text-primary-foreground text-xs font-medium
                    border border-primary-foreground/10
                  "
                >
                  {video.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {video.desc}
                </p>

                <button className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2 transition-all duration-300">
                  Watch Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorksVd;
