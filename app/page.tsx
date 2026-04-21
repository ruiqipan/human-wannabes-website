import HeroMain from "@/components/home/HeroMain";
import WhoWeAre from "@/components/home/WhoWeAre";
import WherePlayed from "@/components/home/WherePlayed";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export const metadata = {
  title: "Human Wannabes",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-28 pb-16 md:pb-24">
      <HeroMain />
      <WhoWeAre />
      <WherePlayed />
      <UpcomingEvents />
      <div className="h-16 md:h-24 lg:h-28" />
    </div>
  );
}
