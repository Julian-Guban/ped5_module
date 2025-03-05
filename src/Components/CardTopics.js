import React from "react";

const card = {
  width: "500px",
  height: "fit-content",
  border: "2px solid #E7A117",
};

// function CardTopics({ title, num, progress }) {
function CardTopics({ title, num }) {
  return (
    <div style={card}>
      <h1 style={{ color: "#E7A117", padding: "15px" }}> CHAPTER {num}: </h1>
      <h3 style={{ padding: "0px 15px" }}>{title}</h3>
      <div className="flex-center" style={{ padding: "15px", gap: "1em" }}>
        <div
          style={{
            width: "90%",
            height: "30px",
            backgroundColor: "gray",
            border: "none",
            borderRadius: "50px",
          }}
        />
        <a className="card-btn" href="/">
          View Chapter
        </a>
      </div>
    </div>
  );
}

export default CardTopics;
