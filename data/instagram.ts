export type InstagramTile = {
  postUrl?: string;
  imageUrl?: string;
  alt?: string;
};

// Fill these one by one with your latest posts.
// Example:
// {
//   postUrl: "https://www.instagram.com/p/POST_ID/",
//   imageUrl: "https://...jpg",
//   alt: "Live show at Anime Otapia",
// }
export const instagramTiles: InstagramTile[] = Array.from({ length: 12 }, () => ({}));
