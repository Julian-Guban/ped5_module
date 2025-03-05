import React from "react";
import Overview from "../Images/image.png";

function overview() {
  return (
    <div
      className="full-width grid col-2"
      style={{
        height: "375px",
      }}
    >
      <div
        className="full-width flex-center"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `url(${Overview})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          width: "inherit",
          height: "82%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          padding: "25px 20px",
        }}
      >
        <div
          style={{
            width: "inherit",
            height: "310px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            borderRadius: "5px",
            border: "2px solid #E7A117",
          }}
        >
          <div style={{ width: "100%", 
                overflow: "hidden",
           }}>
            <h2
              style={{
                width: "40%",
                color: "#E7A117",
                padding: "55px",
                paddingBottom: "0px",
                textAlign: "left",
              }}
            >
              SUBJECT OVERVIEW
            </h2>
            <h3
              style={{
                width: "75%",
                padding: "55px",
                paddingTop: "15px",
                lineHeight: "35px",
                fontWeight: "lighter",
                textAlign: "left",
              }}
            >
              Computer System Servicing is a branch of information technology
              services that is concerned with the installation, configuration,
              setting up, and maintenance of computer systems, networks, and
              servers.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default overview;
