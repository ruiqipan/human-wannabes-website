import Link from "next/link";
import { socialLinks } from "@/data/band-info";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/video", label: "Video" },
  { href: "/music", label: "Music" },
  { href: "/photos", label: "Photos" },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="mt-10 md:mt-14"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid rgba(204,17,51,0.2)",
      }}
    >
      <div className="hw-page-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-4xl font-normal tracking-wider"
                style={{ fontFamily: "var(--font-bebas)", color: "var(--text-primary)" }}
              >
                Human
                <br />
                Wannabes
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-7"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Anime · Game · Vocaloid cover band
              <br />
              based in Philadelphia, PA.
            </p>
            <div className="flex gap-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hw-link flex items-center gap-2 text-xs tracking-widest uppercase"
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
                className="hw-link flex items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                <YouTubeIcon />
                YouTube
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-7"
              style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Navigate
            </p>
            <div className="flex flex-col gap-4">
              {siteLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hw-link text-sm tracking-wide"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(204,17,51,0.15)" }}>
        <div className="hw-page-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            © 2026 Human Wannabes
          </p>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Philadelphia, PA
          </p>
        </div>
      </div>
    </footer>
  );
}
