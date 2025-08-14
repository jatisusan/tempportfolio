import Blog from "./sections/Blog";
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
    </main>
  );
};

export default App;
