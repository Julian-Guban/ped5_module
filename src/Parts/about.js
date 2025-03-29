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
          We, The BTVTEICT-COMPUTER-SCIENCE-DEPARTMENT, are a group of students
          who are passionate about technology and programming. We are dedicated
          to providing you with the best learning experience possible. We hope
          you enjoy our content and find it helpful. If you have any questions
          or suggestions, please feel free to contact us. We would love to hear
          from you. Thank you for visiting our website!
        </p>
      </div>
    </div>
  );
}

export default about;
