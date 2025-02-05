import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowUs from "./components/KnowUs";
import Questions from "./components/Questions";
import Comments from "./components/Comments";
import Courses from "./components/Courses";
import Offer from "./components/Offer";
import Contact from './components/Contact';
function App() {
  return (
    <div className="snap-y snap-mandatory h-screen">
      <div className="hero-bg bg-cover bg-center bg-no-repeat w-full overflow-hidden py-10 max-sm:py-6 px-5 snap-start">
        <Navbar />
        <Hero />
      </div>
      <Courses />
      <KnowUs />
      <Questions />
      <Offer />
      <Comments />
      <Contact/>
    </div>
  );
}

export default App;
