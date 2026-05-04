import { conventions } from "@/data/band-info";
import { stats } from "@/data/band-info";
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

        <div
          style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(204,17,51,0.18)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.1 + i * 0.08}>
              <div
                className="flex flex-col items-center text-center py-8 md:py-10 px-6 md:px-8"
                style={{
                  border: "1px solid rgba(204,17,51,0.18)",
                  background: "rgba(31, 0, 13, 0.45)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(3rem, 7vw, 5.2rem)",
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                    lineHeight: 1.0,
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-3 text-xs tracking-[0.25em] uppercase"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {s.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
