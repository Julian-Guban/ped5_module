import React from "react";
import CardTopics from "../Components/CardTopics";


function topics() {
  return (
    <div className="full-width flex-center">
      <div className="cabinet">
       <CardTopics title={"Title"} num={1}/>
       <CardTopics title={"Title"} num={2}/>
       <CardTopics title={"Title"} num={3}/>
       <CardTopics title={"Title"} num={4} link={"https://chapter4-module.vercel.app/"}/>
       <CardTopics title={"Title"} num={5}/>
      </div>
    </div>
  );
}

export default topics;
