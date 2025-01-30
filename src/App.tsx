import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Feature from "./components/Feature";
import KnowUs from "./components/KnowUs";
function App() {
  return (
    <div className=" overflow-hidden">
      <div className="hero-bg w-full overflow-hidden py-10 max-sm:py-6 px-5">
        <Navbar />
        <Hero />
      </div>
      <div className="container mx-auto px-5">
        <KnowUs />
        {/* <Feature /> */}
      </div>
    </div>
  );
}

export default App;
