import React, { useState } from "react";
import "./LeftBar.css";
import { changeType } from "../store/myAction";
import { connect } from "react-redux";
function EventData({ currentNum }) {
  const value = currentNum;
  return (
    <div className="eventdata">
      {value ? (
        <>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
          <div>data of event type {value}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentType: state.my.type,
    currentNum: state.my.num,
  };
};
export default connect(mapStateToProps)(EventData);
