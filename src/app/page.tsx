import Header from "./components/pages/Header";
import Hero from "./components/pages/Hero";
import Pricing from "./components/pages/Pricing";
import VideoExplanation from "./components/pages/VideoExplanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
    </div>
  );
}
