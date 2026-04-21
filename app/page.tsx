import HeroMain from "@/components/home/HeroMain";
import WhoWeAre from "@/components/home/WhoWeAre";
import WherePlayed from "@/components/home/WherePlayed";
import StatsBar from "@/components/home/StatsBar";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export const metadata = {
  title: "Human Wannabes",
};

export default function HomePage() {
  return (
    <div className="[&>*+*]:mt-16 md:[&>*+*]:mt-24 lg:[&>*+*]:mt-28 pb-16 md:pb-24">
      <HeroMain />
      <WhoWeAre />
      <WherePlayed />
      <StatsBar />
      <UpcomingEvents />
    </div>
  );
}
