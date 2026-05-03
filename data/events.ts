export type BandEvent = {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time?: string;
  description: string;
  ticketUrl?: string;
  type: "festival" | "showcase" | "concert" | "collab" | "gathering";
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
 * 7) type must be one of: festival | showcase | concert | collab | gathering.
 * 8) description should be one concise sentence in English.
 *
 * Future update workflow:
 * - Given date + title + link, the assistant maps it into this shape
 *   following these rules so Home + Events pages stay consistent automatically.
 */
export const events: BandEvent[] = [
  {
    id: "2026-anime-otapia",
    title: "Anime Otapia",
    venue: "Anime Otapia",
    city: "DMV",
    date: "2026-01-18",
    description: "Convention performance featuring anime and game music in the DMV area.",
    type: "festival",
    ticketUrl: "https://anime-otapia.com/",
  },
  {
    id: "2026-vocaloid-only-night-platt-house",
    title: "Vocaloid Only Night at Platt House",
    venue: "Platt House",
    city: "Philly",
    date: "2026-01-31",
    description: "A dedicated Vocaloid night performance at Platt House.",
    type: "showcase",
  },
  {
    id: "2026-headline-philamoca",
    title: "2nd Headline Show at PhilaMOCA",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-02-21",
    description: "Second headline concert show at PhilaMOCA.",
    type: "concert",
    ticketUrl: "https://www.ticketleap.events/tickets/human-wannabes/hw-feb-2026",
  },
  {
    id: "2026-mikuonly-nyc",
    title: "MikuOnly NYC",
    venue: "MikuOnly NYC",
    city: "NYC",
    date: "2026-03-07",
    description: "Special guest performance at MikuOnly NYC.",
    type: "festival",
    ticketUrl: "https://www.ny-miku-only.com/",
  },
  {
    id: "2026-jrock-jpop-platt-house",
    title: "J-Rock & J-Pop Party at Platt House, UPenn",
    venue: "Platt House, UPenn",
    city: "Philly",
    date: "2026-03-15",
    description: "J-Rock and J-Pop party set at UPenn's Platt House.",
    type: "showcase",
  },
  {
    id: "2026-kazha-with-human-wannabes",
    title: "Kazha w/ Human Wannabes",
    venue: "TBA",
    city: "Philly",
    date: "2026-03-18",
    description: "Collaborative show featuring Kazha and Human Wannabes.",
    type: "collab",
    ticketUrl: "https://www.bandsintown.com/e/107781654?affil_code=js_www.kazha.net&app_id=js_www.kazha.net&came_from=242&utm_campaign=event&utm_medium=web&utm_source=widget",
  },
  {
    id: "2026-philadelphia-cherry-blossom-festival",
    title: "Philadelphia Cherry Blossom Festival",
    venue: "Philadelphia Cherry Blossom Festival",
    city: "Philly",
    date: "2026-03-28",
    description: "Festival appearance celebrating Japanese culture, music, and spring in Philadelphia.",
    type: "festival",
    ticketUrl: "https://linktr.ee/phillyotaku?utm_source=linktree_profile_share&ltsid=bdd7a2bd-0d48-4511-84c9-8c0c9a114a80",
  },
  {
    id: "2026-philly-otaku-fest",
    title: "Philly Otaku Fest",
    venue: "Philly Otaku Fest",
    city: "Philly",
    date: "2026-04-12",
    description: "Live set at Philly Otaku Fest featuring anime and game covers.",
    type: "festival",
  },
  {
    id: "2026-gamethemed-open-mic-the-lawn",
    title: "Game-themed Live and Open Mic @ The Lawn",
    venue: "The Lawn",
    city: "Philly",
    date: "2026-05-10",
    description: "Game-themed live performance and open mic event at The Lawn.",
    type: "gathering",
  },
  {
    id: "2026-full-sized-concert-off-knowneous",
    title: "3rd Full-sized Concert w/ Off-Knowneous!",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2026-05-17",
    description: "Third full-sized headline concert with Off-Knowneous.",
    type: "concert",
    ticketUrl: "https://events.ticketleap.com/tickets/human-wannabes/hw-may-2026",
  },
  {
    id: "2026-girls-band-night-25hr-studio",
    title: "Girls Band Night by 25HR Studio",
    venue: "21-38 44th Rd",
    city: "NYC",
    date: "2026-05-29",
    description: "",
    type: "concert",
  },
  {
    id: "2026-west-philly-porchfest",
    title: "West Philly PorchFest",
    venue: "812 S 48th St",
    city: "Philly",
    date: "2026-05-31",
    description: "Community festival performance as part of West Philly PorchFest.",
    type: "festival",
    ticketUrl: "https://westphillyporchfest.com/pages",
  },
  {
    id: "2025-anime-game-live-music-party-philamoca",
    title: "Anime & Game Live Music Party",
    venue: "PhilaMOCA",
    city: "Philly",
    date: "2025-11-02",
    description: "Anime and game live music party performance at PhilaMOCA.",
    type: "showcase",
  },
  {
    id: "2025-upenn-activities-fair",
    title: "UPenn Activities Fair",
    venue: "UPenn Activities Fair",
    city: "Philly",
    date: "2025-08-26",
    description: "Campus activities fair appearance at UPenn.",
    type: "festival",
  },
  {
    id: "2025-anime-game-live-music-party-philly",
    title: "Anime & Game Live Music Party in Philly",
    venue: "TBA",
    city: "Philly",
    date: "2025-09-21",
    description: "Anime and game live music party in Philadelphia.",
    type: "showcase",
  },
  {
    id: "2025-outdoor-live-music-gathering-anime-penn",
    title: "Outdoor Live Music Gathering (co-hosted with Anime @ Penn)",
    venue: "TBA",
    city: "Philly",
    date: "2025-10-19",
    description: "Outdoor live music gathering co-hosted with Anime @ Penn.",
    type: "collab",
  },
];
