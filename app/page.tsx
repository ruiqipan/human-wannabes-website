import HeroMain from "@/components/home/HeroMain";
import WhoWeAre from "@/components/home/WhoWeAre";
import WherePlayed from "@/components/home/WherePlayed";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export const metadata = {
  title: "Human Wannabes",
};

export default function HomePage() {
  return (
    <div className="flex flex-col pb-16 md:pb-24">
      <HeroMain />
      <div className="h-28 md:h-44 lg:h-15" aria-hidden="true" />
      <UpcomingEvents />
      <div className="h-28 md:h-44 lg:h-15" aria-hidden="true" />
      <WhoWeAre />
      <div className="h-20 md:h-32" aria-hidden="true" />
      <WherePlayed />
      <div className="h-16 md:h-24 lg:h-28" />
    </div>
  );
}
