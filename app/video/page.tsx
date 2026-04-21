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
              Featured Videos
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              "https://www.youtube-nocookie.com/embed/B1Mjd_vo0ts",
              "https://www.youtube-nocookie.com/embed/qUiRgRRI-Xg",
              "https://www.youtube-nocookie.com/embed/buF08W_ThU4",
            ].map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.08}>
                <div
                  className="overflow-hidden"
                  style={{ border: "1px solid rgba(204,17,51,0.18)", background: "var(--bg-elevated)" }}
                >
                  <div className="relative w-full aspect-video min-h-[180px]">
                    <iframe
                      src={src}
                      title={`Featured YouTube video ${i + 1}`}
                      className="absolute inset-0 block h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
