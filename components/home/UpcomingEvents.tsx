import Link from "next/link";
import { events } from "@/data/events";
import { isPast, parseLocalDate } from "@/lib/utils";

const typeColors: Record<string, string> = {
  festival:  "rgba(204,17,51,0.9)",
  showcase:  "rgba(180,90,20,0.9)",
  concert:   "rgba(30,110,170,0.9)",
  collab:    "rgba(80,30,160,0.9)",
  gathering: "rgba(180,90,20,0.9)",
};

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

        <div className="flex flex-col gap-4 sm:gap-6">
          {upcoming.map((event) => {
            const date = parseLocalDate(event.date);
            const href = event.ticketUrl ?? event.detailsUrl ?? "/events";
            const isExternal = !!(event.ticketUrl || event.detailsUrl);

            return (
              <div
                key={event.id}
                className="hw-card hw-card-link flex flex-col sm:flex-row gap-5 md:gap-8 p-5 sm:p-7 md:p-10"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid rgba(204,17,51,0.18)",
                  position: "relative",
                }}
              >
                {/* Mobile: full-card link overlay */}
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="hw-mobile-overlay"
                  aria-label={event.title}
                />

                {/* Date */}
                <div className="flex-shrink-0 sm:w-24">
                  <span
                    className="block leading-none font-normal"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.6rem, 10vw, 3.4rem)", color: "var(--accent-red)" }}
                  >
                    {date.getDate()}
                  </span>
                  <span
                    className="block text-xs tracking-widest uppercase"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {date.toLocaleString("en-US", { month: "short" })} {date.getFullYear()}
                  </span>
                </div>

                <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(204,17,51,0.22)" }} />

                {/* Info + action */}
                <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
                  <div className="min-w-0">
                    <div className="flex flex-col items-start gap-2 mb-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-3">
                      <h3
                        className="font-normal leading-tight text-balance"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "clamp(1.45rem, 7.2vw, 2.2rem)",
                          color: "var(--text-primary)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {event.title}
                      </h3>
                      <span
                        className="text-[10px] sm:text-xs tracking-[0.13em] sm:tracking-[0.15em] uppercase px-2.5 py-1 flex-shrink-0"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          background: typeColors[event.type] ?? "rgba(204,17,51,0.9)",
                          color: "#fff",
                        }}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <p
                        className="text-[11px] sm:text-xs tracking-wide"
                        style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {event.venue !== "TBA" ? event.venue : "Venue TBA"}
                        {event.time && ` · ${event.time}`}
                      </p>
                      <span
                        className="inline-flex items-center justify-center min-w-[74px] text-[10px] sm:text-xs tracking-[0.07em] sm:tracking-[0.08em] uppercase px-2.5 sm:px-3 py-1.5 rounded-full whitespace-nowrap"
                        style={{
                          color: "var(--accent-red)",
                          border: "1px solid rgba(204,17,51,0.45)",
                          background: "rgba(204,17,51,0.08)",
                          fontFamily: "var(--font-space-grotesk)",
                        }}
                      >
                        {event.city}
                      </span>
                    </div>
                  </div>

                  {/* Desktop CTA button */}
                  {event.ticketUrl ? (
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hw-desktop-cta hw-btn-red text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.14em] md:tracking-[0.16em] uppercase px-4 sm:px-6 md:px-7 md:w-auto md:self-stretch md:ml-auto md:min-w-[160px] whitespace-nowrap leading-none"
                      style={{ background: "var(--accent-red)", color: "#fff", fontFamily: "var(--font-space-grotesk)", minHeight: "54px", alignItems: "center", justifyContent: "center" }}
                    >
                      Get Tickets
                    </a>
                  ) : event.detailsUrl ? (
                    <a
                      href={event.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hw-desktop-cta hw-btn-red text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.14em] md:tracking-[0.16em] uppercase px-4 sm:px-6 md:px-7 md:w-auto md:self-stretch md:ml-auto md:min-w-[160px] whitespace-nowrap leading-none"
                      style={{ background: "var(--accent-red)", color: "#fff", fontFamily: "var(--font-space-grotesk)", minHeight: "54px", alignItems: "center", justifyContent: "center" }}
                    >
                      Details
                    </a>
                  ) : event.comingSoon ? (
                    <span
                      className="hw-desktop-cta text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.14em] md:tracking-[0.16em] uppercase px-4 sm:px-6 md:px-7 md:w-auto md:self-stretch md:ml-auto md:min-w-[160px] whitespace-nowrap leading-none"
                      style={{ background: "#6b7280", color: "#fff", fontFamily: "var(--font-space-grotesk)", minHeight: "54px", alignItems: "center", justifyContent: "center" }}
                    >
                      More to come
                    </span>
                  ) : null}
                </div>
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
