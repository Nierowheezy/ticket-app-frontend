import _ from "lodash";
import { AUTHENTICATE_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
