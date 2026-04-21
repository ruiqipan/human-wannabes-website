import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function CameraIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.25 }}
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function PhotoPlaceholder({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center ${className}`}
      style={{
        background: "#140010",
        border: "1px solid rgba(204,17,51,0.18)",
      }}
    >
      {/* Hatch texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(204,17,51,0.04) 0, rgba(204,17,51,0.04) 1px, transparent 0, transparent 50%)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Corner bracket TL */}
      <div className="absolute top-3 left-3 pointer-events-none opacity-30">
        <div className="w-5 h-px" style={{ background: "var(--accent-red)" }} />
        <div className="w-px h-5" style={{ background: "var(--accent-red)" }} />
      </div>
      {/* Corner bracket BR */}
      <div className="absolute bottom-3 right-3 pointer-events-none opacity-30 flex flex-col items-end">
        <div className="w-px h-5" style={{ background: "var(--accent-red)" }} />
        <div className="w-5 h-px" style={{ background: "var(--accent-red)" }} />
      </div>
      {/* Center content */}
      <div className="relative flex flex-col items-center gap-3 p-6 text-center">
        <CameraIcon />
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {label}
          </p>
          <p
            className="text-xs mt-1 opacity-45"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

const photos = [
  { label: "Live Performance",   caption: "On stage" },
  { label: "Band Shot",          caption: "Group photo" },
  { label: "Convention",         caption: "OtakuFest 2025" },
  { label: "Behind the Scenes",  caption: "Backstage" },
  { label: "Cherry Blossom Fest",caption: "Spring 2025" },
];

export default function PhotoShowcase() {
  return (
    <section
      className="py-28 md:py-40"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="hw-page-container">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-14 md:mb-20">
          <ScrollReveal>
            <SectionHeading eyebrow="Visual" title="Live Moments" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/photos"
              className="hw-view-all text-xs tracking-[0.3em] uppercase pb-px"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-space-grotesk)",
                borderBottom: "1px solid rgba(204,17,51,0.4)",
              }}
            >
              View All Photos →
            </Link>
          </ScrollReveal>
        </div>

        {/* Desktop layout: large feature left (60%) + 2×2 grid right (40%) */}
        <div className="hidden md:flex gap-5 lg:gap-6" style={{ height: 600 }}>
          <ScrollReveal delay={0} className="flex-[3] h-full">
            <PhotoPlaceholder
              label={photos[0].label}
              caption={photos[0].caption}
              className="w-full h-full"
            />
          </ScrollReveal>
          <div className="flex-[2] h-full grid grid-cols-2 gap-5 lg:gap-6">
            {photos.slice(1).map((p, i) => (
              <ScrollReveal key={p.label} delay={0.07 * (i + 1)} className="h-full">
                <PhotoPlaceholder
                  label={p.label}
                  caption={p.caption}
                  className="w-full h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile layout: 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {photos.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 0.06} className={i === 0 ? "col-span-2" : ""}>
              <PhotoPlaceholder
                label={p.label}
                caption={p.caption}
                className={`w-full ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile view-all */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/photos"
            className="text-xs tracking-[0.3em] uppercase py-3 px-6"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-space-grotesk)",
              border: "1px solid rgba(204,17,51,0.3)",
            }}
          >
            View All Photos →
          </Link>
        </div>
      </div>
    </section>
  );
}
