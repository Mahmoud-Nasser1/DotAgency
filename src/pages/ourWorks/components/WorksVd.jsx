import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";

const videos = [
  {
    title: "Barbi Spa – Luxury Wellness Experience",
    category: "Spa & Wellness",
    desc: "Visual campaign highlighting Barbi Spa’s relaxing atmosphere, premium treatments, and luxury self-care experience.",
    src: "/videos/BarbiSpa1.mp4",
  },
  {
    title: "Barbi Spa – Beauty & Relaxation",
    category: "Beauty Campaign",
    desc: "Creative video content showcasing skincare, massage sessions, and the calm lifestyle of Barbi Spa.",
    src: "/videos/BarbiSpa2.mp4",
  },
  {
    title: "Wadida Restaurant – Signature Dishes",
    category: "Restaurant Marketing",
    desc: "High-quality food videography capturing Wadida’s signature meals, flavors, and dining experience.",
    src: "/videos/wadida1.mp4",
  },
  {
    title: "Wadida Restaurant – Kitchen Stories",
    category: "Food Content",
    desc: "Behind-the-scenes kitchen moments and fresh ingredients presented in a cinematic restaurant campaign.",
    src: "/videos/wadida2.mp4",
  },
  {
    title: "Wadida Restaurant – Dining Experience",
    category: "Hospitality",
    desc: "Lifestyle-focused video campaign showing the full dining journey at Wadida Restaurant.",
    src: "/videos/wadida3.mp4",
  },
  {
    title: "Wadida Restaurant – Social Media Reels",
    category: "Social Media",
    desc: "Short-form engaging food reels designed to attract customers and boost restaurant visibility.",
    src: "/videos/wadida4.mp4",
  },
];

const WorksVd = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="relative bg-muted py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Video Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Campaigns In Action
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Watch how we bring brands to life through creative digital campaigns
            and storytelling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border
              hover:border-primary/30 transition-all duration-500
              hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Video Preview */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video cursor-pointer overflow-hidden"
              >
                {/* Video as Preview */}
                <video
                  src={video.src}
                  muted
                  playsInline
                  autoPlay
                  onLoadedMetadata={(e) => {
                    const v = e.target;
                    v.currentTime = 1; // بداية الجزء
                    v.playbackRate = 0.7; // السرعة (أبطأ)
                  }}
                  onTimeUpdate={(e) => {
                    const v = e.target;
                    if (v.currentTime > 5) v.currentTime = 1;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-7 w-16 h-16 rounded-full
                  bg-white/20 backdrop-blur
                  flex items-center justify-center
                  border border-white/20 mx-auto mt-[20%]"
                >
                  <Play
                    size={26}
                    className="text-white ml-1"
                    fill="currentColor"
                  />
                </motion.div>

                {/* Category */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full
                bg-black/40 backdrop-blur
                text-white text-xs font-medium"
                >
                  {video.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {video.desc}
                </p>

                <button
                  onClick={() => setActiveVideo(video)}
                  className="mt-4 inline-flex items-center gap-1.5
                  text-primary text-sm font-semibold hover:gap-2 transition-all"
                >
                  Watch Video <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur
            flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            >
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10
                rounded-full bg-black/60 text-white
                flex items-center justify-center hover:bg-black"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorksVd;
