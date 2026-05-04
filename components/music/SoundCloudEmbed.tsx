interface Props {
  playerUrl: string;
  title: string;
}

export default function SoundCloudEmbed({ playerUrl, title }: Props) {
  return (
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={playerUrl}
      title={`${title} on SoundCloud`}
      style={{ border: "none", borderRadius: 12 }}
    />
  );
}
