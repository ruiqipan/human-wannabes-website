import { events } from "@/data/events";
import { isPast, formatDate } from "@/lib/utils";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Events" };

const typeColors: Record<string, string> = {
  festival: "rgba(204,17,51,0.9)",
  showcase: "rgba(180,90,20,0.9)",
  concert:  "rgba(30,110,170,0.9)",
  collab:   "rgba(80,30,160,0.9)",
};

export default function EventsPage() {
  const upcoming = events
    .filter((e) => !isPast(e.date))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = events
    .filter((e) => isPast(e.date))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Schedule"
        title="Events"
        subtitle="Monthly shows, festivals, and conventions across Philadelphia."
      />

      <div className="hw-page-container hw-page-section">
        {/* Upcoming */}
        {upcoming.length > 0 && (
          <section className="mb-20 md:mb-28">
            <ScrollReveal>
              <h2
                className="text-xs tracking-[0.4em] uppercase mb-8"
                style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Upcoming
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              {upcoming.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 0.07}>
                  <div
                    className="hw-card flex flex-col sm:flex-row gap-6 md:gap-8 p-7 md:p-10"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid rgba(204,17,51,0.18)",
                    }}
                  >
                    {/* Date */}
                    <div className="flex-shrink-0 sm:w-24 text-center sm:text-left">
                      <span
                        className="block leading-none font-normal"
                        style={{ fontFamily: "var(--font-bebas)", fontSize: "3.4rem", color: "var(--accent-red)" }}
                      >
                        {new Date(event.date).getDate()}
                      </span>
                      <span
                        className="block text-xs tracking-widest uppercase"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {new Date(event.date).toLocaleString("en-US", { month: "short" })} {new Date(event.date).getFullYear()}
                      </span>
                    </div>

                    <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(204,17,51,0.22)" }} />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <h3
                          className="font-normal leading-tight"
                          style={{
                            fontFamily: "var(--font-bebas)",
                            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                            color: "var(--text-primary)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {event.title}
                        </h3>
                        <span
                        className="text-xs tracking-[0.15em] uppercase px-2.5 py-1 flex-shrink-0"
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            background: typeColors[event.type] ?? "rgba(204,17,51,0.9)",
                            color: "#fff",
                          }}
                        >
                          {event.type}
                        </span>
                      </div>
                      <p
                        className="text-xs tracking-wide mb-4"
                        style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {event.venue !== "TBA" ? `${event.venue} · ` : ""}{event.city}
                        {event.time && ` · ${event.time}`}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {event.description}
                      </p>
                      {event.ticketUrl && (
                        <a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hw-btn-red inline-block mt-5 text-xs tracking-[0.2em] uppercase px-6 py-3"
                          style={{
                            background: "var(--accent-red)",
                            color: "#fff",
                            fontFamily: "var(--font-space-grotesk)",
                          }}
                        >
                          Get Tickets
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Past */}
        {past.length > 0 && (
          <section>
            <ScrollReveal>
              <h2
                className="text-xs tracking-[0.4em] uppercase mb-8"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Past Events
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-0 border-t" style={{ borderColor: "rgba(204,17,51,0.12)" }}>
              {past.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 0.06}>
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-b"
                    style={{ borderColor: "rgba(204,17,51,0.12)" }}
                  >
                    <span
                      className="flex-shrink-0 text-sm w-36"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {formatDate(event.date)}
                    </span>
                    <span
                      className="flex-1 font-normal"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        color: "var(--text-primary)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {event.title}
                    </span>
                    <span
                      className="text-xs tracking-widest uppercase flex-shrink-0"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {event.city}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
