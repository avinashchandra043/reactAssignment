import { CHANGE_TYPE, CHANGE_NUM, initialState } from "./myAction";
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return { ...state, type: action.payload };
    case CHANGE_NUM:
      return { ...state, num: action.payload };
    default:
      return state;
  }
};
