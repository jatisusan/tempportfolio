import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
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
    </main>
  );
};

export default App;
