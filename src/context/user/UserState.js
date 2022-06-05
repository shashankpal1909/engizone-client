import React from "react";

import UserContext from "./UserContext";
import * as api from "../../api";
import UserReducer from "./UserReducer";

const userJWT = localStorage.getItem("userJWT");

const UserState = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  let initialState = { user };
  const [state, dispatch] = React.useReducer(UserReducer, initialState);

  React.useEffect(() => {
    if (userJWT) {
      api
        .getUser()
        .then((res) => {
          console.log("=>(UserState.js:15) res.data", res.data);
          dispatch({ type: "GET_DETAILS", payload: res.data });
          console.log("=>(UserState.js:13) state", state);
        })
        .catch((error) => console.log("=>(UserState.js:14) error", error));
    }
  }, []);

  const signIn = async (payload) => {
    api
      .signIn(payload)
      .then((response) => {
        console.log("=>(UserReducer.js:10) response", response);
        localStorage.setItem("userJWT", response.data.token);
        console.log(
          "=>(UserReducer.js:12) response.data.token",
          response.data.token
        );
        console.log(
          "=>(UserReducer.js:13) response.data.result",
          response.data.result
        );
        dispatch({
          type: "LOGIN",
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log("=>(UserReducer.js:10) error", error);
      });
    console.log("=>(UserState.js:30) payload", payload);
    // dispatch({ type: "GET_DETAILS", payload: state });
  };

  const signOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <UserContext.Provider
      value={{
        signIn,
        signOut,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
