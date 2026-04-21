import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { youtubePlaylistId, socialLinks } from "@/data/band-info";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Video" };

export default function VideoPage() {
  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Portfolio"
        title="Watch"
        subtitle="Our full video portfolio - live performances, music videos, and event recaps."
      />

      {/* Main embed */}
      <section className="hw-page-section">
        <div className="hw-page-container">
          <ScrollReveal>
            <YouTubeEmbed playlistId={youtubePlaylistId} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p
                className="text-sm leading-relaxed max-w-lg"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Watch our live performances, event recaps, and commissioned music videos — including our work for Persona 5: The Phantom X.
              </p>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hw-btn-red flex-shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase px-6 py-3"
                style={{ background: "var(--accent-red)", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}
              >
                View Full Playlist →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured credits */}
      <section
        className="hw-page-section hw-page-section-surface"
      >
        <div className="hw-page-container">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Featured Work
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Persona 5: The Phantom X",
                desc: "Official music video commissioned for the Persona 5 mobile title.",
                tag: "Music Video",
              },
              {
                title: "Anime Otapia 2025",
                desc: "Live performance highlights from Philadelphia's premier anime convention.",
                tag: "Live",
              },
              {
                title: "Cherry Blossom Festival",
                desc: "Spring 2025 — full set performance in Fairmount Park.",
                tag: "Live",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div
                  className="p-7 md:p-8"
                  style={{ border: "1px solid rgba(204,17,51,0.18)", background: "var(--bg-elevated)" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-normal leading-tight"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "1.4rem",
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-xs tracking-[0.15em] uppercase px-2 py-0.5 flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        color: "var(--accent-red)",
                        border: "1px solid rgba(204,17,51,0.4)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
