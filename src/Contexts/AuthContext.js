import React from "react";
import toast from "react-hot-toast";
import { dbUserTotal } from "../Data/data";
import { auth } from "../Data/Firebase";
import { getCookie, removeCookie, setCookies } from "../hooks/cookies";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function reducer(currentState, newState) {
  return { ...currentState, ...newState };
}
function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");
  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");
  return context;
}
const initialState = {
  user: null,
  userEmail: null,
  error: null,
  status: false,
};

function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{props.children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
function doSingUp(dispatch, emailInput, passwordInput) {
  auth
    .createUserWithEmailAndPassword(emailInput, passwordInput)
    .then((result) => {
      toast.success("Account create success");
      dispatch({ user: result.user });
      dbUserTotal(result.user.email).add({ total: 0 });
      removeCookie('user')
      setCookies('user', result.user.email)
    })
    .catch((error) => { if (error.code === "auth/email-already-in-use") toast.error("Email alredy in use . Please login ") })
}
function doLogIn(dispatch, emailInput, passwordInput) {
  auth.signInWithEmailAndPassword(emailInput, passwordInput)
    .then((result) => {
      dispatch({ user: result.user, userEmail: result.user.email });
      removeCookie('user')
      setCookies('user', result.user.email)
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") { toast.error("Email not found , Please Signup") }
    });
}
function resetPass(dispatch, emailInput) {
  auth.sendPasswordResetEmail(emailInput)
    .then(() => toast.success("We send reset password link to your Mail"))
    .then(removeCookie('user'))
    .catch((error) => { toast.error(error.code) })
}
function doLogOut(dispatch) {
  dispatch({ userEmail: null })
  removeCookie('user')
}
if (getCookie !== "") initialState.userEmail = getCookie('user')
export { AuthProvider, useAuthState, useAuthDispatch, doSingUp, doLogIn, resetPass, doLogOut };