"use client";

import { motion } from "framer-motion";

const words = ["HUMAN", "WANNABES"];

export default function HeroA() {
  return (
    <section
      className="scanlines relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Animated radial glow behind headline */}
      <div
        className="glow-bg absolute pointer-events-none"
        style={{
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(255,45,85,0.18) 0%, rgba(123,47,255,0.10) 45%, transparent 70%)",
          filter: "blur(40px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* Secondary glow bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(191,90,242,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          bottom: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 md:mb-8"
          style={{
            color: "var(--accent-purple)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          Philadelphia · Est. 2025
        </motion.p>

        {/* Main headline — staggered word reveal */}
        <div
          className="overflow-hidden mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {words.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block leading-none font-black"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 10rem)",
                color: "var(--text-primary)",
                textShadow: "var(--glow-red)",
                letterSpacing: "-0.02em",
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base tracking-[0.35em] uppercase mt-4 mb-10 md:mb-14"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          Anime&nbsp;&nbsp;·&nbsp;&nbsp;Game&nbsp;&nbsp;·&nbsp;&nbsp;Vocaloid
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            style={{
              border: "1.5px solid var(--accent-red)",
              color: "var(--accent-red)",
              fontFamily: "var(--font-space-grotesk)",
              boxShadow: "0 0 16px rgba(255,45,85,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,45,85,0.12)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--glow-red)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 16px rgba(255,45,85,0.3)";
            }}
          >
            Upcoming Events
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            style={{
              background: "var(--accent-purple)",
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--glow-purple)";
              (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
            }}
          >
            Watch on YouTube
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: "var(--accent-purple)" }}
          />
        </motion.div>
      </div>

      {/* Corner accent lines */}
      <div
        className="absolute top-20 left-6 md:left-12 pointer-events-none"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-12 h-px"
          style={{ background: "var(--accent-red)" }}
        />
        <div
          className="w-px h-12"
          style={{ background: "var(--accent-red)" }}
        />
      </div>
      <div
        className="absolute top-20 right-6 md:right-12 pointer-events-none flex flex-col items-end"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-12 h-px"
          style={{ background: "var(--accent-purple)" }}
        />
        <div
          className="w-px h-12 self-end"
          style={{ background: "var(--accent-purple)" }}
        />
      </div>
    </section>
  );
}
