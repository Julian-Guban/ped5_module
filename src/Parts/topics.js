import React from "react";
import CardTopics from "../Components/CardTopics";


function topics() {
  return (
    <div className="full-width flex-center">
      <div className="cabinet">
       <CardTopics title={"Use Hand Tools"} num={1} link={"https://groupp3.vercel.app"}/>
       <CardTopics title={"Install and Configure"} num={2} link={"https://chapter2-module.vercel.app"}/>
       <CardTopics title={"Set-up Computer Networks"} num={3} link={"https://chapter-3-six.vercel.app"}/>
       <CardTopics title={"Set-up Computer Servers"} num={4} link={"https://chapter4-module.vercel.app/"}/>
       <CardTopics title={"Maintain and Repair Computer Systems and Networks"} num={5} link={"https://chapter5-cyan.vercel.app/"}/>
      </div>
    </div>
  );
}

export default topics;
