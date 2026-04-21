"use client";

import { useState } from "react";
import Image from "next/image";

export type Photo = {
  src: string;
  alt: string;
  event?: string;
  credits?: string;
  width: number;
  height: number;
};

const PLACEHOLDER_COUNT = 12;

const placeholderEvents = [
  "All",
  "Cherry Blossom Fest",
  "Anime Otapia",
  "OtakuFest",
  "Miku Only",
];

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function PhotoPlaceholder({ index }: { index: number }) {
  const eventLabels = ["Live Performance", "Cherry Blossom Fest", "Anime Otapia", "OtakuFest", "Miku Only", "Backstage", "Group Shot", "Stage Setup", "Crowd Shot", "With Fans", "Convention Hall", "Sound Check"];
  return (
    <div
      className="relative aspect-square overflow-hidden flex items-center justify-center group cursor-pointer"
      style={{
        background: "#150010",
        border: "1px solid rgba(204,17,51,0.15)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(204,17,51,0.03) 0, rgba(204,17,51,0.03) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-20">
        <div className="w-4 h-px" style={{ background: "var(--accent-red)" }} />
        <div className="w-px h-4" style={{ background: "var(--accent-red)" }} />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-20 flex flex-col items-end">
        <div className="w-px h-4" style={{ background: "var(--accent-red)" }} />
        <div className="w-4 h-px" style={{ background: "var(--accent-red)" }} />
      </div>
      <div className="relative flex flex-col items-center gap-2">
        <CameraIcon />
        <p
          className="text-xs tracking-[0.15em] uppercase text-center px-2"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)", fontSize: "0.6rem" }}
        >
          {eventLabels[index % eventLabels.length]}
        </p>
      </div>
    </div>
  );
}

interface Props {
  photos?: Photo[];
}

export default function PhotoGrid({ photos }: Props) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const hasRealPhotos = photos && photos.length > 0;
  const filtered = hasRealPhotos
    ? (filter === "All" ? photos : photos.filter((p) => p.event === filter))
    : null;

  const allEvents = hasRealPhotos
    ? ["All", ...Array.from(new Set(photos.filter((p) => p.event).map((p) => p.event as string)))]
    : placeholderEvents;

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
        {allEvents.map((e) => (
          <button
            key={e}
            onClick={() => setFilter(e)}
            className="text-xs tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              background: filter === e ? "var(--accent-red)" : "transparent",
              color: filter === e ? "#fff" : "var(--text-secondary)",
              border: filter === e
                ? "1px solid var(--accent-red)"
                : "1px solid rgba(204,17,51,0.25)",
            }}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {hasRealPhotos && filtered
          ? filtered.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(10,0,5,0.7) 0%, transparent 50%)" }}
                >
                  <div>
                    {photo.credits && (
                      <p
                        className="text-[10px] tracking-[0.08em] uppercase"
                        style={{ color: "rgba(255,255,255,0.78)", fontFamily: "var(--font-space-grotesk)" }}
                      >
                        Credit: {photo.credits}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <PhotoPlaceholder key={i} index={i} />
            ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <dialog
          open
          className="fixed inset-0 z-50 w-full h-full flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.9)", maxWidth: "100vw", maxHeight: "100vh", border: "none" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={lightbox.width}
              height={lightbox.height}
              className="w-full h-auto"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            {lightbox.credits && (
              <p
                className="mt-3 text-xs tracking-[0.08em] uppercase"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              >
                Credit: {lightbox.credits}
              </p>
            )}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-sm tracking-widest uppercase"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
              aria-label="Close"
            >
              Close ✕
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
