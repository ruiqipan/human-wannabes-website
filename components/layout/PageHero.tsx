import SectionHeading from "@/components/ui/SectionHeading";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="hw-page-hero">
      <div
        className="absolute pointer-events-none"
        style={{
          width: "min(420px, 36vw)",
          height: "96px",
          background: "var(--accent-red)",
          transform: "skewY(-6deg)",
          right: "-3%",
          bottom: "-18px",
          opacity: 0.09,
        }}
      />
      <div className="hw-page-container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
