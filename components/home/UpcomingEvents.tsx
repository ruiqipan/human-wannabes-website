import Link from "next/link";
import { events } from "@/data/events";
import { isPast } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function UpcomingEvents() {
  const upcoming = events
    .filter((e) => !isPast(e.date))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  if (upcoming.length === 0) return null;

  return (
    <section
      className="py-32 md:py-44"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="hw-page-container">
        <div className="mb-12 md:mb-16">
          <ScrollReveal>
            <SectionHeading eyebrow="What's Next" title="Upcoming Events" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-7 md:mt-8">
              <Link
                href="/events"
                className="hw-view-all inline-flex items-center text-xs tracking-[0.28em] uppercase px-5 py-3"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-space-grotesk)",
                  border: "1px solid rgba(204,17,51,0.35)",
                  background: "rgba(31, 0, 13, 0.35)",
                }}
              >
                See All Events →
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          {upcoming.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.08}>
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 p-7 md:p-9"
                style={{
                  border: "1px solid rgba(204,17,51,0.2)",
                  background: "rgba(31, 0, 13, 0.55)",
                }}
              >
                {/* Date block */}
                <div className="flex-shrink-0 sm:w-24 flex flex-row sm:flex-col items-baseline sm:items-center gap-3 sm:gap-2 text-left sm:text-center">
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
                      color: "var(--accent-red)",
                      lineHeight: 1.0,
                    }}
                  >
                    {new Date(event.date).getDate()}
                  </span>
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {new Date(event.date).toLocaleString("en-US", { month: "short" })}
                    {" "}{new Date(event.date).getFullYear()}
                  </span>
                </div>

                {/* Vertical divider (desktop only) */}
                <div
                  className="hidden sm:block w-px h-20 flex-shrink-0"
                  style={{ background: "rgba(204,17,51,0.2)" }}
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {event.venue !== "TBA" ? `${event.venue} · ` : ""}{event.city}
                  </p>
                </div>

                {/* Type badge */}
                <span
                  className="self-start sm:self-center flex-shrink-0 text-xs tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{
                    color: "var(--accent-red)",
                    fontFamily: "var(--font-space-grotesk)",
                    border: "1px solid rgba(204,17,51,0.45)",
                    background: "rgba(204,17,51,0.08)",
                  }}
                >
                  {event.type}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
