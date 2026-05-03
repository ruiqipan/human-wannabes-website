import Link from "next/link";
import { events, type BandEvent } from "@/data/events";
import { isPast } from "@/lib/utils";

function parseLocalDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getEventHref(event: BandEvent) {
  return event.ticketUrl ?? "/events";
}

export default function UpcomingEvents() {
  const event = events
    .filter((e) => !isPast(e.date))
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime())[0];

  if (!event) return null;

  const eventDate = parseLocalDate(event.date);
  const eventHref = getEventHref(event);
  const isExternal = Boolean(event.ticketUrl);

  const eventContent = (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-6 px-5 py-7 sm:grid-cols-[auto_1px_1fr_auto] sm:gap-x-7 md:px-8 md:py-9">
      <div className="flex min-w-[76px] flex-col items-center justify-center text-center">
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.65rem, 5vw, 3.75rem)",
            color: "var(--accent-red)",
            lineHeight: 0.88,
          }}
        >
          {eventDate.getDate()}
        </span>
        <span
          className="mt-2 text-xs uppercase tracking-[0.22em]"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          {eventDate.toLocaleString("en-US", { month: "short" })}
        </span>
      </div>

      <div className="hidden h-20 w-px sm:block" style={{ background: "rgba(204,17,51,0.22)" }} />

      <div className="min-w-0">
        <p
          className="mb-2 text-xs uppercase tracking-[0.28em]"
          style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Next Live Date
        </p>
        <h2
          className="text-3xl leading-none sm:text-4xl md:text-5xl"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-bebas)",
            letterSpacing: "0.02em",
          }}
        >
          {event.title}
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          {event.venue !== "TBA" && (
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              {event.venue}
            </span>
          )}
          <span
            className="inline-flex min-w-[76px] items-center justify-center px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
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

      <span
        className="col-span-2 inline-flex h-11 items-center justify-center whitespace-nowrap border px-5 text-xs font-semibold uppercase tracking-[0.2em] sm:col-span-1"
        style={{
          borderColor: "rgba(245,230,200,0.45)",
          color: "var(--accent-cream)",
          fontFamily: "var(--font-space-grotesk)",
        }}
      >
        Details
      </span>
    </div>
  );

  return (
    <section
      className="relative border-y py-12 md:py-16"
      style={{
        background: "linear-gradient(180deg, rgba(31,0,13,0.92), rgba(10,0,5,0.98))",
        borderColor: "rgba(204,17,51,0.2)",
      }}
    >
      <div className="hw-page-container">
        <div className="mb-6 flex justify-end md:mb-7">
          <Link
            href="/events"
            className="hw-view-all text-xs uppercase tracking-[0.28em]"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            All Events →
          </Link>
        </div>

        {isExternal ? (
          <a
            href={eventHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block hw-card"
            aria-label={`Open event details for ${event.title}`}
            style={{
              border: "1px solid rgba(204,17,51,0.28)",
              background: "rgba(10,0,5,0.58)",
            }}
          >
            {eventContent}
          </a>
        ) : (
          <Link
            href={eventHref}
            className="block hw-card"
            aria-label={`Open event details for ${event.title}`}
            style={{
              border: "1px solid rgba(204,17,51,0.28)",
              background: "rgba(10,0,5,0.58)",
            }}
          >
            {eventContent}
          </Link>
        )}
      </div>
    </section>
  );
}
