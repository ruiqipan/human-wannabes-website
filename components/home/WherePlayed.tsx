import { conventions } from "@/data/band-info";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WherePlayed() {
  return (
    <section
      className="hw-page-section"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid rgba(204,17,51,0.15)",
        paddingBlock: "clamp(2rem, 3.5vw, 3.5rem)",
      }}
    >
      <div className="hw-page-container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Appearances"
            title="Where We've Played"
            subtitle="Invited and hired to perform at conventions, festivals, and special events."
          />
        </ScrollReveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conventions.map((name, i) => (
            <ScrollReveal key={name} delay={i * 0.07}>
              <div
                className="flex items-center gap-4 px-6 py-6"
                style={{
                  border: "1px solid rgba(204,17,51,0.2)",
                  background: "rgba(31, 0, 13, 0.45)",
                }}
              >
                <div className="w-1 h-9 flex-shrink-0" style={{ background: "var(--accent-red)" }} />
                <span
                  className="font-normal leading-tight"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "1.35rem",
                    color: "var(--text-primary)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <p
            className="mt-6 md:mt-7 text-sm md:text-base leading-relaxed max-w-2xl"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            ... and{" "}
            <Link
              href="/events"
              className="hw-link underline decoration-[var(--accent-red)] underline-offset-4"
            >
              much more
            </Link>
            .
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
