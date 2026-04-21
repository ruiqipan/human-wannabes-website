"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { heroBackgroundImageCandidates, socialLinks } from "@/data/band-info";

export default function HeroMain() {
  const heroBackgroundImage = heroBackgroundImageCandidates[0];

  return (
    <section
      className="noise-bg relative min-h-[100svh] flex flex-col justify-center overflow-hidden py-24 md:py-28"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Optional background image behind hero graphics/text */}
      {heroBackgroundImage && (
        <>
          <Image
            src={heroBackgroundImage}
            alt=""
            fill
            sizes="100vw"
            unoptimized
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: "center 24%", opacity: 0.34 }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,0,5,0.45) 0%, rgba(10,0,5,0.55) 35%, rgba(10,0,5,0.78) 100%)",
            }}
          />
        </>
      )}

      {/* Diagonal red slash */}
      <motion.div
        className="absolute pointer-events-none w-[min(1100px,140vw)] h-[45svh] max-h-[340px] md:h-[52vw] md:max-h-[360px]"
        style={{
          background: "var(--accent-red)",
          transform: "skewY(-6deg)",
          top: "50%",
          left: "-5%",
          marginTop: "-120px",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Depth slash */}
      <motion.div
        className="absolute pointer-events-none w-[min(800px,110vw)] h-[39svh] max-h-[265px] md:h-[33vw] md:max-h-[210px]"
        style={{
          background: "rgba(155, 0, 22, 0.65)",
          transform: "skewY(-6deg)",
          top: "50%",
          left: "-5%",
          marginTop: "-45px",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Ink accent dots */}
      {[
        { x: "5%",  y: "10%", s: 6 },
        { x: "92%", y: "17%", s: 4 },
        { x: "87%", y: "76%", s: 8 },
        { x: "7%",  y: "83%", s: 5 },
        { x: "52%", y: "5%",  s: 3 },
        { x: "95%", y: "50%", s: 4 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: d.s, height: d.s, left: d.x, top: d.y, background: "var(--accent-red)", opacity: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 + i * 0.07 }}
        />
      ))}

      {/* Vertical editorial lines */}
      <div
        className="absolute left-8 md:left-16 top-24 bottom-24 w-px pointer-events-none"
        style={{ background: "var(--accent-cream)", opacity: 0.12 }}
      />
      <div
        className="absolute right-8 md:right-16 top-24 bottom-24 w-px pointer-events-none"
        style={{ background: "var(--accent-cream)", opacity: 0.07 }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full hw-page-container">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 md:mb-12"
        >
          <span
            className="block text-xs tracking-[0.5em] uppercase mb-3"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Philadelphia · Est. 2025
          </span>
          <div className="w-12 h-px" style={{ background: "var(--accent-red)" }} />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2 md:mb-3">
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 17vw, 13rem)",
              color: "var(--text-primary)",
              letterSpacing: "0.01em",
              lineHeight: 0.92,
            }}
          >
            HUMAN
          </motion.div>
        </div>
        <div className="overflow-hidden mb-10 md:mb-12">
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 17vw, 13rem)",
              color: "var(--accent-cream)",
              letterSpacing: "0.01em",
              lineHeight: 0.92,
            }}
          >
            WANNABES
          </motion.div>
        </div>

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-12 md:mb-14"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Anime · Game · Vocaloid Cover Band
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex w-full max-w-[390px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:flex-nowrap md:items-center md:gap-4"
        >
          <Link
            href="/events"
            className="hw-btn-red inline-flex h-14 w-full items-center justify-center whitespace-nowrap border border-[var(--accent-red)] bg-[var(--accent-red)] px-5 text-center text-xs font-semibold uppercase leading-none tracking-[0.18em] text-white sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-sm sm:tracking-widest md:min-w-[220px] md:bg-white md:px-9 md:text-[var(--accent-red)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Upcoming Events
          </Link>
          <a
            href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
            target="_blank"
            rel="noopener noreferrer"
            className="hw-btn-ghost inline-flex h-14 w-full items-center justify-center whitespace-nowrap border px-5 text-center text-xs font-semibold uppercase leading-none tracking-[0.18em] text-[var(--accent-cream)] sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-sm sm:tracking-widest md:min-w-[220px] md:border-[var(--accent-red)] md:bg-white md:text-[var(--accent-red)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Watch on YouTube
          </a>
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hw-btn-ghost inline-flex h-14 w-full items-center justify-center whitespace-nowrap border px-5 text-center text-xs font-semibold uppercase leading-none tracking-[0.18em] text-[var(--accent-cream)] sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-sm sm:tracking-widest md:min-w-[220px] md:border-[var(--accent-red)] md:bg-white md:text-[var(--accent-red)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Join Discord
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10"
          style={{ background: "var(--accent-red)" }}
        />
      </motion.div>
    </section>
  );
}
