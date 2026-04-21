"use client";

import { motion } from "framer-motion";

export default function HeroC() {
  return (
    <section
      className="noise-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Diagonal red slash — the main graphic element */}
      <motion.div
        className="slash-in absolute pointer-events-none"
        style={{
          width: "min(900px, 130vw)",
          height: "min(320px, 45vw)",
          background: "var(--accent-red)",
          transform: "skewY(-6deg)",
          top: "50%",
          left: "-5%",
          marginTop: "-100px",
          zIndex: 0,
          opacity: 0.92,
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1, transformOrigin: "left" }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Secondary darker slash for depth */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "min(700px, 100vw)",
          height: "min(200px, 30vw)",
          background: "rgba(180, 0, 30, 0.6)",
          transform: "skewY(-6deg)",
          top: "50%",
          left: "-5%",
          marginTop: "-50px",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1, transformOrigin: "left" }}
        transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Ink splatter dots — textural elements */}
      {[
        { x: "5%",  y: "12%", size: 6 },
        { x: "92%", y: "18%", size: 4 },
        { x: "88%", y: "75%", size: 8 },
        { x: "7%",  y: "82%", size: 5 },
        { x: "50%", y: "6%",  size: 3 },
        { x: "95%", y: "50%", size: 4 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
            background: "var(--accent-red)",
            opacity: 0.5,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.07 }}
        />
      ))}

      {/* Thin vertical lines — editorial texture */}
      <div
        className="absolute left-8 md:left-16 top-24 bottom-24 w-px pointer-events-none opacity-20"
        style={{ background: "var(--accent-cream)" }}
      />
      <div
        className="absolute right-8 md:right-16 top-24 bottom-24 w-px pointer-events-none opacity-10"
        style={{ background: "var(--accent-cream)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start text-left max-w-5xl w-full">
        {/* Eyebrow — stacked editorial style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-1 mb-6"
        >
          <span
            className="text-xs tracking-[0.5em] uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Philadelphia · Est. 2025
          </span>
          <div
            className="w-16 h-0.5"
            style={{ background: "var(--accent-red)" }}
          />
        </motion.div>

        {/* Main headline — massive Bebas Neue, white over the red slash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative leading-none"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block font-normal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 17vw, 13rem)",
              color: "var(--text-primary)",
              letterSpacing: "0.01em",
              lineHeight: 0.9,
            }}
          >
            HUMAN
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="block font-normal"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 17vw, 13rem)",
              color: "var(--accent-cream)",
              letterSpacing: "0.01em",
              lineHeight: 0.9,
            }}
          >
            WANNABES
          </motion.div>
        </motion.div>

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 mb-10 md:mb-12 text-sm md:text-base tracking-[0.3em] uppercase"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          Anime · Game · Vocaloid Cover Band
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 min-h-[48px]"
            style={{
              background: "var(--accent-red)",
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-red-bright)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-red)";
            }}
          >
            Upcoming Events
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 min-h-[48px]"
            style={{
              background: "transparent",
              color: "var(--accent-cream)",
              fontFamily: "var(--font-space-grotesk)",
              border: "1px solid rgba(245,230,200,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cream)";
              (e.currentTarget as HTMLElement).style.background = "rgba(245,230,200,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,230,200,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Watch on YouTube
          </a>
        </motion.div>

        {/* Bottom sponsor line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 md:mt-20 text-xs tracking-[0.35em] uppercase"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Supported by Xvive · NUX · Mackie
        </motion.p>
      </div>
    </section>
  );
}
