export type BandEvent = {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time?: string;
  description: string;
  ticketUrl?: string;
  detailsUrl?: string;
  comingSoon?: boolean;
  type: "festival" | "showcase" | "concert" | "collab" | "gathering" | "convention";
  posterUrl?: string;
};

/**
 * Event entry rule (single source of truth for all event UI):
 * 1) Use ISO date format YYYY-MM-DD.
 * 2) id should be stable kebab-case: "<yyyy>-<short-title>".
 * 3) title should be the exact public event name.
 * 4) venue should be specific when known; otherwise "TBA".
 * 5) city is a short display label for the city/location badge.
 * 6) ticketUrl should be included whenever a public event/ticket link exists
 *    (Home event button opens this URL; otherwise it falls back to /events).
 * 7) type must be one of: festival | showcase | concert | collab | gathering | convention.
 * 8) description should be one concise sentence in English.
 *
 * Future update workflow:
 * - Given date + title + link, the assistant maps it into this shape
 *   following these rules so Home + Events pages stay consistent automatically.
 */
export const events: BandEvent[] = [
  {
    id: "2026-anime-otapia",
    title: "Anime Otapia 2026",
    venue: "Montgomery County Conference Center",
    city: "DC",
    date: "2026-01-18",
    description: "Convention performance featuring anime and game music in the DMV area.",
    type: "convention",
    ticketUrl: "https://anime-otapia.com/",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/anime-otapia.jpg",
  },
  {
    id: "2026-vocaloid-only-night-platt-house",
    title: "Vocaloid Only Live and Open Mic",
    venue: "Platt House",
    city: "Philly",
    date: "2026-01-31",
    description: "A dedicated Vocaloid live and open mic event at Platt House.",
    type: "gathering",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/vocaloid-only-platt-house.jpg",
  },
  {
    id: "2026-headline-philamoca",
    title: "Anime & Vocaloid Live Music Party w/ Jasmine Tea Oishii",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-02-21",
    description: "Second headline concert show at PhilaMOCA.",
    type: "concert",
    ticketUrl: "https://www.ticketleap.events/tickets/human-wannabes/hw-feb-2026",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/2nd-headline-philamoca.jpg",
  },
  {
    id: "2026-mikuonly-nyc",
    title: "MikuOnly NYC 2026",
    venue: "Melrose Ballroom",
    city: "NYC",
    date: "2026-03-07",
    description: "Special guest performance at MikuOnly NYC.",
    type: "convention",
    ticketUrl: "https://www.ny-miku-only.com/",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/mikuonly-nyc-2026.jpg",
  },
  {
    id: "2026-jrock-jpop-platt-house",
    title: "J-Rock & J-Pop Live and Open Mic",
    venue: "Platt House",
    city: "Philly",
    date: "2026-03-15",
    description: "J-Rock and J-Pop live performance and open mic at Platt House.",
    type: "gathering",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/jrock-jpop-platt-house.png",
  },
  {
    id: "2026-kazha-with-human-wannabes",
    title: "Kazha w/ Human Wannabes",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-03-18",
    description: "Collaborative show featuring Kazha and Human Wannabes.",
    type: "concert",
    ticketUrl: "https://www.bandsintown.com/e/107781654?affil_code=js_www.kazha.net&app_id=js_www.kazha.net&came_from=242&utm_campaign=event&utm_medium=web&utm_source=widget",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/kazha-with-human-wannabes.jpg",
  },
  {
    id: "2026-philadelphia-cherry-blossom-festival",
    title: "Philadelphia Cherry Blossom Festival",
    venue: "Fairmount Park Horticulture Center",
    city: "Philly",
    date: "2026-03-28",
    description: "Festival appearance celebrating Japanese culture, music, and spring in Philadelphia.",
    type: "festival",
    ticketUrl: "https://linktr.ee/phillyotaku?utm_source=linktree_profile_share&ltsid=bdd7a2bd-0d48-4511-84c9-8c0c9a114a80",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/cherry-blossom-festival.jpg",
  },
  {
    id: "2026-philly-otaku-fest",
    title: "Philly Otaku Fest",
    venue: "Cherry St Pier",
    city: "Philly",
    date: "2026-04-12",
    description: "Live set at Philly Otaku Fest featuring anime and game covers.",
    type: "festival",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/philly-otaku-fest.jpg",
  },
  {
    id: "2026-gamethemed-open-mic-the-lawn",
    title: "Game-themed Live and Open Mic",
    venue: "The Lawn",
    city: "Philly",
    date: "2026-05-10",
    description: "Game-themed live performance and open mic event at The Lawn.",
    type: "gathering",
    detailsUrl: "https://www.instagram.com/p/DXaCA1PgU1P/",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/game-themed-open-mic.jpg",
  },
  {
    id: "2026-full-sized-concert-off-knowneous",
    title: "Anime & Game Live Music Party w/ OFF-KNOWNEOUS",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-05-17",
    description: "Third full-sized headline concert with Off-Knowneous.",
    type: "concert",
    ticketUrl: "https://events.ticketleap.com/tickets/human-wannabes/hw-may-2026",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/3rd-full-sized-concert.jpg",
  },
  {
    id: "2026-girls-band-night-25hr-studio",
    title: "Girls Band Night by 25HR Studio",
    venue: "21-38 44th Rd",
    city: "NYC",
    date: "2026-05-29",
    description: "",
    type: "concert",
    ticketUrl: "https://posh.vip/e/25-hour-studio-girls-band-night?t=humanwannabesband",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/girls-band-night.png",
  },
  {
    id: "2026-west-philly-porchfest",
    title: "West Philly PorchFest",
    venue: "812 S 48th St",
    city: "Philly",
    date: "2026-05-30",
    description: "Community festival performance as part of West Philly PorchFest.",
    type: "festival",
    ticketUrl: "https://westphillyporchfest.com/pages",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/west-philly-porchfest.webp",
  },
  {
    id: "2026-ultimate-anime-band-live",
    title: "The Ultimate Anime Band Live",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-11-07",
    description: "Fourth headline anime and game live music party presented by Human Wannabes.",
    type: "concert",
    ticketUrl: "https://events.ticketleap.com/tickets/human-wannabes/human-wannabes-nov-2026-4th-anime-game-live-music-party",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/ultimate-anime-band-live.jpg",
  },
  {
    id: "2026-anime-live-music-party-bluemoon-sanitizer",
    title: "Anime Live Music Party W/ BLUEMOON SANITIZER",
    venue: "Rock and Roll San Diego",
    city: "San Diego",
    date: "2026-07-07",
    description: "Anime live music party concert with BLUEMOON SANITIZER in San Diego.",
    type: "concert",
    ticketUrl: "https://events.ticketleap.com/tickets/human-wannabes/anime-live-music-party-acl2026",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/bluemoon-sanitizer.png",
  },
  {
    id: "2025-anime-game-live-music-party-philamoca",
    title: "1st Full-sized Concert",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2025-11-02",
    description: "First full-sized concert performance at PhilaMOCA.",
    type: "concert",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/1st-full-sized-concert.png",
  },
  {
    id: "2025-upenn-activities-fair",
    title: "UPenn Activities Fair Busking",
    venue: "University of Pennsylvania",
    city: "Philly",
    date: "2025-08-26",
    description: "Busking performance at the UPenn activities fair.",
    type: "gathering",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/anime-games-music-club-penn.jpg",
  },
  {
    id: "2025-anime-game-live-music-party-philly",
    title: "Fall Indoor Live and Open Mic",
    venue: "Platt House",
    city: "Philly",
    date: "2025-09-21",
    description: "Fall indoor live performance and open mic event at Platt House.",
    type: "gathering",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/anime-games-music-club-penn.jpg",
  },
  {
    id: "2025-outdoor-live-music-gathering-anime-penn",
    title: "Fall Outdoor Live and Open Mic",
    venue: "The Lawn",
    city: "Philly",
    date: "2025-10-19",
    description: "Fall outdoor live performance and open mic event at The Lawn.",
    type: "gathering",
    posterUrl: "https://mfqjhbucsxcewpsrykcg.supabase.co/storage/v1/object/public/photos/posters/anime-games-music-club-penn.jpg",
  },
];
