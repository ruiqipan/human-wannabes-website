"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/video", label: "Video" },
  { href: "/music", label: "Music" },
  { href: "/photos", label: "Photos" },
];

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function NavStub() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-color)",
          fontFamily: "var(--font-space-grotesk)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-orbitron)" }}
        >
          Human Wannabes
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide uppercase transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social icons + mobile burger */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/humanwannabes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-100 opacity-60"
            style={{ color: "var(--text-primary)" }}
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-opacity hover:opacity-100 opacity-60"
            style={{ color: "var(--text-primary)" }}
          >
            <YoutubeIcon size={20} />
          </a>
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-primary)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "var(--bg-base)" }}
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col gap-1 px-6 pt-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-4 text-2xl font-semibold tracking-widest uppercase border-b"
                style={{
                  color: "var(--text-primary)",
                  borderColor: "var(--border-color)",
                  fontFamily: "var(--font-space-grotesk)",
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
