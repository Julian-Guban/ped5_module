import React from "react";
import About from "../Images/image2.png";

function about() {
  return (
    <div className="full-width flex-column">
      <div
        className="full-width flex-center filter"
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   background: `linear-gradient(to right, rgba(0, 0, 0, 0.71), transparent), url(${About})`,
          background: `url(${About})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="full-wdith flex-center flex-column"
        style={{
          padding: "15px",
          margin: "10px",
          borderBottom: "3px solid #515864",
        }}
      >
        <div
          style={{
            width: "inherit",
            height: "fit-content",
            border: "2px solid #E7A117",
          }}
        >
          <h1
            style={{
              color: "#E7A117",
              padding: "15px",
            }}
          >
            ABOUT THE AUTHORS
          </h1>
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
