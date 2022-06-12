import React from "react";

import Context from "./context";
import * as api from "../../api";
import Reducer from "./reducer";

const userJWT = localStorage.getItem("userJWT");

const UserState = ({ children }) => {
  // const [user, setUser] = React.useState(undefined);
  let initialState = { user: undefined, loading: false };
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  React.useEffect(() => {
    if (userJWT) {
      api
        .getUser()
        .then((res) => {
          dispatch({ type: "SET_DETAILS", payload: res.data });
        })
        .catch((error) =>
          console.log("🚀 ~ file: UserState.js ~ line 22 ~ React.useEffect ~ error", error)
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
        console.log("🚀 ~ file: UserState.js ~ line 38 ~ signIn ~ error", error)
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
        console.log("🚀 ~ file: UserState.js ~ line 38 ~ signIn ~ error", error)
      });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  // React.useEffect(() => {
  //   if (userJWT) {
  //     api
  //       .getUser()
  //       .then((res) => {
  //         console.log("=>(UserState.js:15) res.data", res.data);
  //         dispatch({ type: "GET_DETAILS", payload: res.data });
  //         console.log("=>(UserState.js:13) state", state);
  //       })
  //       .catch((error) => console.log("=>(UserState.js:14) error", error));
  //   }
  // }, []);

  // const signIn = async (payload) => {
  //   dispatch({ type: "SET_LOADING", payload: true });
  //   api
  //     .signIn(payload)
  //     .then((response) => {
  //       console.log("=>(UserReducer.js:10) response", response);
  //       localStorage.setItem("userJWT", response.data.token);
  //       console.log(
  //         "=>(UserReducer.js:12) response.data.token",
  //         response.data.token
  //       );
  //       console.log(
  //         "=>(UserReducer.js:13) response.data.result",
  //         response.data.result
  //       );
  //       dispatch({
  //         type: "LOGIN",
  //         payload: response.data.result,
  //       });
  //       dispatch({ type: "SET_LOADING", payload: false });
  //     })
  //     .catch((error) => {
  //       console.log("=>(UserReducer.js:10) error", error);
  //     });
  //   console.log("=>(UserState.js:30) payload", payload);
  //   // dispatch({ type: "GET_DETAILS", payload: state });
  // };

  // const signOut = () => {
  //   dispatch({ type: "LOGOUT" });
  // };

  return (
    <Context.Provider
      value={{
        signIn,
        signUp,
        signOut,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserState;
