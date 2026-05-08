import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";
import { isPast, parseLocalDate, formatDate } from "@/lib/utils";

const DEFAULT_POSTER = "/photos/hw.png";

export default function UpcomingEvents() {
  const upcoming = events
    .filter((e) => !isPast(e.date))
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime())
    .slice(0, 3);

  if (upcoming.length === 0) return null;

  return (
    <section style={{ background: "var(--bg-base)", paddingBlock: "clamp(2rem, 4vw, 3.5rem)" }}>
      <div className="hw-page-container">
        <div style={{ marginBottom: "1.5rem" }}>
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)", marginBottom: "1.25rem" }}
          >
            Upcoming Events
          </p>
          <div className="h-px w-12" style={{ background: "var(--accent-red)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {upcoming.map((event) => {
            const linkUrl = event.ticketUrl ?? event.detailsUrl ?? "/events";
            const isExternal = !!(event.ticketUrl || event.detailsUrl);
            const cardStyle: React.CSSProperties = {
              border: "1px solid rgba(204,17,51,0.18)",
            };

            const inner = (
              <>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={event.posterUrl ?? DEFAULT_POSTER}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div
                  className="px-5 pt-4 pb-5 flex flex-col"
                  style={{
                    borderTop: "1px solid rgba(204,17,51,0.2)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.18em] uppercase"
                    style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)", marginBottom: "3px" }}
                  >
                    {formatDate(event.date)}
                    {event.time ? ` · ${event.time}` : ""}
                  </p>
                  <h3
                    className="font-normal leading-tight"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(1.5rem, 3.5vw, 1.9rem)",
                      color: "var(--text-primary)",
                      letterSpacing: "0.03em",
                      marginBottom: "4px",
                    }}
                  >
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <p
                      className="text-xs tracking-wide"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {event.venue !== "TBA" ? event.venue : "Venue TBA"}
                    </p>
                    <span
                      className="text-xs tracking-[0.08em] uppercase rounded-full"
                      style={{
                        color: "var(--accent-red)",
                        border: "1px solid rgba(204,17,51,0.4)",
                        background: "rgba(204,17,51,0.07)",
                        fontFamily: "var(--font-space-grotesk)",
                        padding: "2px 12px",
                      }}
                    >
                      {event.city}
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <a
                key={event.id}
                href={linkUrl}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group block hw-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                style={cardStyle}
              >
                {inner}
              </a>
            );
          })}
        </div>

        <div style={{ marginTop: "1.25rem", textAlign: "right" }}>
          <Link
            href="/events"
            className="hw-view-all text-xs uppercase tracking-[0.25em]"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
