import Link from "next/link";
import { events } from "@/data/events";
import { isPast, parseLocalDate } from "@/lib/utils";

function stripVenueFromTitle(title: string, venue: string) {
  return title.replace(new RegExp(`\\s*@\\s*${venue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"), "");
}

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

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {upcoming.map((event) => {
            const date = parseLocalDate(event.date);
            const title = stripVenueFromTitle(event.title, event.venue);
            const href = event.ticketUrl ?? event.detailsUrl ?? "/events";
            const isExternal = !!(event.ticketUrl || event.detailsUrl);

            return (
              <div key={event.id}>
                {/* Mobile: compact full-card link */}
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="grid md:hidden hw-card hw-card-link"
                  style={{
                    border: "1px solid rgba(204,17,51,0.28)",
                    background: "rgba(10,0,5,0.58)",
                    gridTemplateColumns: "auto 1px 1fr",
                    alignItems: "center",
                    gap: "0 1.25rem",
                    padding: "1.25rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "2.25rem" }}>
                    <span style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "var(--accent-red)", lineHeight: 0.9 }}>
                      {date.getDate()}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)", marginTop: "0.4rem" }}>
                      {date.toLocaleString("en-US", { month: "short" })}
                    </span>
                  </div>
                  <div style={{ height: "3.5rem", background: "rgba(204,17,51,0.22)" }} />
                  <div style={{ minWidth: 0 }}>
                    <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--text-primary)", letterSpacing: "0.02em", lineHeight: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {title}
                    </h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                      {event.venue !== "TBA" && (
                        <span className="text-sm" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}>
                          {event.venue}
                        </span>
                      )}
                      <span className="text-xs uppercase tracking-[0.08em]" style={{ color: "var(--accent-red)", border: "1px solid rgba(204,17,51,0.45)", background: "rgba(204,17,51,0.08)", fontFamily: "var(--font-space-grotesk)", padding: "0.2rem 0.6rem" }}>
                        {event.city}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Desktop: events-page style card */}
                <div
                  className="hidden md:block hw-card hw-card-link"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid rgba(204,17,51,0.18)",
                    position: "relative",
                  }}
                >
                  <div className="flex flex-row gap-5 md:gap-8 p-5 sm:p-7 md:p-10">
                    <div className="flex-shrink-0 sm:w-24">
                      <span className="block leading-none font-normal" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.6rem, 10vw, 3.4rem)", color: "var(--accent-red)" }}>
                        {date.getDate()}
                      </span>
                      <span className="block text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}>
                        {date.toLocaleString("en-US", { month: "short" })} {date.getFullYear()}
                      </span>
                    </div>

                    <div className="w-px self-stretch" style={{ background: "rgba(204,17,51,0.22)" }} />

                    <div className="flex-1 min-w-0 flex flex-row items-center justify-between gap-8">
                      <div className="min-w-0">
                        <div className="flex flex-row flex-wrap items-start gap-3 mb-3">
                          <h3 className="font-normal leading-tight" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.45rem, 7.2vw, 2.2rem)", color: "var(--text-primary)", letterSpacing: "0.02em" }}>
                            {event.title}
                          </h3>
                          <span className="text-xs tracking-[0.15em] uppercase px-2.5 py-1 flex-shrink-0" style={{ fontFamily: "var(--font-space-grotesk)", background: typeColors[event.type] ?? "rgba(204,17,51,0.9)", color: "#fff" }}>
                            {event.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs tracking-wide" style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}>
                            {event.venue !== "TBA" ? event.venue : "Venue TBA"}
                            {event.time && ` · ${event.time}`}
                          </p>
                          <span className="inline-flex items-center justify-center min-w-[74px] text-xs tracking-[0.08em] uppercase px-3 py-1.5 rounded-full whitespace-nowrap" style={{ color: "var(--accent-red)", border: "1px solid rgba(204,17,51,0.45)", background: "rgba(204,17,51,0.08)", fontFamily: "var(--font-space-grotesk)" }}>
                            {event.city}
                          </span>
                        </div>
                      </div>

                      {event.ticketUrl ? (
                        <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer" className="hw-btn-red inline-flex items-center justify-center self-stretch ml-auto min-w-[160px] text-sm font-bold tracking-[0.16em] uppercase whitespace-nowrap leading-none px-7" style={{ background: "var(--accent-red)", color: "#fff", fontFamily: "var(--font-space-grotesk)", position: "relative", zIndex: 2 }}>
                          Get Tickets
                        </a>
                      ) : event.detailsUrl ? (
                        <a href={event.detailsUrl} target="_blank" rel="noopener noreferrer" className="hw-btn-red inline-flex items-center justify-center self-stretch ml-auto min-w-[160px] text-sm font-bold tracking-[0.16em] uppercase whitespace-nowrap leading-none px-7" style={{ background: "var(--accent-red)", color: "#fff", fontFamily: "var(--font-space-grotesk)", position: "relative", zIndex: 2 }}>
                          Details
                        </a>
                      ) : event.comingSoon ? (
                        <span className="inline-flex items-center justify-center self-stretch ml-auto min-w-[160px] text-sm font-bold tracking-[0.16em] uppercase whitespace-nowrap leading-none px-7" style={{ background: "#6b7280", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}>
                          More to come
                        </span>
                      ) : null}
                    </div>
                  </div>
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
