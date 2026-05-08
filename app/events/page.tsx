import Image from "next/image";
import { events } from "@/data/events";
import { isPast, parseLocalDate, formatDate } from "@/lib/utils";
import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Events" };

const DEFAULT_POSTER = "/photos/hw.png";

function EventCard({ event, past = false }: { event: (typeof events)[number]; past?: boolean }) {
  const linkUrl = event.ticketUrl ?? event.detailsUrl;

  const info = (
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

  const cardStyle: React.CSSProperties = {
    border: "1px solid rgba(204,17,51,0.18)",
  };

  if (!past && linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block hw-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
        style={cardStyle}
      >
        {info}
      </a>
    );
  }

  return (
    <div className="group hw-card overflow-hidden" style={cardStyle}>
      {info}
    </div>
  );
}

export default function EventsPage() {
  const upcoming = events
    .filter((e) => !isPast(e.date))
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime());

  const past = events
    .filter((e) => isPast(e.date))
    .sort((a, b) => parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime());

  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Schedule"
        title="Events"
        subtitle="Regular shows, festivals, and conventions across Philadelphia and beyond."
      />

      <div className="hw-page-container hw-page-section">
        {upcoming.length > 0 && (
          <section>
            <h2
              className="text-xs tracking-[0.4em] uppercase mb-8"
              style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Upcoming
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {upcoming.length > 0 && past.length > 0 && (
          <div aria-hidden style={{ height: "clamp(56px, 8vw, 120px)" }} />
        )}

        {past.length > 0 && (
          <section>
            <h2
              className="text-xs tracking-[0.4em] uppercase mb-8"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Past Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {past.map((event) => (
                <EventCard key={event.id} event={event} past />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
