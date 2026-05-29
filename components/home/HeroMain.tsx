"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { heroBackgroundImageCandidates, socialLinks } from "@/data/band-info";

export default function HeroMain() {
  const heroBackgroundImage = heroBackgroundImageCandidates[0];
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  return (
    <section
      className="noise-bg relative min-h-[72svh] md:min-h-[78svh] flex flex-col overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
      style={{ background: "var(--bg-base)", paddingTop: "clamp(5.5rem, 9vw, 8rem)" }}
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
            style={{ objectPosition: "center 24%", opacity: 0.95 }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,0,5,0.22) 0%, rgba(10,0,5,0.34) 35%, rgba(10,0,5,0.62) 100%)",
            }}
          />
        </>
      )}

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
      <div className="relative z-10 w-full hw-page-container flex-1 flex flex-col justify-center pb-16 md:pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-7 md:mb-9"
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
        <div className="overflow-hidden mb-10 md:mb-12">
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.9rem, 11.4vw, 8.75rem)",
              color: "var(--accent-cream)",
              letterSpacing: "0.01em",
              lineHeight: 0.92,
              whiteSpace: "nowrap",
            }}
          >
            HUMAN WANNABES
          </motion.div>
        </div>

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase"
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
          style={{ marginTop: "3.5rem" }}
        >
          <Link
            href="/events"
            className="hw-btn-red inline-flex h-14 w-full items-center justify-center whitespace-nowrap border border-[var(--accent-red)] bg-[var(--accent-red)] px-5 text-center text-xs font-semibold uppercase leading-none tracking-[0.18em] text-white sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-sm sm:tracking-widest md:min-w-[220px] md:bg-white md:px-9 md:text-[var(--accent-red)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Event Schedule
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
          <button
            type="button"
            onClick={() => setIsWeChatOpen(true)}
            className="hw-btn-ghost inline-flex h-14 w-full items-center justify-center whitespace-nowrap border px-5 text-center text-xs font-semibold uppercase leading-none tracking-[0.18em] text-[var(--accent-cream)] sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-sm sm:tracking-widest md:min-w-[220px] md:border-[var(--accent-red)] md:bg-white md:text-[var(--accent-red)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Join WeChat
          </button>
        </motion.div>
      </div>

      {isWeChatOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wechat-dialog-title"
          onClick={() => setIsWeChatOpen(false)}
        >
          <div
            className="w-full max-w-[360px] border border-[rgba(245,230,200,0.22)] bg-[var(--bg-surface)] p-5 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="wechat-dialog-title"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-cream)]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Join WeChat
            </h2>
            <div className="mt-5 overflow-hidden bg-white p-3">
              <Image
                src="/photos/wechat-qr.jpg"
                alt="WeChat QR code for Dr-Haz"
                width={700}
                height={700}
                className="h-auto w-full"
                unoptimized
              />
            </div>
            <p
              className="mt-5 text-sm leading-6 text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Add Dr-Haz as a contact to join the audience group chat.
            </p>
            <button
              type="button"
              onClick={() => setIsWeChatOpen(false)}
              className="mt-5 inline-flex h-11 w-full items-center justify-center border border-[var(--accent-red)] bg-[var(--accent-red)] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
