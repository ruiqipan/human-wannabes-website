interface Props {
  trackId?: string;
}

export default function SpotifyEmbed({ trackId }: Props) {
  if (!trackId) {
    return (
      <div
        className="w-full flex flex-col items-center justify-center gap-4 py-16 px-8 text-center"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid rgba(204,17,51,0.2)",
          minHeight: 160,
        }}
      >
        <p
          className="text-sm tracking-[0.2em] uppercase"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)" }}
        >
          Spotify embed coming soon
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-space-grotesk)", opacity: 0.6 }}
        >
          Add your Spotify track URL to data/band-info.ts
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder={0}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Human Wannabes on Spotify"
      style={{ border: "none", borderRadius: 12 }}
    />
  );
}
