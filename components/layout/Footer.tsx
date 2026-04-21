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

function DiscordIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.775-.552 1.124a18.27 18.27 0 0 0-5.169 0 11.64 11.64 0 0 0-.56-1.124 19.736 19.736 0 0 0-4.438 1.372C2.358 8.57 1.596 12.664 1.977 16.706a19.935 19.935 0 0 0 5.304 2.709c.43-.585.814-1.208 1.142-1.864a13.088 13.088 0 0 1-1.798-.861c.151-.111.299-.227.44-.347 3.47 1.63 7.235 1.63 10.664 0 .143.12.291.236.44.347a13.06 13.06 0 0 1-1.801.861c.328.656.712 1.279 1.142 1.864a19.879 19.879 0 0 0 5.31-2.709c.447-4.684-.763-8.744-3.503-12.337Zm-10.77 9.872c-1.037 0-1.887-.948-1.887-2.11 0-1.162.832-2.11 1.887-2.11 1.064 0 1.905.957 1.887 2.11 0 1.162-.832 2.11-1.887 2.11Zm4.907 0c-1.037 0-1.887-.948-1.887-2.11 0-1.162.832-2.11 1.887-2.11 1.064 0 1.905.957 1.887 2.11 0 1.162-.823 2.11-1.887 2.11Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="mt-16 md:mt-24 lg:mt-28"
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
              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hw-link flex items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                <DiscordIcon />
                Discord
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
            Built by Ricky Pan
          </p>
        </div>
      </div>
    </footer>
  );
}
