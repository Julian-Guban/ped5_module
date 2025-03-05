import React from "react";
import CardTopics from "../Components/CardTopics";


function topics() {
  return (
    <div className="full-width flex-center">
      <div className="grid col-2 gap-2" style={{width: "1000px", padding: "15px"}}>
       
       <CardTopics title={"Title"} num={1}/>
       <CardTopics title={"Title"} num={2}/>
       <CardTopics title={"Title"} num={3}/>
       <CardTopics title={"Title"} num={4}/>
       <CardTopics title={"Title"} num={5}/>
      </div>
    </div>
  );
}

export default topics;
