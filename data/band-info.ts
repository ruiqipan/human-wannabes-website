export const stats = [
  { value: "400+",  label: "Local Fans" },
  { value: "100+",  label: "Avg. Event Turnout" },
  { value: "60K+",  label: "Online Following" },
  { value: "300K+", label: "Online Views" },
];

export const sponsors = ["Xvive", "NUX", "Mackie"];

export const socialLinks = {
  instagram: "https://www.instagram.com/humanwannabes/",
  youtube:
    "https://www.youtube.com/playlist?list=PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht",
  discord: "https://discord.gg/gMZhDTrxFq",
};

export const youtubePlaylistId = "PLdoWMpbmbJL_uFuHmBrRtHgDXGgOTo1ht";
export const hazStudioUrl = "https://space.bilibili.com/483770554";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://mfqjhbucsxcewpsrykcg.supabase.co";
const photosBucket = process.env.NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET ?? "photos";

export const heroBackgroundImageCandidates = [
  `${supabaseUrl}/storage/v1/object/public/${photosBucket}/imported/DSCF3854.JPG`,
];

export const bandDescription =
  "The Human Wannabes are a highly active, semi-professional cover band performing anime, game, and vocaloid music, founded by music influencer Haz Studio. Since August 2025, we've built a local fan community of 400+ in Philadelphia. We consistently host and and perform locally and nationally at live music events with 100+ turnout. Our videos have accumulated 300K+ views online. We are sponsored by Xvive, NUX, Mackie, and Direct Sound. We are commissioned by video game campaigns like Persona.";

export const conventions = [
  "Major anime concerts, Philadelphia",
  "Anime Otapia 2026, DC",
  "Miku Only 2026, NYC",
  "Philadelphia Cherry Blossom Festival 2026",
  "Philly OtakuFest 2026",
  "Persona 30th Anniversary",
];
