import React from "react";
import EventData from "./EventData";
import "./LeftBar.css";
import TabBar from "./TabBar";

function RightBar() {
  return (
    <div className="rightbar">
      <div>
        <TabBar />
      </div>
      <div>
        <EventData />
      </div>
    </div>
  );
}

export default RightBar;
