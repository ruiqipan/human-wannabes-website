export type BandEvent = {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time?: string;
  description: string;
  ticketUrl?: string;
  type: "festival" | "showcase" | "concert" | "collab";
};

export const events: BandEvent[] = [
  {
    id: "cherry-blossom-2025",
    title: "Philadelphia Cherry Blossom Festival",
    venue: "Fairmount Park",
    city: "Philadelphia, PA",
    date: "2025-04-05",
    description:
      "Live performance at one of Philadelphia's most beloved spring festivals, celebrating Japanese culture and music.",
    type: "festival",
  },
  {
    id: "miku-only-2025",
    title: "Miku Only",
    venue: "TBA",
    city: "Philadelphia, PA",
    date: "2025-07-12",
    description:
      "A fan-organized event dedicated entirely to Hatsune Miku and Vocaloid music. We performed a full set of Vocaloid covers.",
    type: "showcase",
  },
  {
    id: "anime-otapia-2025",
    title: "Anime Otapia",
    venue: "Philadelphia Convention Center",
    city: "Philadelphia, PA",
    date: "2025-09-20",
    description:
      "Philadelphia's premier anime convention. Human Wannabes performed across multiple panels and the main stage.",
    type: "festival",
  },
  {
    id: "otakufest-2025",
    title: "Philly OtakuFest",
    venue: "TBA",
    city: "Philadelphia, PA",
    date: "2025-11-08",
    description:
      "Annual Philadelphia otaku festival featuring cosplay, gaming, and live music. We headlined the music showcase.",
    type: "festival",
  },
  {
    id: "monthly-show-jan-2026",
    title: "Monthly Live Show — January",
    venue: "TBA",
    city: "Philadelphia, PA",
    date: "2026-01-25",
    description:
      "Our monthly community concert featuring anime, game, and vocaloid covers. Free entry, all welcome.",
    type: "concert",
  },
  {
    id: "monthly-show-mar-2026",
    title: "Monthly Live Show — March",
    venue: "TBA",
    city: "Philadelphia, PA",
    date: "2026-03-29",
    description:
      "Our monthly community concert featuring anime, game, and vocaloid covers. Free entry, all welcome.",
    type: "concert",
  },
  {
    id: "monthly-show-may-2026",
    title: "Monthly Live Show — May",
    venue: "TBA",
    city: "Philadelphia, PA",
    date: "2026-05-31",
    description:
      "Our monthly community concert. More details coming soon — follow us on Instagram for updates.",
    type: "concert",
  },
];
