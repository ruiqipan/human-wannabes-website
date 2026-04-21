interface Props {
  playlistId: string;
}

export default function YouTubeEmbed({ playlistId }: Props) {
  return (
    <div className="relative w-full aspect-video min-h-[220px]">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
