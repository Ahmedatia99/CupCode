import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowUs from "./components/KnowUs";
import Questions from "./components/Questions";
function App() {
  return (
    <div className=" overflow-hidden">
      <div className="hero-bg w-full overflow-hidden py-10 max-sm:py-6 px-5">
        <Navbar />
        <Hero />
      </div>
      <KnowUs />
      <Questions />
    </div>
  );
}

export default App;
