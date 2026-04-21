interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  const align = center ? "text-center" : "";
  const autoMargin = center ? "mx-auto" : "";

  return (
    <div className={align}>
      {eyebrow && (
        <p
          className="text-xs tracking-[0.4em] uppercase mb-5"
          style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={`w-12 h-px mb-7 md:mb-8 ${autoMargin}`}
        style={{ background: "var(--accent-red)" }}
      />
      <h2
        className="font-normal"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(3rem, 6.4vw, 5.4rem)",
          color: "var(--text-primary)",
          letterSpacing: "0.02em",
          lineHeight: 0.95,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 md:mt-7 text-sm md:text-base leading-relaxed max-w-2xl ${autoMargin}`}
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
