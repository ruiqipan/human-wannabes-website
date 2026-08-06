import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WeChatContactButton from "@/components/contact/WeChatContactButton";
import { socialLinks } from "@/data/band-info";

export const metadata: Metadata = { title: "Contact" };

const contactSections = [
  {
    eyebrow: "Bookings",
    title: "Organizers...",
    body: (
      <>
        We&apos;d love to play at your event with reasonable audio support, stage equipment,
        audience draw, and revenue sharing. We deliver a professional-grade full set that is
        sure to hype up any community of anime lovers.
      </>
    ),
  },
  {
    eyebrow: "Community",
    title: "Audience...",
    body: (
      <>
        We&apos;d love to have you in our community wherever you live! Join our{" "}
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="hw-link underline decoration-[var(--accent-red)] underline-offset-4"
        >
          Discord server
        </a>{" "}
        or add our leader on <WeChatContactButton />.
      </>
    ),
  },
  {
    eyebrow: "Collaboration",
    title: "Musicians...",
    body: (
      <>
        We welcome collaboration with talented musicians that can commute to Philadelphia.
        Human Wannabes periodically have openings for semi-professional level anime lover
        musicians, while our community has a record of fostering bands of all levels.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="Bookings, community, and musical collaboration — we'd love to hear from you."
      />

      <section className="hw-page-section">
        <div className="hw-page-container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:gap-6">
            {contactSections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.08}>
                <article
                  className="h-full px-6 py-8 md:px-8 md:py-10"
                  style={{
                    border: "1px solid rgba(204,17,51,0.2)",
                    background: "rgba(31, 0, 13, 0.45)",
                  }}
                >
                  <p
                    className="mb-5 text-xs uppercase tracking-[0.35em]"
                    style={{ color: "var(--accent-red)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {section.eyebrow}
                  </p>
                  <h2
                    className="font-normal leading-none"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {section.title}
                  </h2>
                  <div className="my-6 h-px w-12" style={{ background: "var(--accent-red)" }} />
                  <p
                    className="text-sm leading-7 md:text-base"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {section.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div
              className="mt-8 px-6 py-7 text-center md:mt-10 md:px-8"
              style={{
                border: "1px solid rgba(204,17,51,0.2)",
                background: "var(--bg-elevated)",
              }}
            >
              <p
                className="text-sm leading-7 md:text-base"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Please direct any inquiry to{" "}
                <strong className="text-[var(--accent-cream)]">haz_studio</strong> on Discord or{" "}
                <strong className="text-[var(--accent-cream)]">Dr-Haz</strong> on WeChat.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
