import { stats } from "@/data/band-info";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StatsBar() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid rgba(204,17,51,0.15)",
        borderBottom: "1px solid rgba(204,17,51,0.15)",
      }}
    >
      <div className="hw-page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div
                className="flex flex-col items-center text-center py-8 md:py-10 px-6 md:px-8"
                style={{
                  borderColor: "rgba(204,17,51,0.18)",
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
    </section>
  );
}
