import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { portFolioData } from "../constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experiences />
      <About />
      <Art />
      <Menu menuData={portFolioData.ballam} />
      <Menu menuData={portFolioData.landrocker} />
      <Menu menuData={portFolioData.radioBinam} />
      <Menu menuData={portFolioData.pianoj} />
      <Menu menuData={portFolioData.ketoHealthy} />
      <Contact />
    </main>
  );
};

export default App;
