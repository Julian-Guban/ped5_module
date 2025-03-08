import "./App.css";
import Hero from "./Parts/hero";
import Overview from "./Parts/overview";
import About from "./Parts/about";
import Topics from "./Parts/topics";
import Footer from "./Parts/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Hero />
      </header>
      <main>
        <Overview />
        <About />
        <Topics />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
