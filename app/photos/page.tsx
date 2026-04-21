import PhotoGrid from "@/components/photos/PhotoGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/layout/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Photos" };

// To add real photos: place .webp files in /public/photos/ and add entries here.
// Each entry: { src: "/photos/filename.webp", alt: "description", event: "Event Name", width: 1200, height: 800 }
const photos: Parameters<typeof PhotoGrid>[0]["photos"] = [];

export default function PhotosPage() {
  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Gallery"
        title="Photos"
        subtitle="Live moments, conventions, and behind-the-scenes from our events."
      />

      <section className="hw-page-section">
        <div className="hw-page-container">
          <ScrollReveal>
            <PhotoGrid photos={photos} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
