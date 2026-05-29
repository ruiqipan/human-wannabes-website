import { bandDescription, hazStudioUrl } from "@/data/band-info";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhoWeAre() {
  const [descriptionBeforeHaz, descriptionAfterHaz] = bandDescription.split("Haz Studio");

  return (
    <section
      className="hw-page-section"
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid rgba(204,17,51,0.15)",
        borderBottom: "1px solid rgba(204,17,51,0.15)",
        paddingBlock: "clamp(2rem, 3.5vw, 3.5rem)",
      }}
    >
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
              {descriptionBeforeHaz}
              <a
                href={hazStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hw-link font-semibold text-[var(--accent-cream)] underline decoration-[var(--accent-red)] underline-offset-4"
              >
                Haz Studio
              </a>
              {descriptionAfterHaz}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
