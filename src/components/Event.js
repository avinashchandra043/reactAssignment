import React from "react";
import "./LeftBar.css";
import { connect } from "react-redux";
import { changeType, changeTypeValue,changeNum } from "../store/myAction.js";
function Event({ type, currentType, changeType,changeNum }) {
  const handleEvent = () => {
    const arr = [...currentType];
    arr.includes(type) ? console.log("already present") : arr.push(type);
    changeType(arr);
    changeNum(type);
  };
  return (
    <div className="event" onClick={handleEvent}>
      Event Type {type}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentType: state.my.type,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (value) => dispatch(changeType(value)),
    changeNum: (value) => dispatch(changeNum(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Event);
