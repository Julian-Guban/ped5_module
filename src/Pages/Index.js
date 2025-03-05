import React from "react";
import Hero from "../Parts/hero";
import Overview from "../Parts/overview";
import About from "../Parts/about";
import Topics from "../Parts/topics";
import Footer from "../Parts/footer";

function Index() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <Overview />
        <About />
        <Topics/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Index;
