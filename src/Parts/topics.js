import React from "react";
import CardTopics from "../Components/CardTopics";


function topics() {
  return (
    <div className="full-width flex-center">
      <div className="cabinet">
       <CardTopics title={"Chapter 1: Use Hand Tools"} num={1} link={"https://groupp3.vercel.app"}/>
       <CardTopics title={"Chapter 2: Install and Configure"} num={2}/>
       <CardTopics title={"Chapter 3: Set-up Computer Networks"} num={3}/>
       <CardTopics title={"Chapter 4: Set-up Computer Servers"} num={4} link={"https://chapter4-module.vercel.app/"}/>
       <CardTopics title={"Chapter 5: Maintain and Repair Computer Systems and Networks"} num={5} link={"https://chapter5-cyan.vercel.app/"}/>
      </div>
    </div>
  );
}

export default topics;
