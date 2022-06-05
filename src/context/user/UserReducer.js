import * as api from "../../api";

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("=>(UserReducer.js:25) LOGIN");
      return { ...state, user: action.payload };
    // console.log("=>(UserReducer.js:26) newState", newState);
    // return newState;
    case "LOGOUT":
      localStorage.removeItem("userJWT");
      return { ...state, user: undefined };
    case "GET_DETAILS":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
