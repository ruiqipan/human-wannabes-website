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
      <div className="pt-16 md:pt-24 lg:pt-28">
        <UpcomingEvents />
      </div>
      <div className="h-28 md:h-44 lg:h-15" aria-hidden="true" />
      <WhoWeAre />
      <WherePlayed />
      <div className="h-16 md:h-24 lg:h-28" />
    </div>
  );
}
