import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="homeIn">
        <div className="heading">Event Viewer</div>
        <div className="bar">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
