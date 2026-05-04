import Link from "next/link";
import { events } from "@/data/events";
import { isPast, parseLocalDate } from "@/lib/utils";

function stripVenueFromTitle(title: string, venue: string) {
  return title.replace(new RegExp(`\\s*@\\s*${venue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"), "");
}

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

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {upcoming.map((event) => {
            const date = parseLocalDate(event.date);
            const title = stripVenueFromTitle(event.title, event.venue);
            const href = event.ticketUrl ?? event.detailsUrl ?? "/events";

            return (
              <div
                key={event.id}
                className="hw-card"
                style={{
                  border: "1px solid rgba(204,17,51,0.28)",
                  background: "rgba(10,0,5,0.58)",
                  display: "grid",
                  gridTemplateColumns: "auto 1px 1fr auto",
                  alignItems: "center",
                  gap: "0 1.75rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                {/* Date */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "3.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      color: "var(--accent-red)",
                      lineHeight: 0.9,
                    }}
                  >
                    {date.getDate()}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.2em]"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)", marginTop: "0.4rem" }}
                  >
                    {date.toLocaleString("en-US", { month: "short" })}
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: "3.5rem", background: "rgba(204,17,51,0.22)" }} />

                {/* Title + meta */}
                <div style={{ minWidth: 0 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {title}
                  </h2>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                    {event.venue !== "TBA" && (
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {event.venue}
                      </span>
                    )}
                    <span
                      className="text-xs uppercase tracking-[0.08em]"
                      style={{
                        color: "var(--accent-red)",
                        border: "1px solid rgba(204,17,51,0.45)",
                        background: "rgba(204,17,51,0.08)",
                        fontFamily: "var(--font-space-grotesk)",
                        padding: "0.2rem 0.6rem",
                      }}
                    >
                      {event.city}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={href}
                  target={event.ticketUrl || event.detailsUrl ? "_blank" : undefined}
                  rel={event.ticketUrl || event.detailsUrl ? "noopener noreferrer" : undefined}
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "2.75rem",
                    padding: "0 1.25rem",
                    border: "1px solid rgba(245,230,200,0.45)",
                    color: "var(--accent-cream)",
                    fontFamily: "var(--font-space-grotesk)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {event.ticketUrl ? "Get Tickets" : event.detailsUrl ? "Details" : "Info"}
                </a>
              </div>
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
