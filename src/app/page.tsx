import FAQ from "./components/pages/landing-page/Faq";
import Header from "./components/pages/landing-page/Header";
import Hero from "./components/pages/landing-page/Hero";
import Pricing from "./components/pages/landing-page/Pricing";
import VideoExplanation from "./components/pages/landing-page/VideoExplanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
