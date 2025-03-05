import React from "react";
import Hero from "../Images/image1.png";

function hero() {
  return (
    <div
      className="full-width flex-center"
      style={{
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.71), transparent), url(${Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop:"50px"
      }}
    >
      <div
        style={{
          width: "96%",
          height: "75%",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          border: "4px solid #E7A117",
        }}
      >
        <h1
          style={{
            width: "40%",
            padding: "55px",
            textAlign: "left",
          }}
        >
          Welcome to Computer System Servicing NC II!
        </h1>
      </div>
    </div>
  );
}

export default hero;
