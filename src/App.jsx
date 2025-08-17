import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

const App = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
