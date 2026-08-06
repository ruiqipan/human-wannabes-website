"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { socialLinks } from "@/data/band-info";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/video", label: "Video" },
  { href: "/music", label: "Music" },
  { href: "/photos", label: "Photos" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.775-.552 1.124a18.27 18.27 0 0 0-5.169 0 11.64 11.64 0 0 0-.56-1.124 19.736 19.736 0 0 0-4.438 1.372C2.358 8.57 1.596 12.664 1.977 16.706a19.935 19.935 0 0 0 5.304 2.709c.43-.585.814-1.208 1.142-1.864a13.088 13.088 0 0 1-1.798-.861c.151-.111.299-.227.44-.347 3.47 1.63 7.235 1.63 10.664 0 .143.12.291.236.44.347a13.06 13.06 0 0 1-1.801.861c.328.656.712 1.279 1.142 1.864a19.879 19.879 0 0 0 5.31-2.709c.447-4.684-.763-8.744-3.503-12.337Zm-10.77 9.872c-1.037 0-1.887-.948-1.887-2.11 0-1.162.832-2.11 1.887-2.11 1.064 0 1.905.957 1.887 2.11 0 1.162-.832 2.11-1.887 2.11Zm4.907 0c-1.037 0-1.887-.948-1.887-2.11 0-1.162.832-2.11 1.887-2.11 1.064 0 1.905.957 1.887 2.11 0 1.162-.823 2.11-1.887 2.11Z" />
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.5 4C4.8 4 1 7.1 1 10.9c0 2.2 1.3 4.2 3.4 5.5L3.5 19l3.1-1.5c.9.2 1.9.4 2.9.4h.4a6 6 0 0 1-.4-2.2c0-3.7 3.5-6.8 7.9-7.1C16.2 5.9 13.1 4 9.5 4Zm-3 4.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm6 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      <path d="M23 15.7c0-3.3-3.2-6-7.1-6s-7.1 2.7-7.1 6 3.2 6 7.1 6c.8 0 1.6-.1 2.4-.3l2.6 1.3-.7-2.2c1.7-1.1 2.8-2.8 2.8-4.8Zm-9.5-1.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm5 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
    </svg>
  );
}

function RedNoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 377.97 376.53" fill="currentColor" aria-hidden="true">
      <path d="M43.86 1.11C21.81 5.7 3.59 22.91 1.34 46.07c-2.33 23.92 0 49.25 0 73.3V268.9c0 27.5-6.94 64.79 10.75 87.96 19.11 25.02 53.98 19.06 81.6 19.06h214.03c8.48 0 18.08 1.24 26.39-.49 22.05-4.59 40.26-21.8 42.51-44.96 2.33-23.92 0-49.25 0-73.3V107.64c0-27.5 6.94-64.79-10.75-87.96C346.76-5.34 311.89.62 284.27.62H70.24c-8.48 0-18.08-1.24-26.39.49m133.4 132.91L167 161.87h17.59l-14.66 35.18 13.19 1.47c-1.45 3.93-3.4 11.34-6.35 14.42-2.17 2.26-5.48 1.71-8.31 1.71-6.39 0-19.3 2.65-22.72-4.4-1.57-3.23.68-7.31 1.95-10.26 2.66-6.17 6.19-12.48 7.57-19.06-3.19 0-7.22.63-10.26-.49-11.4-4.19 1.28-22.52 3.91-28.83 1.85-4.43 4.04-14.05 8.06-16.86 5.65-3.94 14.24-1.21 20.28-.73M61.45 226.38c4.03 0 10.02 1.2 12.46-2.93 2.59-4.39.73-14.06.73-19.06v-48.38c0-4.53-2.29-18.38 1.71-21.26 3.29-2.37 17.1-1.87 18.57 2.2 2.4 6.66.24 17.83.24 24.92v46.91c0 8.04 1.39 17.39-1.95 24.92-3.19 7.18-18.04 13.59-25.41 8.06-3.24-2.43-5.55-11.6-6.35-15.39m222.82-92.36v7.33c5.47 0 12.33-1.12 17.59.49 17.56 5.36 16.13 22.61 16.13 37.63 2.93 0 5.93-.23 8.8.49 16.85 4.21 14.66 21.06 14.66 34.69 0 7.27 1.36 15.86-3.42 21.99-5.27 6.75-13.9 5.86-21.5 5.86-2.36 0-6.25.75-8.31-.73-3.85-2.77-5.54-11-6.35-15.39 4.82 0 13.51 1.65 17.35-1.95 4.52-4.25 2.67-20.86-2.69-23.7-2.84-1.5-7.16-.73-10.26-.73h-21.99v42.51h-20.52v-42.51h-20.52v-20.52h20.52v-17.59h-13.19v-20.52h13.19v-7.33h20.52m-46.91 7.33v20.52h-11.73v61.57h19.06v19.06h-67.43l7.82-18.32 18.57-.73v-61.57h-11.73v-20.52h45.44m83.56 20.53c0-4.17-.76-9.17.49-13.19 4.9-15.82 28.76-3.07 16.86 10.02-1.35 1.49-3.73 2.22-5.62 2.69-3.75.94-7.89.49-11.73.49m-259.47 0-6.11 54.24-10.02 17.59-8.8-23.46 4.4-48.38h20.52m67.43 0 4.4 48.38-8.8 21.99h-2.93c-7.87-12.46-8.87-25.31-10.26-39.58-.99-10.14-2.93-20.58-2.93-30.78h20.52m155.39 0v17.59h13.19v-17.59h-13.19m-109.95 61.57-7.33 19.06h-32.25l7.82-19.79 11.24.24 20.52.49Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const [isRedNoteOpen, setIsRedNoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open || isWeChatOpen || isRedNoteOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, isWeChatOpen, isRedNoteOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 64,
          background: scrolled
            ? "rgba(10, 0, 5, 0.95)"
            : "rgba(10, 0, 5, 0.0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(204, 17, 51, 0.2)"
            : "none",
        }}
      >
        <div className="h-full hw-page-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex max-w-[calc(100vw-8.5rem)] items-center gap-2.5 leading-none select-none sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/photos/hw-simp-logo-white.png"
              alt=""
              width={6000}
              height={6000}
              className="h-11 w-11 flex-shrink-0 object-contain object-center sm:h-12 sm:w-12"
              unoptimized
              aria-hidden
            />
            <span className="flex min-w-0 flex-col">
              <span
                className="truncate text-base sm:text-xl md:text-2xl font-normal tracking-[0.06em] sm:tracking-wider"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--text-primary)" }}
              >
                Human Wannabes
              </span>
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--accent-red)", fontSize: "0.6rem" }}
              >
                Philadelphia
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-xs tracking-[0.2em] uppercase transition-colors duration-200 py-1"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ background: "var(--accent-red)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Social + hamburger */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-200 opacity-50 hover:opacity-100"
                style={{ color: "var(--text-primary)" }}
              >
                <InstagramIcon />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-all duration-200 opacity-50 hover:opacity-100"
                style={{ color: "var(--text-primary)" }}
              >
                <YouTubeIcon />
              </a>
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="transition-all duration-200 opacity-50 hover:opacity-100"
                style={{ color: "var(--text-primary)" }}
              >
                <DiscordIcon />
              </a>
              <button
                type="button"
                onClick={() => setIsWeChatOpen(true)}
                aria-label="WeChat"
                className="transition-all duration-200 opacity-50 hover:opacity-100"
                style={{ color: "var(--text-primary)" }}
              >
                <WeChatIcon />
              </button>
              <button
                type="button"
                onClick={() => setIsRedNoteOpen(true)}
                aria-label="RedNote"
                className="transition-all duration-200 opacity-50 hover:opacity-100"
                style={{ color: "var(--text-primary)" }}
              >
                <RedNoteIcon />
              </button>
            </div>
            <button
              className="md:hidden flex items-center justify-center w-11 h-11"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{ color: "var(--text-primary)" }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className="fixed inset-0 z-[60] flex flex-col md:hidden transition-all duration-300"
        style={{
          background: "var(--bg-base)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Top bar inside overlay */}
        <div
          className="flex items-center justify-between px-6 sm:px-8 h-16 border-b flex-shrink-0"
          style={{
            borderColor: "rgba(204,17,51,0.2)",
            paddingLeft: "max(1.5rem, calc(env(safe-area-inset-left) + 1rem))",
            paddingRight: "max(1.5rem, calc(env(safe-area-inset-right) + 1rem))",
          }}
        >
          <span
            className="max-w-[calc(100vw-9rem)] truncate text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text-primary)" }}
          >
            Human Wannabes
          </span>
          <button
            className="flex items-center justify-center w-11 h-11"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ color: "var(--text-primary)" }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex flex-col pt-10 gap-2 flex-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b px-6 sm:px-8 py-4 text-4xl font-normal tracking-wider"
              style={{
                fontFamily: "var(--font-bebas)",
                color: pathname === l.href ? "var(--accent-red)" : "var(--text-primary)",
                borderColor: "rgba(204,17,51,0.15)",
                paddingLeft: "max(1.5rem, calc(env(safe-area-inset-left) + 1rem))",
                paddingRight: "max(1.5rem, calc(env(safe-area-inset-right) + 1rem))",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social links at bottom */}
        <div
          className="flex items-center gap-6 px-6 sm:px-8 py-8 border-t"
          style={{
            borderColor: "rgba(204,17,51,0.2)",
            paddingLeft: "max(1.5rem, calc(env(safe-area-inset-left) + 1rem))",
            paddingRight: "max(1.5rem, calc(env(safe-area-inset-right) + 1rem))",
          }}
        >
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            <YouTubeIcon />
            YouTube
          </a>
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            <DiscordIcon />
            Discord
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setIsWeChatOpen(true);
            }}
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            <WeChatIcon />
            WeChat
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setIsRedNoteOpen(true);
            }}
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            <RedNoteIcon />
            RedNote
          </button>
        </div>
      </div>

      {isWeChatOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="navbar-wechat-dialog-title"
          onClick={() => setIsWeChatOpen(false)}
        >
          <div
            className="w-full max-w-[360px] border border-[rgba(245,230,200,0.22)] bg-[var(--bg-surface)] p-5 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="navbar-wechat-dialog-title"
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

      {isRedNoteOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="navbar-rednote-dialog-title"
          onClick={() => setIsRedNoteOpen(false)}
        >
          <div
            className="w-full max-w-[360px] border border-[rgba(245,230,200,0.22)] bg-[var(--bg-surface)] p-5 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="navbar-rednote-dialog-title"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-cream)]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Follow on RedNote
            </h2>
            <div className="mt-5 overflow-hidden bg-white p-3">
              <Image
                src="/photos/rednote-qr.jpg"
                alt="RedNote profile QR code"
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
              Scan the QR code to follow Human Wannabes on RedNote.
            </p>
            <button
              type="button"
              onClick={() => setIsRedNoteOpen(false)}
              className="mt-5 inline-flex h-11 w-full items-center justify-center border border-[var(--accent-red)] bg-[var(--accent-red)] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
