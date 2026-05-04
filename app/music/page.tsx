import SoundCloudEmbed from "@/components/music/SoundCloudEmbed";
import SpotifyEmbed from "@/components/music/SpotifyEmbed";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Music" };

const SPOTIFY_TRACK_ID = "4LoBpreiTNb91E2SyXd13z";
const SPOTIFY_SINGLE_TRACK_ID = "3OSYK1qTsbpzLpHuwiOQv6";
const SOUNDCLOUD_PLAYER_URL =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2314372250&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export default function MusicPage() {
  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Discography"
        title="Listen"
        subtitle="Stream our music on Spotify and SoundCloud. More releases coming soon."
      />

      {/* Spotify embed */}
      <section className="hw-page-section">
        <div className="hw-page-container max-w-2xl">
          <ScrollReveal>
            <SpotifyEmbed trackId={SPOTIFY_SINGLE_TRACK_ID} title="Human Wannabes single on Spotify" />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 md:mt-10">
              <SpotifyEmbed trackId={SPOTIFY_TRACK_ID || undefined} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 md:mt-10">
              <SoundCloudEmbed playerUrl={SOUNDCLOUD_PLAYER_URL} title="Persona Battle Medley" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* More music note */}
      <section className="hw-page-section hw-page-section-surface">
        <div className="hw-page-container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
              <div>
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  More Coming Soon
                </p>
                <h2
                  className="font-normal leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Follow Us for New Releases
                </h2>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  We regularly upload new covers and original content on YouTube and Instagram.
                </p>
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht"
                target="_blank"
                rel="noopener noreferrer"
                className="hw-btn-ghost flex-shrink-0 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase px-6 py-3"
                style={{
                  border: "1px solid rgba(245,230,200,0.35)",
                  color: "var(--accent-cream)",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                Watch on YouTube -&gt;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
