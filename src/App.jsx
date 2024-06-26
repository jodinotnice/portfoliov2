import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Description from "./components/about2.jsx";
import Skills from "./components/skills.jsx";
import Projets from "./components/projets.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import ScrollButton from "./components/functionnalities/ScrollToTop.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Description />
      <Skills />
      <Projets />
      <Contact />
      <ScrollButton />
      <Footer />
    </main>
  );
}

export default App;
