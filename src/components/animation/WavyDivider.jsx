const WavyDivider = ({ flip = false, className = "" }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-24"
      fill="hsl(var(--background))"
    >
      <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" />
    </svg>
  </div>
);

export default WavyDivider;