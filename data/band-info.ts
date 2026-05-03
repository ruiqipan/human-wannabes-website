export const stats = [
  { value: "60K+",  label: "Online Following" },
  { value: "300K+", label: "Online Views" },
  { value: "100+",  label: "Avg. Monthly Turnout" },
  { value: "400+",  label: "Local Fans" },
];

export const sponsors = ["Xvive", "NUX", "Mackie"];

export const socialLinks = {
  instagram: "https://www.instagram.com/humanwannabes/",
  youtube:
    "https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht",
  discord: "https://discord.gg/gMZhDTrxFq",
};

export const youtubePlaylistId = "PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht";

// Set this to a hosted image URL (Supabase, S3, Cloudinary, etc.)
// or to a local file in /public (e.g. "/hero/cover.webp").
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const photosBucket = process.env.NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET ?? "photos";
const localHeroBackgroundImage = "/photos/main_background.jpg";

export const heroBackgroundImageCandidates = supabaseUrl
  ? [
      `${supabaseUrl}/storage/v1/object/public/${photosBucket}/imported/DSCF3854.png`,
    ]
  : [localHeroBackgroundImage];

export const bandDescription =
  "The Human Wannabes is a Philadelphia-based cover band performing anime, game, and vocaloid music — founded by music influencer Haz Studio. Since August 2025, we've built a local fan community of 400+ and host monthly live events with 100+ average turnout. Our videos have accumulated 300K+ views online. We are sponsored by Xvive, NUX, Mackie, and Direct Sound.";

export const conventions = [
  "5+ local concerts",
  "Anime Otapia 2026",
  "Miku Only 2026",
  "Philadelphia Cherry Blossom Festival 2026",
  "Philly OtakuFest 2026",
  "Persona 30th Anniversary",
];
