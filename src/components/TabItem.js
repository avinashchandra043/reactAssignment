import React from "react";
import { connect } from "react-redux";
import { changeNum, changeType } from "../store/myAction";
import CloseIcon from "@mui/icons-material/Close";

function TabItem({ type, changeType, currentType, changeNum, currentNum }) {
  const handleCut = () => {
    const arr = [...currentType];
    const newArr = arr.filter(function (value) {
      return value !== type;
    });
    changeType(newArr);
    if (newArr.length === 0) {
      changeNum(0);
    } else {
      changeNum(newArr[newArr.length - 1]);
    }
  };
  const handleActive = () => {
    changeNum(type);
  };
  return (
    <div className="tabItem">
      <div className="tabname" onClick={handleActive}>
        Event Type {type}{" "}
      </div>
      <div className="tabcut" onClick={handleCut}>
        <CloseIcon />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentType: state.my.type,
    currentNum: state.my.num,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (value) => dispatch(changeType(value)),
    changeNum: (value) => dispatch(changeNum(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TabItem);
