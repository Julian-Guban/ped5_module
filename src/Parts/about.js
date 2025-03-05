import React from "react";

function about() {
  return (
    <div className="full-width flex-column">
      <div className="filter about-img" />

      <div className="about-texts">
        <div className="about-title-border">
          <h1 className="about-title">ABOUT THE AUTHORS</h1>
        </div>
        <p style={{ width: "70%", textAlign: "center", padding: "40px 25px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique, purus nec convallis feugiat, velit purus malesuada urna, a
          vehicula odio nunc sed nisl. Praesent ac lacus vitae mauris bibendum
          tempus. Sed ut lorem et mi faucibus sollicitudin. Integer tincidunt
          dictum leo, ac vehicula urna dapibus non. Vestibulum ut mauris leo.{" "}
        </p>
      </div>
    </div>
  );
}

export default about;
