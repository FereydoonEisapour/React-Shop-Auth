import React from "react";
import { Navigate } from "react-router-dom";
import { doSingUp, doLogIn, resetPass, useAuthDispatch, useAuthState } from "../Contexts/AuthContext";

const Login = () => {
  const { userEmail, user } = useAuthState();
  const dispatch = useAuthDispatch();

  const [loginModal, setLoginModal] = React.useState(true);
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  const modalHandler = () => {
    setLoginModal(!loginModal);
  };
  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const SignInUserWithEmailAndPassword = (e) => {
    e.preventDefault();
    doSingUp(dispatch, emailInput, passwordInput);
  };
  const LogInUserWithEmailAndPassword = (e) => {
    e.preventDefault();
    doLogIn(dispatch, emailInput, passwordInput);
  };
  const resetPassword = () => {
    resetPass(dispatch, emailInput)
  }

  if (user) return <Navigate to="/dashboard" />;
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 col-12 text-color ">
      <div className="form  col-11 col-md-6 col-lg-4  p-3 m-3  cart-background">
        <div className="inputs d-flex justify-content-center row  m-4 ">
          <label htmlFor="email" className="">Email</label>
          <input
            className="m-2 p-1"
            type="email"
            name="email"
            onChange={(e) => emailInputHandler(e)}
          />
          <label htmlFor="password" className="">Password</label>
          <input
            className="m-2 p-1"
            type="password"
            name="password"
            onChange={(e) => passwordInputHandler(e)}
          />
        </div>
        <div className="buttons m-4 text-center">
          {loginModal ? (
            <button
              className="btn btn-primary col-8 "
              onClick={(e) => LogInUserWithEmailAndPassword(e)}
            >
              Login
            </button>
          ) : (
            <button
              className="btn btn-primary col-8 "
              onClick={(e) => SignInUserWithEmailAndPassword(e)}
            >
              Signup
            </button>
          )}
        </div>
        <div className="text-center ">
          {loginModal ? (
            <button className="btn col-8  btn-light" onClick={resetPassword}>reset password</button>
          ) : (
            <></>
          )}
        </div>
        <div className="setlogin text-center p-2">
          {loginModal ? (
            <button className="btn btn-light" onClick={(e) => modalHandler(e)}>
              Dont have account
            </button>
          ) : (
            <button className="btn btn-light " onClick={(e) => modalHandler(e)}>
              <small className="fw-bold"> have account .Please Login</small>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
