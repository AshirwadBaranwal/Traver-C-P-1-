import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Aboutsection from "./components/Aboutsection";
import FeaturesSec from "./components/FeaturesSec";
import Desination from "./components/Desination";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <>
      <div className="max-w-[85rem] m-auto">
        <Navbar />
        <HeroSection />
        <Aboutsection />
        <FeaturesSec />
        <Desination />
        <PricingSection />
      </div>
    </>
  );
}

export default App;
