import React from "react";
import Hero from "../Parts/hero";
import Overview from "../Parts/overview";
import About from "../Parts/about";
import Topics from "../Parts/topics";

function Index() {
  return (
    <div>
      <br />
      <br />
      <header>
        <Hero />
      </header>
      <main>
        <Overview />
        <About />
        <Topics/>
      </main>
    </div>
  );
}

export default Index;
