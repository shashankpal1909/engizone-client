import React from "react";

import Context from "./context";
import * as api from "../../api";
import Reducer from "./reducer";

const userJWT = localStorage.getItem("userJWT");

const State = ({ children }) => {
  // const [user, setUser] = React.useState(undefined);
  let initialState = { user: undefined, loading: false };
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  React.useEffect(() => {
    if (userJWT) {
      dispatch({ type: "SET_LOADING", payload: true });
      api
        .getUser()
        .then((res) => {
          dispatch({ type: "SET_DETAILS", payload: res.data });
          dispatch({ type: "SET_LOADING", payload: false });
        })
        .catch((error) =>
          console.log(
            "🚀 ~ file: UserState.js ~ line 22 ~ React.useEffect ~ error",
            error
          )
        );
    }
  }, []);

  const signIn = async (payload) => {
    dispatch({ type: "SET_LOADING", payload: true });
    api
      .signIn(payload)
      .then((response) => {
        localStorage.setItem("userJWT", response.data.token);
        dispatch({
          type: "SIGN_IN",
          payload: response.data.result,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: UserState.js ~ line 38 ~ signIn ~ error",
          error
        );
      });
  };

  const signUp = async (payload) => {
    dispatch({ type: "SET_LOADING", payload: true });
    api
      .signUp(payload)
      .then((response) => {
        localStorage.setItem("userJWT", response.data.token);
        dispatch({
          type: "SIGN_UP",
          payload: response.data.result,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: UserState.js ~ line 38 ~ signIn ~ error",
          error
        );
      });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <Context.Provider
      value={{
        signIn,
        signUp,
        signOut,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
