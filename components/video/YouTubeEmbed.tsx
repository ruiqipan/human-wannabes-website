interface Props {
  playlistId: string;
}

export default function YouTubeEmbed({ playlistId }: Props) {
  return (
    <div className="w-full" style={{ aspectRatio: "16/9" }}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/videoseries?si=REbquEK6OUTVwENZ&list=${playlistId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
}
