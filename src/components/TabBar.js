import React from "react";
import "./LeftBar.css";
import { connect } from "react-redux";
import { changeType } from "../store/myAction";
import TabItem from "./TabItem";
function TabBar({ currentType }) {
  console.log(currentType);
  return (
    <div className="tabbar">
      {currentType.map((value) => (
        <TabItem key={value} type={value} />
      ))}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
