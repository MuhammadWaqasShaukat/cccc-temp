import "./App.css";
import AboutSection from "./components/aboutSection";
import HeroSection from "./components/heroSection";
import MintSection from "./components/mintSection";
import SocialSection from "./components/socialSection";
import TopBar from "./components/topbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <HeroSection />
      <AboutSection />
      <MintSection />
      <SocialSection />
    </div>
  );
}

export default App;
