export const initialState = {
  type: [],
  num: 0,
};
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_NUM = "CHANGE_NUM";

export const changeType = (arr) => {
  return {
    type: CHANGE_TYPE,
    payload: arr,
  };
};
export const changeNum = (arr) => {
  return {
    type: CHANGE_NUM,
    payload: arr,
  };
};
