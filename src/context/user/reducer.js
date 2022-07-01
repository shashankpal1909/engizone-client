const UserReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "SET_DETAILS":
      return { ...state, user: action.payload };
    case "SIGN_OUT":
      localStorage.removeItem("userJWT");
      return { ...state, user: undefined };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_SNACK_BAR_VISIBLE":
      return { ...state, isSnackBarVisible: action.payload };
    case "SET_SNACK_BAR_DATA":
      return { ...state, snackBarData: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
