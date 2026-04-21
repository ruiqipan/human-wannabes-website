import { bandDescription } from "@/data/band-info";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhoWeAre() {
  return (
    <section className="py-28 md:py-40" style={{ background: "var(--bg-base)" }}>
      <div className="hw-page-container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Band"
            title="Who We Are"
            subtitle="Bringing anime, game, and vocaloid music to life in the heart of Philadelphia."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              {bandDescription}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
            >
              Founded by music influencer Haz Studio, Human Wannabes bridges the gap between online fandom and live performance, creating a community where anime and music culture collide.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
