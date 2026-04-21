"use client";

import { motion } from "framer-motion";

const floatingShapes = [
  { size: 120, x: "8%", y: "15%", color: "rgba(204,68,255,0.25)", delay: 0, duration: 6 },
  { size: 60,  x: "85%", y: "20%", color: "rgba(255,68,102,0.3)", delay: 1.2, duration: 8 },
  { size: 80,  x: "75%", y: "65%", color: "rgba(68,221,255,0.2)", delay: 0.5, duration: 7 },
  { size: 40,  x: "12%", y: "70%", color: "rgba(255,221,51,0.2)", delay: 2, duration: 9 },
  { size: 180, x: "60%", y: "5%",  color: "rgba(204,68,255,0.12)", delay: 0.8, duration: 11 },
  { size: 30,  x: "30%", y: "80%", color: "rgba(255,68,102,0.25)", delay: 1.5, duration: 7 },
];

export default function HeroB() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating geometric shapes */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            background: s.color,
            filter: "blur(2px)",
            transform: i % 2 === 0 ? "rotate(45deg)" : undefined,
            borderRadius: i % 3 === 0 ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%",
          }}
          animate={{ y: [0, -20, 0], rotate: [0, i % 2 === 0 ? 45 : 0, i % 2 === 0 ? 90 : 360] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large blurred background circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 600,
          maxHeight: 600,
          left: "-10%",
          top: "20%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(204,68,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 500,
          maxHeight: 500,
          right: "-10%",
          bottom: "10%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,68,102,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        {/* Accent bar above eyebrow */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
          style={{ transformOrigin: "left" }}
        >
          <div className="flex gap-2 items-center justify-center">
            <div className="w-8 h-0.5" style={{ background: "var(--accent-cyan)" }} />
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Philadelphia · Est. 2025
            </span>
            <div className="w-8 h-0.5" style={{ background: "var(--accent-cyan)" }} />
          </div>
        </motion.div>

        {/* Main headline — Bebas Neue, massive */}
        <div className="relative mb-2">
          {/* Colored strip behind "HUMAN" */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 right-0 h-full pointer-events-none"
            style={{
              background: "var(--accent-purple)",
              opacity: 0.15,
              transformOrigin: "left",
              top: 0,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative block leading-none font-normal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 18vw, 14rem)",
              color: "var(--text-primary)",
              textShadow: "4px 4px 0px rgba(0,0,0,0.4)",
              letterSpacing: "0.02em",
            }}
          >
            HUMAN
          </motion.div>
        </div>

        <div className="relative mb-6">
          {/* Colored strip behind "WANNABES" */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 right-0 h-full pointer-events-none"
            style={{
              background: "var(--accent-red)",
              opacity: 0.18,
              transformOrigin: "left",
              top: 0,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative block leading-none font-normal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 18vw, 14rem)",
              color: "var(--text-primary)",
              textShadow: "4px 4px 0px rgba(0,0,0,0.4)",
              letterSpacing: "0.02em",
            }}
          >
            WANNABES
          </motion.div>
        </div>

        {/* Sub-label with colored dots */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center gap-3 md:gap-5 mb-10 md:mb-14"
        >
          {["Anime", "Game", "Vocaloid"].map((label, i) => (
            <span key={label} className="flex items-center gap-3 md:gap-5">
              <span
                className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase"
                style={{
                  color: [
                    "var(--accent-purple)",
                    "var(--accent-cyan)",
                    "var(--accent-red)",
                  ][i],
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {label}
              </span>
              {i < 2 && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
              )}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            style={{
              background: "var(--accent-red)",
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk)",
              border: "2px solid var(--accent-red)",
              boxShadow: "4px 4px 0px rgba(255,68,102,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(255,68,102,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(255,68,102,0.4)";
            }}
          >
            Upcoming Events
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              fontFamily: "var(--font-space-grotesk)",
              border: "2px solid var(--accent-purple)",
              boxShadow: "4px 4px 0px rgba(204,68,255,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px rgba(204,68,255,0.5)";
              (e.currentTarget as HTMLElement).style.background = "rgba(204,68,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px rgba(204,68,255,0.35)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Watch on YouTube
          </a>
        </motion.div>

        {/* Stats chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3 mt-10 md:mt-14"
        >
          {["60K+ Following", "300K+ Views", "100+ Avg Turnout"].map((stat) => (
            <span
              key={stat}
              className="px-4 py-1.5 text-xs tracking-widest uppercase"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
