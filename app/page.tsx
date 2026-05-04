import HeroMain from "@/components/home/HeroMain";
import WhoWeAre from "@/components/home/WhoWeAre";
import WherePlayed from "@/components/home/WherePlayed";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export const metadata = {
  title: "Human Wannabes",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroMain />
      <div className="h-10 md:h-14 lg:h-8" aria-hidden="true" />
      <UpcomingEvents />
      <div className="h-10 md:h-14 lg:h-8" aria-hidden="true" />
      <WhoWeAre />
      <WherePlayed />
    </div>
  );
}
