"use client";

import Link from "next/link";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
            className="flex flex-col leading-none select-none"
            onClick={() => setOpen(false)}
          >
            <span
              className="text-xl md:text-2xl font-normal tracking-wider"
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
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
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
            <div className="hidden sm:flex items-center gap-4">
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
        className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300"
        style={{
          background: "var(--bg-base)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Top bar inside overlay */}
        <div
          className="flex items-center justify-between px-6 h-16 border-b flex-shrink-0"
          style={{ borderColor: "rgba(204,17,51,0.2)" }}
        >
          <span
            className="text-2xl"
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
        <div className="flex flex-col px-6 pt-10 gap-2 flex-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-4xl font-normal tracking-wider border-b"
              style={{
                fontFamily: "var(--font-bebas)",
                color: pathname === l.href ? "var(--accent-red)" : "var(--text-primary)",
                borderColor: "rgba(204,17,51,0.15)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social links at bottom */}
        <div
          className="flex items-center gap-6 px-6 py-8 border-t"
          style={{ borderColor: "rgba(204,17,51,0.2)" }}
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
        </div>
      </div>
    </>
  );
}
