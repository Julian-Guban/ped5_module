import React from "react";

function overview() {
  return (
    <div className="overview-container">

      {/* image container */}
      <div className="overview-column1" />

      <div className="overview-column2">
        <div className="overview-column2-border">
          <div className="overview-texts">
            <h2 className="overview-title">SUBJECT OVERVIEW</h2>
            <h3 className="overview-intro">
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
