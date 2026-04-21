import PhotoGrid from "@/components/photos/PhotoGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/layout/PageHero";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Photos" };

const eventByImageName: Record<string, string> = {
  "816A0297": "Anime Otapia",
  DSCF3928: "PhilaMOCA",
};

const localPhotos: NonNullable<Parameters<typeof PhotoGrid>[0]["photos"]> = [
  {
    src: "/photos/MG_4796.png",
    alt: "Human Wannabes live photo",
    event: "PhilaMOCA",
    credits: "Jimmy Yang",
    width: 1024,
    height: 683,
  },
  {
    src: "/photos/MG_4913.png",
    alt: "Human Wannabes live photo",
    event: "PhilaMOCA",
    credits: "Jimmy Yang",
    width: 1024,
    height: 683,
  },
];

type SupabasePhotoRow = {
  id: string;
  image_path: string;
  caption: string | null;
  event_name: string | null;
  credits: string | null;
  width: number | null;
  height: number | null;
};

async function getSupabasePhotos(): Promise<Parameters<typeof PhotoGrid>[0]["photos"]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET ?? "photos";

  if (!supabaseUrl || !supabaseKey) return localPhotos;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("photos")
    .select("id,image_path,caption,event_name,credits,width,height")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(60);

  if (error || !data) return localPhotos;

  const supabasePhotos = (data as SupabasePhotoRow[]).map((row) => {
    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(row.image_path);
    const imageName = row.image_path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
    const mappedEvent = eventByImageName[imageName];

    return {
      src: publicUrlData.publicUrl,
      alt: row.caption?.trim() || "Human Wannabes live photo",
      event: mappedEvent ?? (row.event_name || undefined),
      credits: row.credits || undefined,
      width: row.width || 1200,
      height: row.height || 1200,
    };
  });

  return [...localPhotos, ...supabasePhotos];
}

export default async function PhotosPage() {
  const photos = await getSupabasePhotos();

  return (
    <div className="hw-page">
      <PageHero
        eyebrow="Gallery"
        title="Photos"
        subtitle="Live moments, conventions, and behind-the-scenes from our events."
      />

      <section className="hw-page-section">
        <div className="hw-page-container">
          <ScrollReveal>
            <PhotoGrid photos={photos} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
