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
            className="flex max-w-[calc(100vw-8.5rem)] flex-col leading-none select-none"
            onClick={() => setOpen(false)}
          >
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
        </div>
      </div>
    </>
  );
}
