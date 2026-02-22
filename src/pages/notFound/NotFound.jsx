import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating dots */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 18 + 6,
            height: Math.random() * 18 + 6,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="flex items-center justify-center min-h-screen relative z-7 pt-16">
        <div className="text-center px-4">
          {/* 404 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 12 }}
            className="mb-10"
          >
            <div className="flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl md:text-[9rem] font-bold text-primary"
              >
                4
              </motion.span>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  viewBox="0 0 120 120"
                  className="w-24 h-24 md:w-36 md:h-36"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="45"
                    stroke="hsl(180, 40%, 35%)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="20 10"
                    opacity="0.8"
                  />
                  <circle
                    cx="60"
                    cy="15"
                    r="8"
                    fill="hsl(180, 40%, 35%)"
                    opacity="0.9"
                  />
                </svg>
              </motion.div>

              <motion.span
                animate={{ rotateY: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl md:text-[9rem] font-bold text-primary"
              >
                4
              </motion.span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          >
            Oops! Page not found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-10 max-w-md mx-auto"
          >
            Looks like this page took a wrong turn in the digital journey.
            Let’s get you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="
                inline-flex items-center gap-2
                bg-primary text-primary-foreground
                px-8 py-3 rounded-full font-semibold
                hover:shadow-xl hover:scale-105
                transition-all duration-300
              "
            >
              <Home size={18} /> Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="
                inline-flex items-center gap-2
                border border-border
                text-foreground
                px-8 py-3 rounded-full font-semibold
                hover:bg-muted
                transition-all duration-300
              "
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;