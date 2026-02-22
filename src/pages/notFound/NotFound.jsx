import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Home, Target, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-200, 200], [8, -8]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0f1e] flex flex-col items-center justify-center text-white"
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }}
    >
      {/* Background floating particles */}
      {[...Array(50)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: ["0%", "-120%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Central animated target + 404 */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="flex flex-col items-center py-48 justify-center z-7 px-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center mb-6"
        >
          <Target className="text-cyan-400" />
        </motion.div>

        <motion.h1
          animate={{ textShadow: ["0 0 0px #22d3ee", "0 0 25px #22d3ee"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 select-none"
        >
          404
        </motion.h1>

        <p className="mt-4 text-lg text-cyan-300 font-mono text-center">
          Campaign path not found:
          <span className="block text-cyan-400">{location.pathname}</span>
        </p>

        <h2 className="mt-6 text-3xl font-bold text-white/90 text-center">
          Your AI Funnel Missed the Target 🎯
        </h2>

        <p className="mt-3 text-white/60 max-w-xl text-center">
          This route doesn’t exist anymore. Let’s reroute your campaign traffic and optimize conversions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
          >
            <Home size={16} />
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/5 transition-all"
          >
            <ArrowLeft size={16} />
            Fix the Funnel
          </button>
        </div>
      </motion.div>

      {/* Optional: AI glitch / marketing vibes */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-cyan-500/10 blur-2xl animate-pulse"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default NotFound;